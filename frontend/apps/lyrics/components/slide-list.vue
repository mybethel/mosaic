<script>
const { Menu, MenuItem } = remote;

import draggable from 'vuedraggable'
import marked from 'marked';
marked.setOptions({
  breaks: true,
});

export default {
  data() {
    return {
      menu: new Menu(),
      selected: -1,
    };
  },
  components: {
    draggable,
  },
  computed: {
    slides() {
      return this.$store.getters['lyrics/slides'](this.song).map(slide => marked(slide, { sanitize: true }));
    }
  },
  mounted() {
    this.menu.append(new MenuItem({ label: 'Delete', click() { console.log('item 1 clicked') }}));
    this.menu.append(new MenuItem({type: 'separator' }));
    this.menu.append(new MenuItem({ label: 'Add Slide', click() { console.log('item 1 clicked') }}))
  },
  methods: {
    select(index) {
      this.selected = index;
    },
    showMenu(index) {
      this.menu.popup(remote.getCurrentWindow())
    }
  },
  props: {
    song: String,
  },
};
</script>

<template>
  <draggable element="ul" v-model="slides">
    <router-link tag="li" :to="{ name: 'lyrics.slide', params: { id: song, slideId: index } }" v-for="(slide, index) in slides" :key="index" @contextmenu.native="showMenu(index)" v-html="slide" />
  </draggable>
</template>

<style lang="scss" scoped>
  section.pane,
  div.pane {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div.pane {
    border-right: 1px solid #DEDEDE;
    flex-direction: column;
    height: 100%;
    &.list {
      max-width: 280px;
      overflow-y: auto;
      justify-content: flex-start;
      ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        li {
          border-bottom: 1px solid #DEDEDE;
          padding: 10px 20px;
        }
      }
    }
  }
  h2 {
    color: #B8BDC3;
  }
  .list li {
    border-left: 5px solid transparent;
    color: #A0A0A0;
    font-size: 15px;
    &:hover {
      background: #FFF;
    }
    &.router-link-active {
      background: #EFEFEF;
      border-color: #1591B5;
    }
  }
</style>
