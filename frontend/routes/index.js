import Vue from 'vue';
import VueRouter from 'vue-router';

import { routes } from '../apps';

Vue.use(VueRouter);

import Welcome from './welcome';

const router = new VueRouter({
  routes: [
    { path: '/', component: Welcome },
  ].concat(routes).concat([
    { path: '*', redirect: '/' },
  ]),
});

export default router;
