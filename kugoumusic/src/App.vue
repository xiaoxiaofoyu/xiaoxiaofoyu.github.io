<template>
  <div id="app">
    <!-- 头部组件 -->
    <headerNav></headerNav>
    <!-- 头部组件end -->
    <!-- 一级路由显示位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
import headerNav from "./components/public/headerNav.vue"; // 头部组件
export default {
  components: {
    headerNav
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
}
ul,
ol,
li {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
