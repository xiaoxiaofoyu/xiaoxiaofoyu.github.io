<template>
  <div>
    <div class="Register">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.go(-1)"></i>
        注册
      </header>
      <!-- 顶部导航end -->
      <!-- 标题 -->
      <div class="title">输入账号密码</div>
      <!-- 标题end -->
      <!-- 表单 -->
      <div class="from">
        <ul>
          <li>
            <div class="inp">
              <input type="text" placeholder="用户名" v-model="username" />
            </div>
          </li>
          <li>
            <div class="inp">
              <input class="password" type="password" placeholder="密码" v-model="password" />
            </div>
          </li>
          <li>
            <div class="inp">
              <input class="password" type="password" placeholder="确认密码" v-model="password2" />
            </div>
          </li>
        </ul>
      </div>
      <!-- 表单end -->
      <!-- 按钮 -->
      <div class="btn_box">
        <div class="box">
          <div class="btn" @click="onsubmit">注册</div>
        </div>
      </div>
      <!-- 按钮end -->
      <!-- 注册协议 -->
      <div class="tips">
        <van-popup
          v-model="show"
          position="bottom"
          :close-on-click-overlay="false"
          :style="{ height: '65%' }"
        >
          <div class="tit">
            <h3>携程用户注册协议和隐私政策</h3>
          </div>
          <div class="tips_con">
            <p>
              亲爱的用户，在您注册为携程用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署携程《服务协议》和《隐私政策》，
              <b>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意，尤其是加粗字体。</b>
            </p>
            <p>
              <b>【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。如果您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容。</b>
              如果您对以上协内容有疑问，请联系：privacy@ctrip.com。
            </p>
            <p>
              <b>
                点击同意即代表您已阅读并同意携程
                <span>《服务协议》</span>和
                <span>《隐私政策》</span>
                ，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方。
              </b>
            </p>
          </div>
          <div class="btn">
            <div class="btn_b btn_l" @click="$router.push('/my')">不同意</div>
            <div class="btn_b btn_r" @click="onchange">同意继续</div>
          </div>
        </van-popup>
      </div>
      <!-- 注册协议end -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: true,
      username: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    onchange() {
      this.show = !this.show;
    },
    onsubmit() {
      // http://127.0.0.1:3000/register?username=zhangsan&password=123123&password2=123123
      this.$axios
        .get("register", {
          params: {
            username: this.username,
            password: this.password,
            password2: this.password2
          }
        })
        .then(res => {
          if (res.data == 200) {
             let _this = this;
            Toast.success({
              message: "注册成功",
              onClose() {
                _this.$router.push("/login");
              }
            });
          } else {
            Toast.fail('注册失败');
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.Register {
  padding-top: 94px;
  width: 100%;
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
    font-size: 16px;
    color: #999;
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
      color: #099fde;
    }
  }
  // 标题
  .title {
    width: 100%;
    font-size: 25px;
    color: #333;
    text-align: center;
  }
  // 表单
  .from {
    margin-top: 50px;
    padding: 0 25px;
    ul {
      width: 100%;
      li {
        width: 100%;
        .inp {
          width: 100%;
          display: flex;
          input {
            outline: none;
            height: 54px;
            width: 100%;
            border: none;
            color: #333;
            font-size: 16px;
            &::placeholder {
              color: #bbbbbb;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  // 按钮
  .btn_box {
    width: 100%;
    .box {
      padding: 30px 20px 20px 20px;
      .btn {
        width: 100%;
        height: 44px;
        text-align: center;
        line-height: 44px;
        background-color: #ff9a14;
        color: #ffffff;
        font-size: 17px;
        border-radius: 5px;
      }
    }
  }
  // 注册协议
  .tips {
    width: 100%;
    position: relative;
    .tit {
      width: 100%;
      height: 48px;
      border-bottom: 1px solid #f0f0f0;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 200;
      background-color: #ffffff;
      h3 {
        font-size: 17px;
        color: #333;
        text-align: center;
        line-height: 48px;
      }
    }
    .tips_con {
      padding: 60px 15px 20px 15px;
      font-size: 15px;
      color: #333;
      p {
        margin-bottom: 10px;
        text-align: justify;
        span {
          color: #099fde;
        }
      }
    }
    .btn {
      width: 100%;
      height: 44px;
      display: flex;
      position: absolute;
      background-color: #ffffff;
      bottom: 0;
      left: 0;
      border-top: 1px solid #e0e0e0;
      .btn_b {
        flex: 0 0 50%;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
        color: #666;
      }
      .btn_r {
        color: #ffffff;
        background-color: #ff9a14;
      }
    }
  }
}
</style>