<template>
  <div>
    <div class="Reserve">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.go(-1)"></i>
        选择日期和人数
      </header>
      <!-- 顶部导航end -->
      <!-- 登录提示 -->
      <div class="loginTips" v-if="!$store.state.loginshow">
        <span class="tips">登录后预订享受</span>
        <span class="discount">更多优惠</span>
        <span class="login" @click="$router.push('/login')">马上登录</span>
      </div>
      <!-- 登录提示end -->
      <!-- 日历日期 -->
      <main class="main">
        <van-calendar
          title="日历"
          :poppable="false"
          :show-confirm="false"
          :show-title="false"
          :min-date="minDate"
          :max-date="maxDate"
          color="#19A0F0"
          :show-mark="false"
          :style="{ height: '500px' }"
          @confirm="onConfirm"
        />
      </main>
      <!-- 日历日期end -->
      <!-- 票 -->
      <div class="ticket">
        <div class="ticketype human">
          <div class="name">成年</div>
          <div class="btn">
            <div class="bt down" @click="humannum > 1 ? humannum--:1">-</div>
            <div class="bt num">{{humannum}}</div>
            <div class="bt up con" @click="humannum++">+</div>
          </div>
        </div>
        <div class="ticketype child">
          <div class="name">儿童</div>
          <span class="age">2-17周岁</span>
          <div class="btn">
            <div class="bt down" @click="childnum > 0 ? childnum--:0">-</div>
            <div class="bt num">{{childnum}}</div>
            <div class="bt up con" @click="childnum++">+</div>
          </div>
        </div>
        <div class="ticketype baby">
          <div class="name">婴儿</div>
          <span class="age">14天-2周岁(不含)</span>
          <div class="btn">
            <div class="bt down" @click="babynum > 0 ? babynum--:0">-</div>
            <div class="bt num">{{babynum}}</div>
            <div class="bt up con" @click="babynum++">+</div>
          </div>
        </div>
        <div class="tips">
          <dl>
            <dd>
              <p class="txt_1">儿童/婴儿入住遵循酒店政策</p>
            </dd>
            <dd>
              <p class="txt_2">该条产品成人+儿童+婴儿最多9人</p>
            </dd>
            <dd>
              <p class="txt_3">*以上价格均为人均价</p>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 票end -->
      <div class="kong"></div>
      <!-- 底部按钮 -->
      <div class="submit" @click="getmannum">
        <div class="btn">选择资源</div>
      </div>
      <!-- 底部按钮end -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      humannum: 1,
      childnum: 0,
      babynum: 0,
      minDate: new Date(2020, 5, 1),
      maxDate: new Date(2020, 5, 30)
    };
  },
  methods: {
    // 获取时间
    onConfirm(value) {
      if (this.$store.state.loginshow) {
        let starttimes = `${value.getFullYear()}-${value.getMonth() +
          1}-${value.getDate()}`;
        let endtimes = `${value.getFullYear()}-${value.getMonth() +
          1}-${value.getDate() + 1}`;
        this.$store.commit("detalinfo/addTime", {
          starttimes: starttimes,
          endtimes: endtimes
        });
      }
    },
    // 获取人数
    getmannum() {
      if (this.$store.state.loginshow) {
        this.$store.commit("detalinfo/addman", {
          humannum: this.humannum,
          childnum: this.childnum,
          babynum: this.babynum
        });
        this.$router.push("/choice");
      } else {
        Toast.fail("请您登录账号");
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Reserve {
  width: 100%;
  padding-top: 45px;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
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
  // 登陆提示
  .loginTips {
    font-size: 14px;
    color: #666666;
    padding: 7px 8px 7px 15px;
    display: flex;
    line-height: 30px;
    background-color: #fff5d1;
    .discount {
      color: #ff7624;
      margin-left: 5px;
    }
    .login {
      margin-left: auto;
      display: inline-block;
      padding: 0 10px;
      line-height: 30px;
      background-color: #ff6913;
      color: #ffffff;
      border-radius: 3px;
    }
  }
  // 日历
  .main {
    border-bottom: 1px solid #f2f2f2;
    height: 400px;
  }
  // 票
  .ticket {
    .ticketype {
      padding: 10px 15px 10px 0;
      margin-left: 15px;
      border-bottom: 1px solid #f2f2f2;
      line-height: 24px;
      display: flex;
      .name {
        font-size: 13px;
        color: #000000;
      }
      .age {
        font-size: 10px;
        color: #666666;
        margin-left: 10px;
      }
      .btn {
        margin-left: auto;
        display: flex;
        .bt {
          width: 26px;
          height: 26px;
          border: 1px solid #dfdfdf;
          text-align: center;
          line-height: 26px;
          font-size: 20px;
          color: #dfdfdf;
        }
        .down {
          border-radius: 3px 0 0 3px;
        }
        .num {
          font-size: 14px;
          color: #333333;
          border-width: 1px 0;
        }
        .up {
          border-radius: 0 3px 3px 0;
        }
        .con {
          color: #19a0f0;
        }
      }
    }
    .tips {
      padding: 15px 20px;
      dl {
        dd {
          padding: 5px 0 0 10px;
          p {
            font-size: 12px;
            color: #666666;
            position: relative;
            &.txt_1::before,
            &.txt_2::before {
              content: "";
              display: block;
              width: 4px;
              height: 4px;
              border-radius: 2px;
              background-color: #666666;
              position: absolute;
              top: 7px;
              left: -10px;
            }
            &.txt_3 {
              color: #ff3513;
            }
          }
        }
      }
    }
  }
  .kong {
    width: 100%;
    height: 70px;
    background-color: #efefef;
  }
  // 底部按钮
  .submit {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: 95%;
      height: 44px;
      background-color: #ff6913;
      text-align: center;
      line-height: 44px;
      color: #ffffff;
      font-size: 18px;
      border-radius: 5px;
    }
  }
}
</style>