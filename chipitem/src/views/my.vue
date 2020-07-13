<template>
  <div>
    <div class="my">
      <!-- 顶部导航 -->
      <header class="top_header">
        <nav class="top_nav">
          <span class="nav_l" @click="$router.push('/home')"></span>
          <span class="nav_r" @click="onout"></span>
        </nav>
        <div v-if="!$store.state.loginshow">
          <h1>登录携程，开启旅程</h1>
          <div class="btn">
            <div class="btn_login" @click="$router.push('/login')">登录/注册</div>
            <div class="btn_search" @click="$router.push('/unavailable')">手机号查单</div>
          </div>
        </div>
        <!-- 退出登录 -->

        <div v-if="$store.state.loginshow">
          <div class="me">
            <div class="headpic">
              <img src="../assets/images/myimg/me.jpg" alt />
            </div>
            <div class="name">{{$store.state.username}}</div>
          </div>
        </div>
      </header>
      <!-- 顶部导航end -->
      <!-- 钱包 -->
      <div class="wallet" @click="$router.push('/unavailable')">
        <span></span>
        <i>钱包</i>
        <p>
          礼品卡
          <em>|</em>现金
          <em>|</em>返现
        </p>
      </div>
      <!-- 钱包end -->
      <!-- 服务 -->
      <div class="service">
        <ul>
          <li @click="$router.push('/unavailable')">
            <span></span>
            <i>优惠券</i>
            <em>领券</em>
          </li>
          <li @click="$router.push('/unavailable')">
            <span></span>
            <i>积分</i>
            <em>兑好礼</em>
          </li>
          <li @click="$router.push('/unavailable')">
            <span></span>
            <i>拿去花</i>
            <em>分期付款</em>
          </li>
        </ul>
      </div>
      <!-- 服务end -->
      <!-- 个人纪录 -->
      <div class="myhistory">
        <ul>
          <li @click="$router.push('/order')">
            <b>我的订单</b>
            <em>酒店/机票/高铁</em>
            <i></i>
          </li>
          <li @click="$router.push('/collection')">
            <b>我的收藏</b>
            <em>降价产品有提醒</em>
            <i></i>
          </li>
          <li>
            <b>浏览历史</b>
            <em>近15天访问记录</em>
            <i></i>
          </li>
          <li @click="$router.push('/unavailable')">
            <b>我要合作</b>
            <em>供应商加盟/代理合作</em>
            <i></i>
          </li>
        </ul>
        <ul>
          <li @click="$router.push('/unavailable')">
            <b>出行工具</b>
            <em>航班动态/翻译助手等</em>
            <i></i>
          </li>
        </ul>
      </div>
      <!-- 个人纪录end -->
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  methods: {
    onout() {
      if (this.$store.state.loginshow) {
       let _this = this;
       this.$store.state.detalinfo.shopcar = [];
       this.$store.state.detalinfo.index = 0;
        Notify({
          message: "退出登录",
          color: "#ED1C24",
          background: "#ffffff",
          onClick() {
            _this.$store.state.loginshow = false;
          }
        });
      }else {
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app > div {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.my {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .top_header {
    width: 100%;
    height: 156px;
    background: url(../assets/images/myimg/bg_01.jpg) no-repeat 0 0;
    background-size: 100% 100%;
    .top_nav {
      width: 100%;
      height: 44px;
      display: flex;
      .nav_l,
      .nav_r {
        display: block;
        width: 44px;
        height: 44px;
        position: relative;
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          background-size: 44px auto;
          background-image: url(../assets/images/myimg/icon_01.png);
          background-repeat: no-repeat;
        }
      }
      .nav_l {
        margin-right: auto;
        &::after {
          width: 9px;
          height: 16px;
          background-position: 0 -22px;
        }
      }
      .nav_r {
        &::after {
          width: 20px;
          height: 18px;
          background-position: -25px -90px;
        }
      }
    }
    h1 {
      width: 100%;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      font-weight: normal;
      padding-top: 17px;
    }
    .btn {
      width: 100%;
      display: flex;
      height: 36px;
      justify-content: center;
      padding-top: 15px;
      .btn_login {
        width: 120px;
        height: 36px;
        background-color: #ff9a14;
        border-radius: 18px;
        text-align: center;
        line-height: 36px;
        font-size: 15px;
        color: #ffffff;
      }
      .btn_search {
        width: 118px;
        height: 34px;
        background-color: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 18px;
        text-align: center;
        line-height: 36px;
        font-size: 15px;
        color: #ffffff;
        margin-left: 30px;
      }
    }
    .me {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .headpic {
        width: 77px;
        height: 77px;
        img {
          width: 77px;
          height: 77px;
          border-radius: 50%;
        }
      }
      .name {
        width: 100%;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  .wallet {
    width: 100%;
    height: 73px;
    padding: 11px 10px 10px 46px;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #f8f8f8;
    background-color: #ffffff;
    span {
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 16px;
      top: 15px;
      background-image: url(../assets/images/myimg/icon_01.png);
      background-size: 44px auto;
      background-position: 0 -40px;
      background-repeat: no-repeat;
    }
    i {
      font-style: normal;
      color: #333333;
      font-size: 16px;
      line-height: 1.7em;
    }
    p {
      font-size: 13px;
      color: #999999;
      em {
        color: #e5e5e5;
        font-style: normal;
        line-height: 24px;
        margin: 0 8px;
      }
    }
  }
  .service {
    width: 100%;
    height: 73px;
    background-color: #ffffff;
    ul {
      width: 100%;
      height: 73px;
      display: flex;
      li {
        width: 33.33%;
        height: 73px;
        padding-top: 15px;
        box-sizing: border-box;
        text-align: center;
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: pink;
          vertical-align: middle;
          margin-right: 5px;
          background: url(../assets/images/myimg/icon_01.png);
          background-size: 44px auto;
          background-repeat: no-repeat;
        }
        &:nth-child(1) {
          border-right: 1px solid #f3f3f3;
          span {
            background-position: 0 -61px;
          }
        }
        &:nth-child(2) {
          border-right: 1px solid #f3f3f3;
          span {
            background-position: 0 -110px;
          }
        }
        &:nth-child(3) {
          span {
            background-position: -20px -151px;
          }
        }
        i {
          font-style: normal;
          font-size: 15px;
          color: #333333;
        }
        em {
          display: block;
          width: 100%;
          font-style: normal;
          font-size: 13px;
          color: #999999;
          margin-top: 10px;
          line-height: 13px;
        }
      }
    }
  }
  .myhistory {
    width: 100%;
    margin-top: 10px;
    background-color: #f5f5f5;
    ul {
      width: 100%;
      background-color: #ffffff;
      &:nth-child(2) {
        margin-top: 10px;
      }
      li {
        // width: 100%;
        height: 49px;
        line-height: 49px;
        margin-left: 16px;
        padding-right: 25px;
        box-sizing: border-box;
        border-bottom: 1px solid #f3f3f3;
        display: flex;
        position: relative;
        b {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #333333;
          margin-right: auto;
        }
        em {
          font-style: normal;
          font-size: 13px;
          color: #999999;
        }
        i {
          font-style: normal;
        }
        &::after {
          content: "";
          display: block;
          width: 7px;
          height: 7px;
          transform: rotate(45deg);
          border: solid #999999;
          border-width: 1px 1px 0 0;
          position: absolute;
          right: 10px;
          top: 21px;
        }
      }
    }
  }
}
</style>