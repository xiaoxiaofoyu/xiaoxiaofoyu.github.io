<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/images/adimg/05.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/adimg/07.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/adimg/08.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/adimg/01.jpg" alt />
          <van-button color="#0264E5" plain round @click="$router.push('/home')">开启旅程</van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#app > div {
    width: 100%;
    height: 100%;
    background-color: #000000;
}
.swiper-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .van-button {
      position: absolute;
      bottom: 60px;
      left: 0;
      right: 0;
      margin: 0 auto;
      letter-spacing: 3px;
      border-color: #ffffff;
  }
}
</style>