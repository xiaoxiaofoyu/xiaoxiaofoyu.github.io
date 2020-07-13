<template>
  <div>
    <div class="adpage">
      <img src="../../assets/images/adimg/02.jpg" alt />
      <div class="time" @click="$router.push('/home')">
        <van-circle
          v-model="currentRate"
          layer-color="#f2f2f2"
          size="40"
          :rate="100"
          stroke-width="100"
          :speed="25"
        />
        <div class="text">跳过</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0
    };
  },
  created() {
    let timer = setInterval(() => {
      if (this.currentRate == 100) {
        clearInterval(timer);
        this.$router.push("/home");
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
#app > div {
  width: 100%;
  height: 100%;
}
.adpage {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .time {
    position: absolute;
    top: 10px;
    right: 10px;
    .text {
      font-size: 14px;
      color: #ffffff;
      position: relative;
      top: -30px;
      left: 0;
      text-align: center;
      line-height: 14px;
    }
  }
}
</style>