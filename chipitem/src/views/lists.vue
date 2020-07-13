<template>
  <div>
    <div class="lists">
      <!-- 顶部导航 -->
      <header class="top_hearder">
        <i class="nav iconfont icon-zuojiantou1" @click="$router.push('/home')"></i>
        <span class="title">自由行</span>
        <i class="contact iconfont icon-kefu" @click="showPopup"></i>
      </header>
      <!-- 顶部导航end -->
      <!-- 搜索 -->
      <div class="slogan">
        <div :class="['search', {'con':flag}]">
          <div class="search_con">
            <div class="local">
              <i class="local_icon"></i>
              <i class="place">上海</i>
              <i class="station">站</i>
            </div>
            <div class="search_btn" @click="$router.push('/search/hot')">
              <i class="iconfont icon-sousuo"></i>
              目的地/关键字
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索end -->
      <!-- 内容导航 -->
      <div class="con_nav">
        <div class="nav_first">
          <ul>
            <li
              v-for="(item,index) in lists1"
              :key="index"
              :class="{'con':num1==index}"
              @click="updatefirst(index)"
            >
              <img :src="item.img" alt />
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="nav_con" v-show="updateFlag">
          <ul>
            <li v-for="(item,index) in lists1[num1].citys" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="nav_second">
          <ul>
            <li
              v-for="(item,index) in lists2"
              :key="index"
              :class="{'con':num2==index}"
              @click="updatesecond(index)"
            >
              <img :src="item.img" alt />
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="nav_con" v-show="!updateFlag">
          <ul>
            <li v-for="(item,index) in lists2[num2].citys" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- 内容导航end -->
      <!-- 查看全部 -->
      <div class="vtop"></div>
      <div class="viewall" @click="$router.push('/search/hot')">
        <img src="../assets/images/listsimg/icon_02.png" alt />
      </div>
      <div class="vbot"></div>
      <!-- 查看全部end -->
      <!-- 列表内容 -->
      <div class="list_con">
        <div class="list_ccon">
          <ul>
            <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
              <li @click="$router.push('/detalinfo')">
                <div class="spot_img">
                  <img src="../assets/images/listsimg/spot_01.jpg" alt />
                </div>
                <div class="spot_info">
                  <div class="title">上海2日1晚自由行(5钻)</div>
                  <div class="item">
                    <span>酒店+玩乐</span>
                    <span>省内游</span>
                  </div>
                  <div class="item_details">劲爆价格入住崇明金茂凯悦酒店，可携带宠物出游！</div>
                  <div class="order">
                    <div class="price">
                      <i class="Symbol">￥</i>
                      <i class="number">250</i>
                      <i class="up">起</i>
                    </div>
                    <div class="order_btn">
                      <span>马上抢</span>
                    </div>
                  </div>
                </div>
              </li>
              <li @click="$router.push('/detalinfo')">
                <div class="spot_img">
                  <img src="../assets/images/listsimg/spot_02.jpg" alt />
                </div>
                <div class="spot_info">
                  <div class="title">千岛湖3日2晚自由行(5钻)</div>
                  <div class="item">
                    <span>热气球</span>
                    <span>酒店+玩乐</span>
                  </div>
                  <div class="item_details">入住千岛湖绿城酒店70平米超大湖景房！赠双人骑行券！</div>
                  <div class="order">
                    <div class="price">
                      <i class="Symbol">￥</i>
                      <i class="number">492</i>
                      <i class="up">起</i>
                    </div>
                    <div class="order_btn">
                      <span>马上抢</span>
                    </div>
                  </div>
                </div>
              </li>
              <li @click="$router.push('/detalinfo')">
                <div class="spot_img">
                  <img src="../assets/images/listsimg/spot_03.jpg" alt />
                </div>
                <div class="spot_info">
                  <div class="title">常州2日1晚自由行(5钻)</div>
                  <div class="item">
                    <span>酒店+玩乐</span>
                    <span>游乐园</span>
                  </div>
                  <div class="item_details">恐龙主题度假酒店绿野丛林房1晚+中华恐龙园成人票，5月入住升级至绿野仙踪房！</div>
                  <div class="order">
                    <div class="price">
                      <i class="Symbol">￥</i>
                      <i class="number">250</i>
                      <i class="up">起</i>
                    </div>
                    <div class="order_btn">
                      <span>马上抢</span>
                    </div>
                  </div>
                </div>
              </li>
              <li @click="$router.push('/detalinfo')">
                <div class="spot_img">
                  <img src="../assets/images/listsimg/spot_04.jpg" alt />
                </div>
                <div class="spot_info">
                  <div class="title">江西婺源2日1晚自由行(5钻)</div>
                  <div class="item">
                    <span>古村古镇</span>
                    <span>省内游</span>
                  </div>
                  <div class="item_details">阅徽堂民宿·园景房1晚+梦里老家山水实景演出票，可九折加购篁岭门票！</div>
                  <div class="order">
                    <div class="price">
                      <i class="Symbol">￥</i>
                      <i class="number">329</i>
                      <i class="up">起</i>
                    </div>
                    <div class="order_btn">
                      <span>马上抢</span>
                    </div>
                  </div>
                </div>
              </li>
              <li @click="$router.push('/detalinfo')">
                <div class="spot_img">
                  <img src="../assets/images/listsimg/spot_05.jpg" alt />
                </div>
                <div class="spot_info">
                  <div class="title">江西婺源3日2晚自由行(5钻)</div>
                  <div class="item">
                    <span>古村古镇</span>
                    <span>省内游</span>
                  </div>
                  <div class="item_details">5钻宝婺度假酒店1晚 + 婺源12景点联票（全程可用），省去买票时间，玩转婺源精华景点！</div>
                  <div class="order">
                    <div class="price">
                      <i class="Symbol">￥</i>
                      <i class="number">395</i>
                      <i class="up">起</i>
                    </div>
                    <div class="order_btn">
                      <span>马上抢</span>
                    </div>
                  </div>
                </div>
              </li>
              <li @click="$router.push('/detalinfo')">
                <div class="spot_img">
                  <img src="../assets/images/listsimg/spot_06.jpg" alt />
                </div>
                <div class="spot_info">
                  <div class="title">扬州2日1晚自由行(4钻)</div>
                  <div class="item">
                    <span>温泉体验</span>
                    <span>酒店+玩乐</span>
                  </div>
                  <div class="item_details">入住瘦西湖君亭酒店，房间内Minibar敞饮，步行可达瘦西湖！</div>
                  <div class="order">
                    <div class="price">
                      <i class="Symbol">￥</i>
                      <i class="number">134</i>
                      <i class="up">起</i>
                    </div>
                    <div class="order_btn">
                      <span>马上抢</span>
                    </div>
                  </div>
                </div>
              </li>
              <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <!-- </van-list> -->
          </ul>
        </div>
      </div>
      <!-- 列表内容end -->
      <!-- 底部提示 -->
      <footer class="footer"></footer>
      <div class="fbot"></div>
      <!-- 底部提示end -->
      <!-- 底部导航 -->
      <div class="bot_nav">
        <ul>
          <li>
            <i class="ficon"></i>
            <i class="fname">自由行首页</i>
          </li>
          <li @click="$router.push('/search/hot')">
            <i class="ficon"></i>
            <i class="fname">目的地</i>
          </li>
          <li @click="$router.push('/order')">
            <i class="ficon"></i>
            <i class="fname">我的订单</i>
          </li>
        </ul>
      </div>
      <!-- 底部导航end -->
      <!-- 联系客服 -->
      <div class="customer">
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup v-model="show" position="bottom" round :style="{ height: '55%' }">
          <div class="tit">
            客服
            <i class="iconfont icon-guanbi" @click="showPopup"></i>
          </div>
          <div class="content">
            <dl>
              <dt>联系在线客服</dt>
              <dd>
                <p>
                  携程客服专员提供在线服务，解答疑问
                  <i class="iconfont icon-ziyuan"></i>
                </p>
              </dd>
            </dl>
            <div class="tel">
              <h3>拨打客服电话</h3>
              <div class="consult">
                <p>
                  <span>售前咨询</span> 服务时间 7:00-24:00
                </p>
                <p>
                  电话接通后，请告知客服产品编号:
                  <b>1026251576</b>
                </p>
                <i class="iconfont icon-dianhua"></i>
              </div>
              <div class="consult">
                <p>
                  <span>售后咨询</span> 服务时间 全天24小时
                </p>
                <p>如您订单已提交，可联系售后客服查询及修改</p>
                <i class="iconfont icon-dianhua"></i>
              </div>
            </div>
          </div>
        </van-popup>
      </div>
      <!-- 联系客服end -->
    </div>
  </div>
