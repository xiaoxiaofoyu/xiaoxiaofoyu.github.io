<template>
  <div>
    <div class="Order">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.go(-1)"></i>
        我的订单
      </header>
      <!-- 顶部导航end -->
      <!-- 全部订单 -->
      <div class="orders">
        <ul>
          <li v-for="(item,index) in $store.state.detalinfo.shopcar" :key="index">
            <div class="name">{{item.hotelname}}</div>
            <div class="address">{{item.hoteladdress}}</div>
            <div class="time">
              <span class="time1">{{item.starttimes}}</span>至
              <span class="time2">{{item.endtimes}}</span>
              <span class="num">1晚/{{item.hotelnum}}间</span>
            </div>
            <div class="info">
              <div class="price">
                <span class="yuan">￥</span>
                <span class="num">{{item.price}}</span>
              </div>
              <!-- <div class="state">待支付</div> -->
              <div class="state">待出行</div>
              <!-- <div class="state">已完成</div> -->
            </div>
          </li>
        </ul>
      </div>
      <!-- 全部订单end -->
      <div class="tips">
        <div class="line"></div>
        <div class="words">没有更多订单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // hotelname: "",
      // hoteladdress: "",
      // starttimes: "",
      // endtimes: "",
      // price: 0,
      // hotelnum: ""
    };
  },
  // created() {
  //   let index = this.$store.state.detalinfo.index;
  //   this.hotelname = this.$store.state.detalinfo.shopcar[index].hotelname;
  //   this.hoteladdress = this.$store.state.detalinfo.shopcar[index].hoteladdress;
  //   this.starttimes = this.$store.state.detalinfo.shopcar[index].starttimes;
  //   this.endtimes = this.$store.state.detalinfo.shopcar[index].endtimes;
  //   this.price = this.$store.state.detalinfo.shopcar[index].price;
  //   this.hotelnum = this.$store.state.detalinfo.shopcar[index].hotelnum;
  // }
  beforeRouteLeave(to, from, next) {
    // 如果即将跳转回去选择资源页，则跳到我的界面
    if (to.path == "/choice") {
      next("/my");
    }
    next();
  }
};
</script>

<style lang="scss" scoped>
#app > div {
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.Order {
  padding-top: 44px;
  width: 100%;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
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
  // 订单
  .orders {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        flex: 0 0 95%;
        background-color: #ffffff;
        margin-top: 10px;
        border-radius: 5px;
        position: relative;
        .name {
          padding: 10px;
          font-size: 14px;
          color: #333333;
          font-weight: bold;
        }
        .address {
          padding: 0 10px;
          font-size: 12px;
          color: #666666;
        }
        .time {
          padding: 10px;
          font-size: 12px;
          color: #999999;
          span {
            margin-right: 5px;
          }
        }
        .info {
          position: absolute;
          top: 10px;
          right: 10px;
          text-align: right;
          .price {
            .yuan {
              font-size: 10px;
              color: #ff6913;
              font-weight: bold;
            }
            .num {
              font-size: 14px;
              color: #ff6913;
              font-weight: bold;
            }
          }
          .state {
            font-size: 12px;
            color: #333333;
          }
        }
      }
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
    }
  }
}
</style>