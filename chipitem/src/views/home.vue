<template>
  <div ref="template_box">
    <!-- 顶部栏 -->
    <header class="top_search">
      <div :class="['header', 'clearfix', {'con':flag}]">
        <!-- 1.0 搜索 -->
        <div class="search fl">
          <span class="search_icon"></span>
          <input type="text" placeholder="搜索:目的地/酒店/景点/航班号" @focus="$router.push('/homesearch')" />
        </div>
        <!-- 2.0 登录 -->
        <div class="login fr">
          <span class="l_icon"></span>
          <span class="l_my" @click="$router.push('/my')">我的</span>
        </div>
      </div>
    </header>
    <!-- 顶部栏end -->
    <!-- 顶部导航栏 -->
    <nav class="top_nav">
      <ul class="clearfix">
        <li @click="$router.push('/lists')">
          <a href="javscript:;">
            <span class="nav_icon"></span>
            <span class="nav_name">攻略·景点</span>
          </a>
        </li>
        <li @click="$router.push('/lists')">
          <a href="javscript:;">
            <span class="nav_icon"></span>
            <span class="nav_name">门票·玩乐</span>
          </a>
        </li>
        <li @click="$router.push('/lists')">
          <a href="javscript:;">
            <span class="nav_icon"></span>
            <span class="nav_name">美食林</span>
          </a>
        </li>
        <li @click="$router.push('/lists')">
          <a href="javscript:;">
            <span class="nav_icon"></span>
            <span class="nav_name">周边游</span>
          </a>
        </li>
        <li @click="$router.push('/lists')">
          <a href="javscript:;">
            <span class="nav_icon"></span>
            <span class="nav_name">一日游</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- 顶部导航栏end -->
    <!-- 内容导航 -->
    <main class="content">
      <div class="first">
        <nav class="main_nav_first">
          <ul>
            <li class="l1">
              <ol class="clrearfix">
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>酒店</span>
                  </a>
                </li>
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>民宿·客栈</span>
                  </a>
                </li>
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>特价·爆款</span>
                  </a>
                </li>
              </ol>
            </li>
            <li class="l1">
              <ol class="clrearfix">
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>机票</span>
                  </a>
                </li>
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>火车票</span>
                  </a>
                </li>
                <li class="l2 clearfix">
                  <div class="l2_l fl" @click="$router.push('/lists')">
                    <a href="javascript:;">
                      <span>汽车·船票</span>
                    </a>
                  </div>
                  <div class="l2_r fl" @click="$router.push('/lists')">
                    <a href="javascript:;">
                      <span>专车·租车</span>
                    </a>
                  </div>
                </li>
              </ol>
            </li>
            <li class="l1">
              <ol class="clrearfix">
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>旅游</span>
                  </a>
                </li>
                <li class="l2" @click="$router.push('/lists')">
                  <a href="javascript:;">
                    <span>高铁游</span>
                  </a>
                </li>
                <li class="l2">
                  <div class="l2_l fl" @click="$router.push('/lists')">
                    <a href="javascript:;">
                      <span>邮轮游</span>
                    </a>
                  </div>
                  <div class="l2_r fl" @click="$router.push('/lists')">
                    <a href="javascript:;">
                      <span>定制游</span>
                    </a>
                  </div>
                </li>
              </ol>
            </li>
          </ul>
        </nav>
      </div>
      <div class="second">
        <nav class="main_nav_second">
          <ul class="clearfix">
            <router-link to="/lists" tag="li">
              <a href="javascript:;">
                <i></i>
                <span>自由行</span>
              </a>
            </router-link>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>WiFi电话卡</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>保险·签证</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>换钞·购物</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>当地向导</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>特价机票</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>礼品卡</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>申卡·借钱</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>旅拍</span>
              </a>
            </li>
            <li @click="$router.push('/lists')">
              <a href="javascript:;">
                <i></i>
                <span>更多</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
    <!-- 内容导航end -->
    <!-- 热门活动 -->
    <div class="hot">
      <div class="top">
        <div class="top_con">
          <div class="tit"></div>
          <div class="active"></div>
          <div class="more">获取更多福利</div>
        </div>
      </div>
      <div class="middle">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <span
                style="opacity: 0.9; color: rgb(255, 255, 255); font-size: 18px; width: 52px; height: 28px; letter-spacing: 0px; line-height: 28px; display: block; text-align: center; transform: scale(0.5); transform-origin: 0px 0px;"
              >广告</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span
                style="opacity: 0.9; color: rgb(255, 255, 255); font-size: 18px; width: 52px; height: 28px; letter-spacing: 0px; line-height: 28px; display: block; text-align: center; transform: scale(0.5); transform-origin: 0px 0px;"
              >广告</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span
                style="opacity: 0.9; color: rgb(255, 255, 255); font-size: 18px; width: 52px; height: 28px; letter-spacing: 0px; line-height: 28px; display: block; text-align: center; transform: scale(0.5); transform-origin: 0px 0px;"
              >广告</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span
                style="opacity: 0.9; color: rgb(255, 255, 255); font-size: 18px; width: 52px; height: 28px; letter-spacing: 0px; line-height: 28px; display: block; text-align: center; transform: scale(0.5); transform-origin: 0px 0px;"
              >广告</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span
                style="opacity: 0.9; color: rgb(255, 255, 255); font-size: 18px; width: 52px; height: 28px; letter-spacing: 0px; line-height: 28px; display: block; text-align: center; transform: scale(0.5); transform-origin: 0px 0px;"
              >广告</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span
                style="opacity: 0.9; color: rgb(255, 255, 255); font-size: 18px; width: 52px; height: 28px; letter-spacing: 0px; line-height: 28px; display: block; text-align: center; transform: scale(0.5); transform-origin: 0px 0px;"
              >广告</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 热门活动end -->
    <!-- 底部 -->
    <footer class="footer">
      <div class="top">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">
              <svg class="icon" viewBox="0 0 256 256">
                <path
                  d="M50.879 37.219a13.62 13.62 0 0 0-2.987.331c-7.23 1.627-11.754 8.724-10.104 15.852 8.524 36.834 31.178 72.785 68.183 107.85 35.42 33.564 67.812 52.591 96.958 57.351.726.118 1.46.178 2.195.178 7.416 0 13.428-5.927 13.428-13.238v-34.41c0-6.011-4.45-11.123-10.477-12.036l-13.606-2.061c-.6-.091-1.213.02-1.74.317l-13.801 7.768c-12.6 7.092-28.335 5.762-39.526-3.34a300.778 300.778 0 0 1-23.277-21.034c-8.074-8.102-15.495-16.477-22.26-25.126-7.274-9.299-9.238-21.612-5.21-32.662l7.585-20.802a2.613 2.613 0 0 0 .06-1.607l-3.858-13.647c-1.618-5.724-6.907-9.684-12.935-9.684H50.879zm0-15.886h28.628c13.26 0 24.896 8.712 28.456 21.305l3.859 13.647c1.046 3.7.9 7.63-.418 11.245l-7.585 20.802a18.321 18.321 0 0 0 2.805 17.588c6.37 8.141 13.367 16.04 20.995 23.694a284.685 284.685 0 0 0 22.037 19.913c6.026 4.9 14.499 5.617 21.283 1.799l13.802-7.769a19.03 19.03 0 0 1 12.175-2.223l13.606 2.061c13.89 2.104 24.143 13.885 24.143 27.738v34.41c0 16.084-13.226 29.124-29.541 29.124-1.618 0-3.232-.131-4.828-.392-32.836-5.363-67.928-25.976-105.491-61.57-39.13-37.08-63.447-75.668-72.727-115.77C18.449 41.253 32 21.333 50.879 21.333z"
                  class="transform-group"
                />
              </svg>
              <span class="name">电话预订</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <svg viewBox="0 0 256 256">
                <path
                  d="M120 174.4V29.333c0-4.266 3.733-8 8-8s8 3.734 8 8V174.4l50.133-49.6c3.2-3.2 8-3.2 11.2 0 3.2 3.2 3.2 8 0 11.2L140.8 191.467c-7.467 6.933-18.667 6.933-26.133 0L58.133 136c-3.2-3.2-3.2-8 0-11.2 3.2-3.2 8-3.2 11.2 0L120 174.4zm90.667 33.6c4.266 0 8 3.733 8 8s-3.734 8-8 8H45.333c-4.266 0-8-3.733-8-8s3.734-8 8-8h165.334z"
                  class="transform-group icon"
                />
              </svg>
              <span class="name">下载客户端</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <svg viewBox="0 0 256 256">
                <path
                  d="M128 229.333c55.965 0 101.333-45.368 101.333-101.333 0-55.965-45.368-101.333-101.333-101.333C72.035 26.667 26.667 72.035 26.667 128c0 55.965 45.368 101.333 101.333 101.333zm0 16c-64.802 0-117.333-52.532-117.333-117.333C10.667 63.198 63.199 10.667 128 10.667c64.802 0 117.333 52.531 117.333 117.333 0 64.802-52.531 117.333-117.333 117.333zM99.61 138.517c-8.76-7.814-14.277-19.188-14.277-31.85C85.333 83.102 104.436 64 128 64s42.667 19.102 42.667 42.667c0 12.662-5.516 24.036-14.276 31.85C186.559 149.971 208 179.148 208 213.333l-.001.501c-20.959 19.542-49.083 31.5-79.999 31.5-30.916 0-59.04-11.958-79.999-31.5a83.522 83.522 0 0 1-.001-.5c0-34.186 21.442-63.363 51.61-74.817zM128 229.333c23.565 0 45.833-8.059 63.674-22.497-3.256-32.295-30.521-57.503-63.674-57.503s-60.418 25.208-63.674 57.503c17.84 14.438 40.11 22.497 63.674 22.497zm0-96c14.727 0 26.667-11.939 26.667-26.666C154.667 91.939 142.727 80 128 80c-14.728 0-26.667 11.939-26.667 26.667 0 14.727 11.94 26.666 26.667 26.666z"
                  class="transform-group icon"
                />
              </svg>
              <span class="name">我 的</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="middle">
        <a href="javascript:;">网站地图</a>|
        <a href="javascript:;">
          <span class="icon_eath"></span>Language
          <span class="icon_list">
            <svg
              class="bi bi-chevron-down"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </a>|
        <a href="javascript:;">电脑版</a>
      </div>
      <div class="bottom">
        <span>©2020携程旅行</span>｜
        <span>沪ICP备08023580号</span>
      </div>
    </footer>
    <!-- 底部end -->
    <br />
    <!-- 热门活动end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset == 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    });
    // if (this.$refs.template_box.scrollTop == 0) {
    //   this.flag = false;
    // } else {
    //   this.flag = true;
    // }
  },
  // destroyed() {
  //   // window.addEventListener("scroll", () => {
  //   //   window.pageYOffset = 0;
  //   // });
  //   window.removeEventListener("scroll",this.scrollHander);
  // }
};
</script>

