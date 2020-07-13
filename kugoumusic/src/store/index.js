import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import play from "./play.js";
import login from "./login.js";
import user from "./user.js";
export default new Vuex.Store({
  state: {
    username:"小佛"
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    play,
    login,
    user
  }
})
