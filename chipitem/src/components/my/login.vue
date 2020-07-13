<template>
  <div>
    <div class="Login">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.push('/my')"></i>
        <span class="register" @click="$router.push('/register')">注册</span>
      </header>
      <!-- 顶部导航end -->
      <!-- 标题 -->
      <div class="title">携程账号登录</div>
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
            <div class="inp inp_2">
              <input class="password" type="password" placeholder="密码" v-model="password" />
              <div class="find" @click="findpassword">
                <span>找回密码</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 表单end -->
      <!-- 按钮 -->
      <div class="btn_box">
        <div class="box">
          <div class="btn" @click="onsubmit">登录</div>
        </div>
      </div>
      <!-- 按钮end -->
      <!-- 底部提示 -->
      <div class="tips">
        <p>
          登录即代表您同意我们的
          <span>服务协议</span>
          和
          <span>隐私政策</span>
        </p>
      </div>
      <!-- 底部提示end -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onsubmit() {
      // http://127.0.0.1:3001/register?username=zhangsan&password=123123&password2=123123
      this.$axios
        .get("login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(res => {
          if (res.data == 200) {
            let _this = this;
            this.$store.state.username = this.username;
            this.$store.state.password = this.password;
            this.$store.state.loginshow = true;
            Toast.success({
              message: "登录成功",
              onClose() {
                _this.$router.push("/my");
              }
            });
          } else {
            Toast.fail("登录失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    findpassword(){
      Toast('暂不支持找回，请重新注册');
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  padding-top: 44px;
  width: 100%;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 44px;
    font-size: 18px;
    color: #333333;
    z-index: 1000;
    display: flex;
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
    .register {
      display: block;
      font-size: 15px;
      color: #099fde;
      padding: 0 10px;
      height: 44px;
      line-height: 44px;
      margin-left: auto;
    }
  }
  // 标题
  .title {
    font-size: 25px;
    color: #333333;
    margin-top: 50px;
    text-align: center;
    width: 100%;
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
        .inp_2 {
          border-bottom: 1px solid #e6e6e6;
          .password {
            flex: 1;
          }
          .find {
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              display: inline-block;
              height: 28px;
              text-align: center;
              line-height: 28px;
              width: 80px;
              text-align: center;
              font-size: 13px;
              color: #099fde;
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
  // 服务协议
  .tips {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    p {
      font-size: 12px;
      color: #999999;
      span {
        color: #099fde;
      }
    }
  }
}
</style>