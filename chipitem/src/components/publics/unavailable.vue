<template>
  <div>
    <div class="Unavailable">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.go(-1)"></i>
        暂无此功能
      </header>
      <!-- 顶部导航end -->
      <!-- 推荐访问 -->
      <div class="tips">
        <div class="line"></div>
        <div class="words">猜你想看</div>
      </div>
      <recommend></recommend>
      <!-- 推荐访问end -->
    </div>
  </div>
</template>
<script>
import recommend from "./recommend.vue";
export default {
  components: {
    recommend
  }
};
</script>
<style lang="scss" scoped>
#app > div {
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.Unavailable {
  padding-top: 60px;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    border-bottom: 1px solid #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
    color: #333333;
    z-index: 1000;
    i {
      width: 44px;
      height: 44px;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: bolder;
      text-align: center;
      line-height: 44px;
      font-size: 18px;
    }
  }
  // 提示
  .tips {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    .line {
      flex: 0 0 95%;
      height: 1px;
      background-color: #cccccc;
    }
    .words {
      background-color: #efeff4;
      position: absolute;
      color: #666666;
      font-size: 12px;
      padding: 0 10px;
    }
  }
}
</style>