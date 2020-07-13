<template>
  <div>
    <div class="Login" v-show="$store.state.login.stopscroll" @mousewheel.prevent>
      <div class="login_con">
        <!-- 登录 -->
        <div class="login" v-show="changeFlag">
          <div class="login_top">
            <span class="name">登录</span>
            <div class="del" @click="$store.state.login.stopscroll = false">
              <span></span>
            </div>
          </div>
          <div class="login_body">
            <div class="login_body_con">
              <div class="phonenum">
                <!-- <div class="select">
                  +86
                  <i class="iconfont icon-arrRight-fill"></i>
                  <ul>
                      <li></li>
                  </ul>
                </div>-->
                <input type="text" v-model="username" placeholder="请输入用户名" />
              </div>
              <div class="password">
                <input type="password" v-model="password" placeholder="请输入密码" />
              </div>
              <div class="check">
                <input type="checkbox" id="self" />
                <label for="self">自动登录</label>
                <span>忘记密码？</span>
              </div>
              <div class="submin" @click="login()">登录</div>
            </div>
          </div>
          <div class="login_bottom">
            <div class="zhuce" @click="changeFlag=!changeFlag">没有帐号？免费注册 ></div>
          </div>
        </div>
        <!-- 注册 -->
        <div class="login register" v-show="!changeFlag">
          <div class="login_top">
            <span class="name">注册</span>
            <div class="del" @click="$store.state.login.stopscroll = false">
              <span></span>
            </div>
          </div>
          <div class="login_body">
            <div class="login_body_con">
              <div class="num">用户名：</div>
              <div class="phonenum">
                <!-- <div class="select">
                  +86
                  <i class="iconfont icon-arrRight-fill"></i>
                  <ul>
                      <li></li>
                  </ul>
                </div>-->
                <input type="text" v-model="registerusername" placeholder="请输入用户名" />
              </div>
              <div class="mima">密码：</div>
              <div class="password">
                <input type="password" v-model="registerpassword" placeholder="请输入密码" @focus="registerTipsFlag=true" />
              </div>
              <div class="password">
                <input type="password" v-model="registerpassword2" placeholder="请确认密码" />
              </div>
              <div class="tips">
                <ul v-show="registerTipsFlag">
                  <li class="must">
                    <i class="iconfont icon-zhengque"></i> 密码不能包含空格
                  </li>
                  <li class="remind">
                    <i class="iconfont icon-gantan"></i> 密码长度为6-16位
                  </li>
                </ul>
                <ul v-show="registersuceessFlag">
                  <li class="remind">
                    <i class="iconfont icon-gantan"></i> 注册失败
                  </li>
                </ul>
              </div>
              <div class="submin" @click="register()">注册</div>
            </div>
          </div>
          <div class="login_bottom">
            <div class="denglu" @click="changeFlag=!changeFlag">返回登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      changeFlag: true, // 登录与注册内容切换
      registerTipsFlag: false, // 注册提示获取焦点后显示
      username: "",
      password: "",
      registerusername: "",
      registerpassword: "",
      registerpassword2: "",
      registersuceessFlag: false ,
    };
  },
  methods: {
    login() {
      this.$axios
        .get("http://127.0.0.1:3000/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(res => {
          if (res.data == 200) {
            // let _this = this;

            this.$store.state.login.userinfo = res.config.params;
            sessionStorage.setItem("loginFlag",true);
            this.$store.state.login.loginFlag= true;
            this.$store.state.login.stopscroll = false;
          } else {
            console.log("登录失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      this.$axios
        .get("http://127.0.0.1:3000/register", {
          params: {
            username: this.registerusername,
            password: this.registerpassword,
            password2: this.registerpassword2
          }
        })
        .then(res => {
          if (res.data == 200) {
            console.log("注册成功");
            this.changeFlag=!this.changeFlag
          } else {
            console.log("注册失败");
            this.registersuceessFlag = true;
            this.registerTipsFlag = false;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .login_con {
    width: 530px;
    min-height: 312px;
    background: #ffffff;
    position: absolute;
    top: 200px;
    right: 0;
    left: 0;
    margin: 0 auto;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    overflow: hidden;

    .login_top {
      width: 100%;
      height: 38px;
      background: url(../../assets/home/layer.png) repeat-x 0 -48px;
      padding: 0 45px 0 18px;
      box-sizing: border-box;
      position: relative;
      cursor: move;
      .name {
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        line-height: 38px;
      }
      .del {
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        span {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: url(../../assets/home/layer.png) no-repeat 0 -95px;
        }
      }
    }
    .login_body {
      width: 100%;
      min-height: 224px;
      display: flex;
      justify-content: center;
      .login_body_con {
        width: 220px;
        min-height: 151px;
        padding: 30px 0 43px;
        input[type="text"],
        input[type="password"] {
          border: 1px solid #cdcdcd;
          border-radius: 2px;
          padding: 5px 6px 6px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          &::placeholder {
            font-size: 12px;
            color: #757575;
          }
        }
        .num,
        .mima {
          height: 16px;
          width: 100%;
          font-size: 12px;
          color: #333;
          line-height: 16px;
        }
        .num {
          margin-bottom: 10px;
        }
        .mima {
          margin-top: 10px;
        }
        .phonenum {
          display: flex;
          .select {
            height: 30px;
            border: solid #cdcdcd;
            border-width: 1px 0 1px 1px;
            font-size: 12px;
            color: #333;
            padding: 0 18px 0 5px;
            line-height: 30px;
            cursor: pointer;
            position: relative;
            i {
              font-size: 12px;
              color: #999999;
              position: absolute;
              top: 0;
              right: 5px;
            }
          }
        }
        .password {
          margin-top: 10px;
        }
        .check {
          display: flex;
          align-items: flex-end;
          margin-top: 10px;
          input {
            margin-right: 12px;
            outline: none;
          }
          label {
            font-size: 12px;
            color: #333333;
            user-select: none; //取消选中文字
          }
          span {
            font-size: 12px;
            color: #666666;
            cursor: pointer;
            margin-left: auto;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .tips {
          ul {
            li {
              font-size: 12px;
              line-height: 17px;
              margin-top: 5px;
              display: flex;
              align-items: center;
              i {
                font-size: 12px;
                margin-right: 8px;
              }
              &.must {
                color: #333333;
                i {
                  color: #999999;
                }
              }
              &.remind {
                color: #e33232;
              }
            }
          }
        }
        .submin {
          width: 100%;
          height: 31px;
          text-align: center;
          line-height: 31px;
          font-size: 14px;
          letter-spacing: 5px;
          margin-top: 10px;
          color: #ffffff;
          cursor: pointer;
          background: url(../../assets/home/button2.png) no-repeat
            0 -386px;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 6px;
            height: 31px;
            background: #ffffff url(../../assets/home/button2.png)
              no-repeat -244px -427px;
            position: absolute;
            top: 0;
            right: 0;
          }
          &:hover {
            background-position: 0 -468px;
            &::after {
              background-position: -244px -509px;
            }
          }
        }
      }
    }
    .login_bottom {
      width: 490px;
      border-top: 1px solid #c6c6c6;
      background-color: #f7f7f7;
      height: 49px;
      padding: 0 20px;
      display: flex;
      .zhuce {
        font-size: 12px;
        margin-left: auto;
        color: #999;
        line-height: 49px;
        cursor: pointer;
      }
      .denglu {
        font-size: 12px;
        color: #0c72c3;
        line-height: 49px;
        cursor: pointer;
      }
    }
  }
}
</style>