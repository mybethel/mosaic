import findIndex from 'lodash.findindex';
import localforage from 'localforage';
import { ObjectID } from 'bson';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'mosaic',
})

const state = {
  songs: {},
};

const getters = {
  slides: state => songId => {
    let song = state.songs[songId];
    if (!song) return [];
    return song.slides;
  }
};

const actions = {
  create({ commit }, song = {}) {
    song.id = new ObjectID().toString();
    commit('newSong', song);
  },
  init({ commit }, auth) {
    return localforage.getItem('songs').then(value => {
      if (!value) return;
      commit('setSongs', value);
      return value;
    });
  },
};

const mutations = {
  newSong(state, song) {
    let songId = song.id;
    delete song.id;
    state.songs[songId] = song;
  },
  setSongs(state, songs) {
    state.songs = songs;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
