import Vue from 'vue';

let allIcons = require.context('../../resources/icons', false, /\.svg$/);
const icons = allIcons.keys().map(allIcons).reduce((state, icon) => {
  state[icon.default.id] = icon.default;
  state[icon.default.id].id = `#${icon.default.id}`;
  return state;
}, {});

Vue.component('icon', {
  computed: {
    defaultHeight() {
      return this.height || this.icons[this.glyph].viewBox.split(' ')[3];
    },
    defaultWidth() {
      return this.width || this.icons[this.glyph].viewBox.split(' ')[2];
    },
  },
  data() {
    return { icons };
  },
  props: ['glyph', 'height', 'width'],
  template: '<svg :width="defaultWidth" :height="height || defaultHeight" :viewBox="icons[glyph].viewBox" v-if="icons[glyph]" style="fill: currentColor;"><use :xlink:href="icons[glyph].id" /></svg>',
});

module.exports = icons;
