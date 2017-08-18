<template>
  <div></div>
</template>

<script>
export default {
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
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

div {
  -webkit-app-region: drag;
  background-color: $theme-dark-medium;
  height: 45px;
  max-height: 45px;
  width: 100%;
}
</style>
