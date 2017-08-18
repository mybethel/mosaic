import 'normalize.css';
import './styles/importer.scss';

import Vue from 'vue';

import './components';
import router from './routes';
import store from './store';

var app = new Vue({
  router,
  store,
}).$mount('#app');
