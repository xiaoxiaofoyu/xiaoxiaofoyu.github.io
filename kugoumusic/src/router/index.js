import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 路由文件
import home from "./home.js";
import play from "./play.js";
import user from "./user.js";
const routes = [
  {
    path:"/",
    redirect: "/home"
  },
  home , // 首页
  play , // 播放页
  user // 个人页
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
