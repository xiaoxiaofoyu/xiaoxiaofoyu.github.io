<template>
  <div class="searchbody">
    <div class="Search">
      <!-- 顶部搜索 -->
      <header class="search">
        <div class="inp">
          <div class="se_icon">
            <i class="se_ifont iconfont icon-sousuo"></i>
          </div>
          <input type="text" placeholder="目的地、主题或关键词" />
        </div>
        <div class="cancel" @click="$router.push('/lists')">取消</div>
      </header>
      <!-- 顶部搜索end -->
      <!-- 侧边导航 -->
      <aside class="aside">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <router-link tag="div" to="/search/hot" class="swiper-slide">热门</router-link>
            <router-link tag="div" to="/search/periphery" class="swiper-slide">周边</router-link>
            <router-link tag="div" to="/search/domestic" class="swiper-slide">境内</router-link>
            <router-link tag="div" to="/search/hkmt" class="swiper-slide">中国港澳台</router-link>
            <router-link tag="div" to="/search/japan" class="swiper-slide">日本</router-link>
            <router-link tag="div" to="/search/southasia" class="swiper-slide">东南亚</router-link>
            <router-link tag="div" to="/search/europe" class="swiper-slide">欧洲</router-link>
            <router-link tag="div" to="/search/america" class="swiper-slide">美洲</router-link>
            <router-link tag="div" to="/search/amea" class="swiper-slide">澳中东非</router-link>
            <router-link tag="div" to="/search/visaexemption" class="swiper-slide">免签</router-link>
            <router-link tag="div" to="/search/visavonarrival" class="swiper-slide">落地签</router-link>
          </div>
        </div>
      </aside>
      <!-- 侧边导肮end-->
      <!-- 搜索内容 -->
      <div class="search_con">
        <router-view></router-view>
      </div>
      <!-- 搜索内容end -->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: "auto"
    });
  }
};
</script>

<style lang="scss" scoped>
.Search {
  width: 100%;
  // 顶部搜索
  .search {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 12px;
    height: 44px;
    background-color: #ffffff;
    box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    .inp {
      flex: 1;
      height: 32px;
      width: 100%;
      display: flex;
      .se_icon {
        width: 26px;
        height: 32px;
        background-color: #f4f4f4;
        border-radius: 16px 0 0 16px;
        text-align: center;
        line-height: 32px;
        .se_ifont {
          font-size: 14px;
          color: #999999;
        }
      }
      input {
        flex: 1;
        height: 32px;
        border: none;
        outline: none;
        border-radius: 0 16px 16px 0;
        background-color: #f4f4f4;
        &::placeholder {
          font-size: 14px;
          color: #999999;
        }
      }
    }
    .cancel {
      width: 32px;
      margin-left: 20px;
      font-size: 14px;
      color: #333333;
      line-height: 32px;
      text-align: center;
    }
  }
  // 侧边导航
  .aside {
    width: 80px;
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    background-color: #f4f4f4;
    .swiper-container {
      width: 80px;
      // height: calc(~"100vh - 50px");
    }
    .swiper-slide {
      width: 80px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 14px;
      color: #666666;
      &.con {
        background-color: #ffffff;
      }
    }
  }
  // 搜索内容
  .search_con {
    width: 100%;
    padding-top: 50px;
    padding-left: 80px;
    box-sizing: border-box;
  }
}
</style>