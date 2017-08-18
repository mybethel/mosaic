<template>
  <ul>
    <div class="grabber"></div>
    <li class="title">Playlist</li>
    <router-link class="link" tag="li" to="/lyrics/592cd3684e98370000a511f0">Holy is the Lord</router-link>
    <li class="spacer"></li>
    <li class="title">Sources</li>
    <li class="link" v-for="app in apps"><icon :style="'color:' + app.color" :glyph="app.icon || app.title.toLowerCase()" width="18" />{{ app.title }}</li>
  </ul>
</template>

<script>
import apps from '../apps';

export default {
  data() {
    return {
      apps,
    }
  },
  props: {
    color: {
      type: String,
      default: '#1591B5'
    },
  	stroke: {
      type: Number,
      default: 4
    },
    radius: {
      type: Number,
      default: 50
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

ul {
  background: #2F3235;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 210px;
  overflow-y: auto;
  padding: 0;
  width: 210px;
  li {
    line-height: 25px;
    list-style: none;
    margin: 0;
    padding: 5px 10px;

    &.title {
      color: #8C8E90;
      font-size: 12px;
      padding-bottom: 0;
      padding-top: 10px;
      text-transform: uppercase;
    }
    &.link {
      color: #CFCFCF;
      font-size: 14px;
      &:hover, &.router-link-active {
        background: rgba(255, 255, 255, 0.05);
      }
      svg {
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    &.spacer {
      flex: 1;
    }
  }
}

div.grabber {
  -webkit-app-region: drag;
  flex-shrink: 0;
  height: 29px;
  width: 100%;
}
</style>
