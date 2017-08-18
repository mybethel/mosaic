<script>
export default {
  data() {
    return {
      selected: -1,
    };
  },
  mounted() {
    this.$store.dispatch('lyrics/init');
  },
  methods: {
    select(index) {
      this.selected = index;
    }
  },
  props: ['id'],
};
</script>

<template>
  <section class="pane">
    <div class="pane list">
      <slide-list :song="id" />
    </div>
    <div class="pane">
      <router-view>
        <h2>Holy is the Lord</h2>
      </router-view>
    </div>
  </section>
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
