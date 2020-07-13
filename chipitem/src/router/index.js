import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './home';
import my from './my';
import lists from './lists';
import detalinfo from './detalinfo';
import search from './search';
import publics from './publics';
import homesearch from './homesearch';
import reserve from './reserve';
import choice from './choice';
import order from './order';

const routes = [
  {
    path: '/',
    redirect: '/guidepage'
  },
  home,  //首页
  ...my,    //我的
  lists,  //列表页
  detalinfo,  //详情页
  search,   //搜索页
  ...publics,  //引导页 广告页
  homesearch,  //首页搜索
  reserve,  //预定订单页
  choice,  //资源确定
  order, // 我的订单
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "con",
})

export default router
