import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import homesearch from './homesearch.js';
import detalinfo from './detalinfo.js';
import collection from './collection.js';
export default new Vuex.Store({
  state: {
    username:'佛欲',
    password:'',
    loginshow:false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    homesearch,   // 首页搜索
    detalinfo,    // 详情加购
    collection    // 收藏
  }
})
