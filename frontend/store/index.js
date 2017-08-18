import localforage from 'localforage';
import { ObjectID } from 'bson';
import Vue from 'vue';
import Vuex from 'vuex';

import lyrics from './lyrics';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'mosaic',
})

Vue.use(Vuex);

const persistent = store => {
  store.subscribe((mutation, state) => {
    Object.keys(state).forEach(module => {
      Object.keys(state[module]).forEach(key => {
        localforage.setItem(key, state[module][key]);
      });
    });
  });
};

export default new Vuex.Store({
  modules: {
    lyrics,
  },
  plugins: [persistent],
});
