import Vue from 'vue';
import Sortable from 'vue-sortable'

Vue.use(Sortable)

import './icon';

import Sidebar from './sidebar.vue';
import Toolbar from './toolbar.vue';

Vue.component('sidebar', Sidebar);
Vue.component('toolbar', Toolbar);

export {
  Sidebar,
  Toolbar,
};