</template>

<script>
import "../assets/font/iconfont.css";
export default {
  data() {
    return {
      flag: false,
      num1: 0,
      num2: 0,
      updateFlag: true,
      show: false,
      // loading: false,
      // finished: false,
      // list: [],
      lists1: [
        {
          name: "热门",
          img: require("../assets/images/listsimg/img_01.png"),
          citys: [
            "三亚",
            "上海",
            "杭州",
            "厦门",
            "广州",
            "成都",
            "陕西",
            "大连"
          ]
        },
        {
          name: "境内",
          img: require("../assets/images/listsimg/img_02.png"),
          citys: [
            "三亚",
            "上海",
            "海南",
            "迪士尼度假区",
            "素明区",
            "朱家角",
            "无锡",
            "更多…"
          ]
        },
        {
          name: "泰国",
          img: require("../assets/images/listsimg/img_03.png"),
          citys: [
            "泰国",
            "曼谷",
            "普吉岛",
            "清迈",
            "苏梅岛",
            "甲米",
            "芭提雅",
            "更多…"
          ]
        },
        {
          name: "日本",
          img: require("../assets/images/listsimg/img_04.png"),
          citys: [
            "日本",
            "大阪",
            "北海道",
            "东京",
            "京都",
            "冲绳县",
            "富士山",
            "更多…"
          ]
        }
      ],
      lists2: [
        {
          name: "周边",
          img: require("../assets/images/listsimg/img_05.png"),
          citys: [
            "英国",
            "意大利",
            "美国",
            "加拿大",
            "澳大利亚",
            "新西兰",
            "迪拜",
            "更多…"
          ]
        },
        {
          name: "中国港澳台",
          img: require("../assets/images/listsimg/img_06.png"),
          citys: [
            "澳门",
            "台湾",
            "香港",
            "台北",
            "垦丁",
            "高雄",
            "日月潭",
            "更多…"
          ]
        },
        {
          name: "东南亚",
          img: require("../assets/images/listsimg/img_07.png"),
          citys: [
            "新加坡",
            "马来西亚",
            "长滩岛",
            "巴厘岛",
            "越南",
            "柬埔寨",
            "斯里兰卡",
            "更多…"
          ]
        },
        {
          name: "欧美澳非",
          img: require("../assets/images/listsimg/img_08.png"),
          citys: [
            "英国",
            "意大利",
            "美国",
            "加拿大",
            "澳大利亚",
            "新西兰",
            "迪拜",
            "更多…"
          ]
        }
      ]
    };
  },
  methods: {
    // 1.0 内容导航first
    updatefirst(i) {
      // 切换小三角和内容
      this.num1 = i;
      // 显示切换内容,隐藏隔壁家切换内容
      this.updateFlag = true;
      // 隐藏隔壁家小三角
      this.num2 = i;
    },
    // 2.0 内容导航second
    updatesecond(i) {
      // 切换小三角和内容
      this.num2 = i;
      // 显示切换内容,隐藏隔壁家切换内容
      this.updateFlag = false;
      // 隐藏隔壁家小三角
      this.num1 = i;
    },
    // 头部客服
    showPopup() {
      this.show = !this.show;
    },
    // 底部刷新
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 4; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset == 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    });
  },
  // created () {
  //   console.log("window.pageYOffset",window.pageYOffset);
    
    
  // }
};
</script>

