import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 1.0 引入swiper
import 'swiper/css/swiper.css';
// 2.0 引入axios
import axios from "axios";
axios.defaults.baseURL = "http://music.kele8.cn/";
Vue.prototype.$axios = axios;
// 3.0 引入时间处理模块
import moment from "moment";
Vue.filter("dateFormat", function (dateStr) {
  return moment(dateStr).format("mm:ss");
})
// 4.0 引入阿里巴巴字体图标
import "./assets/font/iconfont.css";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
