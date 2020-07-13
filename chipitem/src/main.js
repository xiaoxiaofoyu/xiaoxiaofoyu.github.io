import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 1.0 引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 5.0 引入字体图标样式
import "./assets/font/iconfont.css";

// 6.0 引入swiper
import "swiper/css/swiper.min.css";

// 7.0 引入axios
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3001/';
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


// 路由置顶问题
router.afterEach(() => {
  window.scrollTo(0, 0)
  // console.log(to,from);
  // next();
  
})

