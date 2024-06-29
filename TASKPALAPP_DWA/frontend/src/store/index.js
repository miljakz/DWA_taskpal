import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setUser', null);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user
  }
});
