<template>
  <div>
    <!-- 头部 -->
    <div class="Header">
      <div class="header_content">
        <!-- 左边 -->
        <div class="content_left">
          <div class="logo">
            <a href="javascript:;">
              <img src="../../assets/headerNav/logo.png" alt />
            </a>
          </div>
          <div class="search">
            <input type="text" />
            <div class="search_icon">
              <i></i>
            </div>
          </div>
        </div>
        <!-- 右边 -->
        <div class="content_right">
          <div class="ul">
            <ul>
              <li>客服中心</li>
              <li>招贤纳士</li>
              <li>会员中心</li>
            </ul>
          </div>
          <div class="button" v-if="!$store.state.login.loginFlag">
            <div class="login" @click="$store.state.login.stopscroll = true">登录</div>
          </div>
          <div class="headerPhoto" v-if="$store.state.login.loginFlag">
            <img src="../../assets/headerNav/me.jpg" alt />
            <div class="name">{{$store.state.login.userinfo.username}}</div>
            <div class="caozuo">
              <ul>
                <li @click="$router.push('/user')">
                  <i class="iconfont icon-geren"></i>
                  <span>个人账号</span>
                </li>
                <li @click="$router.push('/'),$store.state.login.loginFlag=false">
                  <i class="iconfont icon-tuichu"></i>
                  <span>退出登录</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部end -->
    <!-- 导肮 -->
    <div class="topnav">
      <div class="topnav_content">
        <!-- 左边 -->
        <div class="nav_left">
          <ul>
            <router-link tag="li" to="/home" class="con">首页</router-link>
            <li>榜单</li>
            <li>下载客户端</li>
            <li>
              更多
              <i></i>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="nav_right">
          <ul>
            <li>
              <i></i> 直播
            </li>
            <li>
              <i></i> 商城
            </li>
            <li>
              <i></i> 音乐人
            </li>
            <li>
              <i></i> 代理商
            </li>
            <li>
              <i></i> 主播电台
            </li>
            <li>
              <i></i> 开放平台
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 导肮end -->
    <login></login>
  </div>
</template>
<script>
import login from "./login.vue";
export default {
  components: {
    login
  }
};
</script>

<style lang="scss" scoped>
// 头部
.Header {
  width: 100%;
  height: 78px;
  .header_content {
    width: 1000px;
    height: 78px;
    margin: 0 auto;
    display: flex;
    // 左
    .content_left {
      height: 78px;
      display: flex;
      align-items: center;
      .logo {
      }
      .search {
        width: 298px;
        height: 34px;
        border: 1px solid #cccccc;
        display: flex;
        margin-left: 40px;
        input {
          outline: none;
          border: none;
          width: 249px;
          height: 24px;
          padding: 5px 0;
          margin-left: 14px;
          font-size: 14px;
          color: #666666;
        }
        .search_icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          i {
            display: block;
            width: 16px;
            height: 16px;
            background: url(../../assets/headerNav/search.png) no-repeat -38px -54px;
          }
          &:hover {
            i {
              background-position: -38px -84px;
            }
          }
        }
      }
    }
    // 右
    .content_right {
      margin-left: auto;
      height: 78px;
      display: flex;
      align-items: center;
      .ul {
        ul {
          display: flex;
          align-items: center;
          border-right: 1px solid #e6e6e6;
          li {
            font-size: 13px;
            color: #777777;
            padding: 0 15px;
            line-height: 19px;
          }
        }
      }
      .button {
        padding-right: 60px;
        padding-left: 30px;
        .login {
          width: 50px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background-color: #169af3;
          font-size: 13px;
          color: #ffffff;
          border-radius: 3px;
          cursor: pointer;
          &:hover {
            background-color: #158fe1;
          }
        }
      }
      .headerPhoto {
        padding-left: 30px;
        display: flex;
        position: relative;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }
        .name {
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          color: #333333;
          padding: 0 10px;
          cursor: pointer;
        }
        .caozuo {
          width: 100px;
          position: absolute;
          left: 0;
          bottom: -70px;
          display: none;
          padding-top: 10px;
          ul {
            width: 100px;
            height: 100px;
            background: #ffffff;
            border-radius: 3px;
            width: 100px;
            height: 60px;
            box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
            li {
              width: 100px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              color: #333333;
              cursor: pointer;
              &:hover {
                background: #f2f2f2;
              }
              i {
                font-size: 14px;
                margin-right: 3px;
                vertical-align: middle;
                position: relative;
                top: 2px;
              }
            }
          }
        }
        &:hover {
          .caozuo {
            display: block;
          }
        }
      }
    }
  }
}
// 导航
.topnav {
  width: 100%;
  height: 55px;
  background-color: #2c323b;
  .topnav_content {
    width: 1000px;
    height: 55px;
    margin: 0 auto;
    display: flex;
    // 左
    .nav_left {
      height: 55px;
      ul {
        display: flex;
        li {
          height: 55px;
          padding: 0 30px;
          color: #ffffff;
          font-size: 16px;
          line-height: 55px;
          cursor: pointer;
          &.con,
          &:hover {
            background-color: #0c8ed9;
          }
          &:nth-last-child(1) {
            display: flex;
            align-items: center;
            i {
              display: inline-block;
              width: 11px;
              height: 6px;
              margin-left: 10px;
              background: url(../../assets/headerNav/arrowMored.png) no-repeat
                center center;
            }
            &:hover {
              i {
                background-image: url(../../assets/headerNav/arrowMoreu.png);
              }
            }
          }
        }
      }
    }
    // 右
    .nav_right {
      margin-left: auto;
      ul {
        display: flex;
        height: 55px;
        align-items: center;
        li {
          font-size: 13px;
          color: #bbbbbb;
          margin-left: 15px;
          height: 19px;
          line-height: 19px;
          display: flex;
          align-items: center;
          cursor: pointer;
          i {
            display: inline-block;
            width: 13px;
            height: 13px;
            background: url(../../assets/headerNav/sprite.png) no-repeat;
            margin-right: 5px;
          }
          &:hover {
            color: #169af3;
          }
          &:nth-child(1) {
            i {
              background-position: 0 -122px;
            }
            &:hover {
              i {
                background-position: 0 -104px;
              }
            }
          }
          &:nth-child(2) {
            i {
              background-position: 0 -158px;
            }
            &:hover {
              i {
                background-position: 0 -140px;
              }
            }
          }
          &:nth-child(3) {
            i {
              background-position: 0 -194px;
            }
            &:hover {
              i {
                background-position: 0 -176px;
              }
            }
          }
          &:nth-child(4) {
            i {
              background-position: 0 -230px;
            }
            &:hover {
              i {
                background-position: 0 -212px;
              }
            }
          }
          &:nth-child(5) {
            i {
              background-position: 0 -284px;
            }
            &:hover {
              i {
                background-position: 0 -248px;
              }
            }
          }
          &:nth-child(6) {
            i {
              background: url(../../assets/headerNav/open2.png) no-repeat center
                center;
            }
            &:hover {
              i {
                background: url(../../assets/headerNav/open1.png) no-repeat
                  center center;
              }
            }
          }
        }
      }
    }
  }
}
</style>