<style lang="scss" scoped>
.top_search {
  background: url(../assets/images/homeimg/bg_1.jpg) no-repeat;
  background-position: 0 -44px;
  background-size: 100% auto;
  height: 180px;
  border-bottom-left-radius: 50% 20px;
  border-bottom-right-radius: 50% 30px;
  overflow: hidden;
  .header {
    width: 100%;
    display: flex;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      transparent
    );
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    .search {
      width: 81%;
      height: 36px;
      padding-left: 12px;
      padding-top: 8px;
      position: relative;
      .search_icon {
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 8px;
        left: 12px;
        background: url(../assets/images/homeimg/icon_1.png) no-repeat 14px 6px;
        background-size: 21px auto;
      }
      input[type="text"] {
        width: 100%;
        height: 24px;
        border: none;
        border-radius: 15px;
        padding: 2px 5px;
        font-size: 15px;
        color: #666666;
        text-indent: 35px;
        outline: none;
        &::placeholder {
          font-size: 15px;
          color: #666666;
        }
      }
    }
    .login {
      width: 30px;
      text-align: center;
      line-height: 12px;
      margin-left: 20px;
      margin-top: 2px;
      .l_icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url(../assets/images/homeimg/icon_1.png) no-repeat 0 -32px;
        background-size: 20px auto;
      }
      .l_my {
        text-align: center;
        font-size: 12px;
        color: #ffffff;
        letter-spacing: 3px;
      }
    }
    &.con {
      background-color: #ffffff;
      background-image: none;
      .search {
        input {
          background-color: #ececed;
        }
      }
      .login {
        .l_icon {
          background-position: 0 -72px;
        }
        .l_my {
          color: #222222;
        }
      }
    }
  }
}
.top_nav {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  position: relative;
  ul {
    height: 64px;
    width: 94%;
    box-shadow: 0 2px 2px 2px #f2f2f2;
    border-radius: 5px;
    position: absolute;
    top: -50px;
    background-color: #ffffff;
    li {
      width: 20%;
      float: left;
      text-align: center;
      a {
        display: block;
        width: 100%;
        position: relative;
        padding-top: 40px;
        .nav_icon {
          display: block;
          width: 40px;
          height: 40px;
          position: absolute;
          left: 0;
          right: 0;
          top: 4px;
          margin: 0 auto;
        }
        .nav_name {
          font-size: 12px;
          color: #222222;
        }
      }
      &:nth-child(1) .nav_icon {
        background: url(../assets/images/homeimg/icon_2.png) no-repeat 0 0;
        background-size: 40px auto;
      }
      &:nth-child(2) .nav_icon {
        background: url(../assets/images/homeimg/icon_2.png) no-repeat 0 -40px;
        background-size: 40px auto;
      }
      &:nth-child(3) .nav_icon {
        background: url(../assets/images/homeimg/icon_2.png) no-repeat 0 -80px;
        background-size: 40px auto;
      }
      &:nth-child(4) .nav_icon {
        background: url(../assets/images/homeimg/icon_2.png) no-repeat 0 -120px;
        background-size: 40px auto;
      }
      &:nth-child(5) .nav_icon {
        background: url(../assets/images/homeimg/icon_2.png) no-repeat 0 -160px;
        background-size: 40px auto;
      }
    }
  }
}
.content {
  width: 100%;
  .first {
    width: 100%;
    display: flex;
    justify-content: center;
    .main_nav_first {
      width: 94%;
      height: 196px;
      border-radius: 5px;
      overflow: hidden;
      ul {
        width: 100%;
        height: 100%;
        .l1 {
          width: 100%;
          height: 33%;
          border-bottom: 1px solid #ffffff;
          ol {
            width: 100%;
            height: 100%;
            .l2 {
              height: 100%;
              float: left;
              box-sizing: border-box;
              border-bottom: 1px solid #ffffff;
              a {
                display: flex;
                width: 100%;
                height: 100%;
                font-size: 14px;
                color: #ffffff;
                align-items: center;
                justify-content: center;
              }
              &:nth-child(1) {
                width: 31%;
                height: 100%;
                background-size: 73px auto;
                background-repeat: no-repeat;
                background-position: bottom right;
                a {
                  justify-content: left;
                  margin-left: 10px;
                }
              }
              &:nth-child(2) {
                width: 23%;
                height: 100%;
                border-left: 1px solid #ffffff;
                background-size: 37px auto;
                background-repeat: no-repeat;
                background-position: bottom left;
              }
              &:nth-child(3) {
                width: 46%;
                height: 100%;
                border-left: 1px solid #ffffff;
              }
            }
          }
          &:nth-child(1) {
            background-image: linear-gradient(to right, #fa5a56, #ffd252);
            ol {
              .l2 {
                &:nth-child(1) {
                  background-image: url(../assets/images/homeimg/icon_nav_1.png);
                }
                &:nth-child(2) {
                  background-image: url(../assets/images/homeimg/icon_nav_2.png);
                }
                &:nth-child(3) {
                  background-image: url(../assets/images/homeimg/icon_nav_3.png);
                  background-size: 100% auto;
                  background-repeat: no-repeat;
                  background-position: bottom right;
                }
              }
            }
          }
          &:nth-child(2) {
            background-image: linear-gradient(to right, #4b90ed, #53bced);
            ol {
              .l2 {
                &:nth-child(1) {
                  background-image: url(../assets/images/homeimg/icon_nav_4.png);
                }
                &:nth-child(2) {
                  background-image: url(../assets/images/homeimg/icon_nav_7.png);
                }
                &:nth-child(3) {
                  display: flex;
                  .l2_l,
                  .l2_r {
                    flex: 0 0 50%;
                    height: 100%;
                    box-sizing: border-box;
                    border-right: 1px solid #ffffff;
                    a {
                      display: flex;
                      width: 100%;
                      height: 100%;
                      font-size: 14px;
                      color: #ffffff;
                      align-items: center;
                      justify-content: center;
                    }
                  }
                }
              }
            }
          }
          &:nth-child(3) {
            background-image: linear-gradient(to right, #35c2a9, #6cd558);
            ol {
              .l2 {
                &:nth-child(1) {
                  background-image: url(../assets/images/homeimg/icon_nav_5.png);
                  background-size: 94px;
                }
                &:nth-child(2) {
                  background-image: url(../assets/images/homeimg/icon_nav_6.png);
                  background-size: 61px;
                }
                &:nth-child(3) {
                  display: flex;
                  .l2_l,
                  .l2_r {
                    flex: 0 0 50%;
                    height: 100%;
                    box-sizing: border-box;
                    border-right: 1px solid #ffffff;
                    a {
                      display: flex;
                      width: 100%;
                      height: 100%;
                      font-size: 14px;
                      color: #ffffff;
                      align-items: center;
                      justify-content: center;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .second {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 6px;
    .main_nav_second {
      width: 94%;
      height: 106px;
      border-radius: 5px;
      overflow: hidden;
      ul {
        width: 100%;
        height: 100%;
        li {
          width: 20%;
          height: 50%;
          float: left;
          a {
            width: 100%;
            height: 100%;
            font-size: 11px;
            color: #222222;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            i {
              display: block;
              width: 28px;
              height: 28px;
            }
          }
          &:nth-child(1) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px 0px;
              }
            }
          }
          &:nth-child(2) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -28px;
              }
            }
          }
          &:nth-child(3) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -56px;
              }
            }
          }
          &:nth-child(4) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -84px;
              }
            }
          }
          &:nth-child(5) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -112px;
              }
            }
          }
          &:nth-child(6) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -140px;
              }
            }
          }
          &:nth-child(7) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -168px;
              }
            }
          }
          &:nth-child(8) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -196px;
              }
            }
          }
          &:nth-child(9) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -224px;
              }
            }
          }
          &:nth-child(10) {
            a {
              i {
                background: url(../assets/images/homeimg/icon_3.png) no-repeat;
                background-size: 28px auto;
                background-position: 0px -252px;
              }
            }
          }
        }
      }
    }
  }
}
.hot {
  width: 100%;
  height: 350px;
  margin-top: 10px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  .top {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f2f2f2;
    .top_con {
      width: 94%;
      height: 44px;
      display: flex;
      align-items: center;
      .tit {
        width: 79px;
        height: 15px;
        background-image: url(../assets/images/homeimg/icon_4.png);
        background-size: 79px auto;
        background-position: 0 -20px;
      }
      .active {
        width: 36px;
        height: 15px;
        background-image: url(../assets/images/homeimg/icon_5.png);
        background-size: 36px 15px;
      }
      .more {
        width: 102px;
        height: 20px;
        border-radius: 10px;
        background-image: linear-gradient(to right, #ff5068, #ff6bc6);
        margin-left: auto;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        color: #ffffff;
      }
    }
  }
  .middle {
    width: 100%;
    height: 296px;
    display: flex;
    justify-content: center;
    ul {
      width: 100%;
      height: 100%;
      li {
        width: 50%;
        height: 81px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        float: left;
        a {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          span {
            position: absolute;
            left: 0;
            bottom: -13px;
            background-color: #b3b3b3;
            border-top-right-radius: 10px 10px;
          }
        }
        &:nth-child(1) {
          background-image: url(../assets/images/homeimg/list_1.jpg);
          border-bottom: 1px solid #f2f2f2;
          height: 131px;
        }
        &:nth-child(2) {
          background-image: url(../assets/images/homeimg/list_2.jpg);
          border-bottom: 1px solid #f2f2f2;
          height: 131px;
        }
        &:nth-child(3) {
          background-image: url(../assets/images/homeimg/list_3.png);
          border-bottom: 1px solid #f2f2f2;
        }
        &:nth-child(4) {
          background-image: url(../assets/images/homeimg/list_4.jpg);
          border-bottom: 1px solid #f2f2f2;
        }
        &:nth-child(5) {
          background-image: url(../assets/images/homeimg/list_5.jpg);
        }
        &:nth-child(6) {
          background-image: url(../assets/images/homeimg/list_6.jpg);
        }
      }
    }
  }
}
.footer {
  width: 100%;
  .top {
    ul {
      width: 100%;
      li {
        width: 33.33%;
        height: 40px;
        padding: 10px 0;
        float: left;
        text-align: center;
        a {
          font-size: 12px;
          color: #333333;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          svg {
            width: 20px;
            height: 20px;
            color: #999999;
          }
        }
      }
    }
  }
  .middle {
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    text-align: center;
    a {
      font-size: 12px;
      color: #666666;
      .icon_eath {
        display: inline-block;
        width: 11px;
        height: 11px;
        margin: 0 4px;
        background-image: url(../assets/images/homeimg/icon_6.png);
        background-position: 0 -160px;
        background-repeat: no-repeat;
        background-size: 30px auto;
        position: relative;
        left: 0;
        top: 2px;
      }
      .icon_list {
        display: inline-block;
        width: 11px;
        position: relative;
        left: 0;
        top: 3px;
      }
    }
  }
  .bottom {
    font-size: 12px;
    color: #999999;
    text-align: center;
    height: 20px;
    width: 100%;
    line-height: 20px;
  }
}
</style>