<style lang="scss" scoped>
.lists {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  padding-top: 44px;
  .top_hearder {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    .nav {
      display: inline-block;
      width: 24px;
      height: 44px;
      padding: 0 8px 0 12px;
      font-size: 19px;
      color: #333333;
      font-weight: bold;
    }
    .title {
      font-size: 17px;
      color: #333333;
    }
    .contact {
      display: inline-block;
      width: 24px;
      height: 44px;
      padding: 0 8px 0 12px;
      font-size: 24px;
      color: #333333;
    }
  }
  .slogan {
    width: 100%;
    height: 118px;
    background-image: url(../assets/images/listsimg/bg_01.jpg);
    background-size: 100% 100%;
    .search {
      width: 100%;
      height: 44px;
      border-top: 1px solid transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      top: 44px;
      z-index: 1000;
      .search_con {
        width: 90%;
        height: 32px;
        border-radius: 16px;
        background-color: #f2f3f7;
        display: flex;
        .local {
          width: 80px;
          height: 32px;
          line-height: 32px;
          color: #0086f6;
          font-size: 14px;
          .local_icon {
            display: inline-block;
            width: 14px;
            height: 14px;
            margin-left: 10px;
            vertical-align: middle;
            background: url(../assets/images/listsimg/icon_01.png) no-repeat 0 0;
            background-size: 14px auto;
            position: relative;
            left: 0;
            top: -2px;
          }
          .place {
            font-style: normal;
            margin-left: 2px;
          }
          .station {
            font-style: normal;
          }
        }
        .search_btn {
          flex: 1;
          height: 32px;
          font-size: 14px;
          line-height: 32px;
          color: #a1a1a1;
          padding-left: 16px;
          i {
            vertical-align: middle;
          }
        }
      }
      &.con {
        background-color: #ffffff;
      }
    }
  }
  .con_nav {
    background-color: #ffffff;
    .nav_first,
    .nav_second {
      ul {
        padding: 12px 0;
        display: flex;
        li {
          flex: 0 0 25%;
          text-align: center;
          img {
            height: 49px;
          }
          p {
            width: 100%;
            font-size: 12px;
            color: #333333;
          }
        }
        li.con {
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            border-top: 5px solid #f4f4f4;
            border-right: 5px solid #f4f4f4;
            border-bottom: 5px solid transparent;
            border-left: 5px solid transparent;
            transform: rotate(-45deg);
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: -17px;
          }
        }
      }
    }
    .nav_second {
      ul {
        padding-top: 0;
      }
    }
  }
  .nav_con {
    width: 100%;
    background-color: #f4f4f4;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 5px 0;
      li {
        flex: 0 0 22%;
        height: 26px;
        border-radius: 15px;
        background-clip: content-box;
        background-color: #ffffff;
        padding: 5px 0;
        text-align: center;
        line-height: 26px;
        font-size: 12px;
        color: #222222;
      }
    }
  }
  .vtop {
    width: 100%;
    height: 15px;
    background-color: #ffffff;
  }
  .viewall {
    width: 100%;
    height: 15px;
    text-align: center;
    background-color: #ffffff;
    img {
      height: 15px;
    }
  }
  .vbot {
    width: 100%;
    height: 10px;
    background-color: #ffffff;
  }
  .list_con {
    width: 100%;
    background-color: #ffffff;
    .list_ccon {
      padding: 0 8px;
      ul {
        padding: 8px;
        li {
          width: 100%;
          height: 132px;
          display: flex;
          margin-bottom: 8px;
          .spot_img {
            width: 132px;
            height: 132px;
            img {
              width: 132px;
              height: 132px;
              border-radius: 5px;
            }
          }
          .spot_info {
            flex: 1;
            padding-left: 6px;
            position: relative;
            .title {
              font-size: 16px;
              color: rgb(51, 51, 51);
              line-height: 20px;
            }
            .item {
              height: 18px;
              line-height: 18px;
              margin: 8px 0;
              span {
                font-size: 11px;
                vertical-align: middle;
                background-color: rgb(230, 243, 254);
                color: #0086f6;
                margin-right: 2px;
                border-radius: 3px;
                padding: 0 4px;
              }
            }
            .item_details {
              font-size: 13px;
              color: #999999;
              text-align: justify;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .order {
              width: 100%;
              position: absolute;
              bottom: 0;
              left: 5px;
              display: flex;
              align-items: flex-end;
              .price {
                i {
                  font-style: normal;
                  color: #ff6600;
                  font-weight: bold;
                  font-size: 12px;
                }
                .number {
                  font-size: 18px;
                }
              }
              .order_btn {
                width: 74px;
                height: 30px;
                background: url(../assets/images/listsimg/icon_03.png) no-repeat
                  center center;
                background-size: 74px 30px;
                box-sizing: border-box;
                padding-left: 25px;
                padding-top: 4px;
                border-radius: 5px;
                overflow: hidden;
                margin-left: auto;
                span {
                  color: #ffffff;
                  font-size: 14px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 47px;
    background: url(../assets/images/listsimg/icon_04.png);
    background-size: 100% 100%;
  }
  .fbot {
    width: 100%;
    height: 10px;
    background-color: #f8f8f8;
    margin-bottom: 49px;
  }
  .bot_nav {
    width: 100%;
    height: 49px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    ul {
      width: 100%;
      height: 49px;
      display: flex;
      li {
        flex: 0 0 33.33%;
        text-align: center;
        display: flex;
        // justify-content: center;
        flex-direction: column;
        align-items: center;
        .ficon {
          display: inline-block;
          width: 74px;
          height: 30px;
          background-repeat: no-repeat;
          background-size: auto 30px;
        }
        .fname {
          font-style: normal;
          font-size: 10px;
          color: #333333;
          margin-top: 3px;
        }
        &:nth-child(1) {
          .ficon {
            background-image: url(../assets/images/listsimg/f_icon_01.png);
          }
          .fname {
            color: #0086f6;
          }
        }
        &:nth-child(2) {
          .ficon {
            background-image: url(../assets/images/listsimg/f_icon_02.png);
          }
        }
        &:nth-child(3) {
          .ficon {
            background-image: url(../assets/images/listsimg/f_icon_03.png);
          }
        }
      }
    }
  }
  // 联系客服
  .customer {
    width: 100%;
    .tit {
      padding: 10px 40px;
      font-size: 17px;
      color: #333333;
      text-align: center;
      position: relative;
      i {
        content: "";
        display: block;
        width: 22px;
        height: 22px;
        position: absolute;
        top: 12px;
        right: 16px;
        text-align: center;
        line-height: 22px;
        font-size: 20px;
        color: #acacac;
      }
    }
    .content {
      padding: 0 20px;
      margin-top: 10px;
      dl {
        padding: 17px 0 32px 0;
        border-bottom: 1px solid #f2f2f2;
        dt {
          font-size: 16px;
          color: #222222;
          font-weight: bold;
        }
        dd {
          margin-top: 20px;
          p {
            font-size: 12px;
            color: #666666;
            line-height: 16px;
            display: flex;
            i {
              font-size: 18px;
              color: #1d93f7;
              margin-left: auto;
            }
          }
        }
      }
      .tel {
        padding: 32px 0;
        h3 {
          font-size: 16px;
          color: #222222;
          font-weight: bold;
        }
        .consult {
          position: relative;
          p {
            font-size: 12px;
            color: #666666;
            padding-top: 10px;
            span,
            b {
              color: #222222;
              font-weight: bold;
            }
          }
          i {
            font-size: 18px;
            color: #1d93f7;
            position: absolute;
            top: 50%;
            right: 0;
            margin-top: -9px;
          }
        }
      }
    }
  }
}
</style>