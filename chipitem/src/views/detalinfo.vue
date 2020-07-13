<template>
  <div>
    <div class="detainfo">
      <!-- 顶部导航 -->
      <header :class="['header',{'con':flag}]" ref="header">
        <i class="hicon" @click="$router.push('/lists')"></i>
        <span
          class="title"
        >上海2日1晚自由行(5钻)·【劲爆价|住金茂凯悦】宿崇明金茂凯悦酒店1晚·一家主打崇明美食&可带着宠物一起入住的酒店|可加购东滩湿地门票|融入大自然的酒店·感受生活点滴幸福</span>
      </header>
      <!-- 顶部导航end -->
      <!-- 顶部轮播 -->
      <div class="rotation">
        <van-swipe @change="onChange">
          <van-swipe-item>
            <img src="../assets/images/detalinfoimg/station_01.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/detalinfoimg/station_02.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/detalinfoimg/station_03.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/detalinfoimg/station_04.jpg" alt />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/4</div>
          </template>
        </van-swipe>
        <div class="info">
          <div class="info_con">
            <div class="way">
              <span>上海出发</span>·
              <span>携程自营</span>
            </div>
            <div class="number">
              <span>编号：</span>
              <span>1026251576</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 顶部轮播end -->
      <!-- 基本信息 -->
      <div class="basicinfo">
        <div class="price">
          <div class="number">
            <i class="Symbol">￥</i>
            <i class="num">{{hotelinfo.price}}</i>
            <i class="up">/人起</i>
          </div>
          <div class="person">60人出游</div>
        </div>
        <div class="baseinfo" ref="baseinfo">
          <div class="title">
            <h2>上海2日1晚自由行(5钻)</h2>
            <div class="star">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div class="content">
            【劲爆价|住金茂凯悦】宿崇明金茂凯悦酒店1晚·
            一家主打崇明美食&可带着宠物一起入住的酒店|可加购东滩湿地门票|
            融入大自然的酒店·感受生活点滴幸福
          </div>
          <div class="specil">
            <i class="con">攻略完备</i>
            <i>酒店特卖</i>
          </div>
        </div>
      </div>
      <!-- 基本信息end -->
      <!-- 优惠 -->
      <div class="discount">
        <div class="discon">
          <i>可享</i>
          建行龙支付二百减一百满减券
        </div>
        <div class="guar">
          <span class="noworry"></span>
          <i>航变无忧</i>
          <i>出行保障</i>
          <span class="details">详细</span>
        </div>
      </div>
      <!-- 优惠end -->
      <!-- 评论 -->
      <div class="personwords">
        <div class="comment">
          <div class="num">
            <i>评分</i>
            <i>3.0</i>
            <i>/5</i>
          </div>
          <div class="person">
            <i>66</i>
            <i>人出游</i>
          </div>
          <div class="more">查看全部</div>
        </div>
        <div class="free">
          <dl>
            <dd>
              <div class="tit">酒店住宿</div>
              <div class="scroll">
                <div class="bar"></div>
              </div>
              <div class="grade">3.0</div>
            </dd>
            <dd>
              <div class="tit">附加产品</div>
              <div class="scroll">
                <div class="bar"></div>
              </div>
              <div class="grade">3.0</div>
            </dd>
            <dd>
              <div class="tit">推荐玩法</div>
              <div class="scroll">
                <div class="bar"></div>
              </div>
              <div class="grade">3.0</div>
            </dd>
          </dl>
        </div>
        <div class="words">
          <div class="user">
            <span class="phone">138****0322</span>
            <span class="userid">家庭亲子</span>
            <span class="time">2020-05-11</span>
          </div>
          <div class="userwords">总体行程还是不错，就是酒店的服务少于差了一点，酒店给到解释是，人太多了，忙不过来。。算啦，希望有改进吧。</div>
        </div>
      </div>
      <!-- 评论end -->
      <!-- 班期 -->
      <div class="schedule">
        <div class="local">
          <span>上海</span>
          <span>出发</span>
        </div>
        <div class="datetime">
          <ul>
            <li>
              <a href="javascript:;">
                <span class="time">端午节</span>
                <span class="price">
                  <i>￥</i>
                  <i>836</i>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="time">05/26</span>
                <span class="price">
                  <i>￥</i>
                  <i>836</i>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="time">05/27</span>
                <span class="price">
                  <i>￥</i>
                  <i>836</i>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span class="time">05/28</span>
                <span class="price">
                  <i>￥</i>
                  <i>836</i>
                </span>
              </a>
            </li>
            <li class="more" @click="$router.push('./reserve')">
              <a href="javascript:;">更多班期</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 班期end -->
      <!-- 详细介绍 -->
      <div class="detailscon">
        <div :class="['tabs',{'con':tabsFlag}]" ref="tabs">
          <ul>
            <li
              :class="{'con':num==index}"
              v-for="(item,index) in tablist"
              :key="index"
              @click="tabsClick(index)"
            >{{item}}</li>
          </ul>
        </div>
        <!-- 产品推荐 -->
        <div class="recommend" ref="recommend">
          <div class="manager">产品经理推荐</div>
          <div class="manwords">
            <ol>
              <li>劲爆价格入住崇明金茂凯悦酒店，可携带宠物出游！</li>
              <li>温馨提示：酒店可以携带宠物，但是一定要预定宠物房才可以哦！</li>
              <li>本产品为[酒店+门票]产品，不含交通</li>
            </ol>
          </div>
        </div>
        <!-- 产品特色 -->
        <div class="characte" ref="characte">
          <div class="special">产品特色</div>
          <p class="pred">友情提示：</p>
          <p class="pred">酒店可以携带宠物，但是一定要预定宠物房才可以哦</p>
          <p class="p20"></p>
          <p>（客人需提供以下信息：所携带的狗的姓名、性别、种类、体重，并只能带一条，体重不超过30公斤，带好牵引绳，入住时需出示宠物证和接种疫苗超过两周但不到一年的狂犬病免疫疫苗证明可用复印件。酒店不接受怀孕和发情期母犬，如宠物犬对其他客人造成影响，酒店会拒绝入住）</p>
          <p class="p20"></p>
          <p class="p20"></p>
        </div>
        <!-- 加载更多 -->
        <div class="loadmore">
          点击加载全部
          <i></i>
        </div>
      </div>
      <!-- 详细介绍end -->
      <!-- 推荐玩法 -->
      <div class="playways" ref="playways">
        <div class="tit">
          <h3>推荐玩法</h3>
          <b>
            <i>2</i>
            <i>天</i>
            <i>1</i>
            <i>晚</i>
            <i>|</i>
            <i>2</i>
            <i>个景点</i>
          </b>
        </div>
        <div class="cont">
          <div class="content">
            <!-- 第一天 -->
            <div class="dayone">
              <!-- 主题 -->
              <span class="spottit">
                <b>D1</b>自行前往酒店—东滩湿地公园
              </span>
              <!-- 交通 -->
              <div class="trpexp">
                <h3 class="traffic">交通</h3>
                <p class="explain">自行前往酒店，抵达后，自行办理入住手续。</p>
              </div>
              <!-- 酒店模板 -->
              <div class="hotel">
                <div class="hotel_con">
                  <div class="hotelpic">
                    <img src="../assets/images/detalinfoimg/hotel_01.jpg" alt />
                  </div>
                  <div class="hotelinfo">
                    <p class="pblue hotel_pblue">崇明金茂凯悦酒店</p>
                    <p class="pgray">豪华型酒店</p>
                    <p class="pgray">崇明岛/长兴岛/横沙岛</p>
                  </div>
                </div>
              </div>
              <!-- 景点餐饮模板 景点 -->
              <div class="service">
                <div class="service_con">
                  <p class="pblue sopt_pblue">景点：东滩湿地公园(Dongtan Wetland Park)</p>
                  <div class="pic">
                    <img src="../assets/images/detalinfoimg/hotel_02.jpg" alt />
                  </div>
                  <div class="synopsis">
                    <p
                      class="pgray4"
                    >东滩湿地公园位于崇明岛的东端，处于长江入海口，这里空气清新，又有一望无际的芦苇布满滩涂，走在木栈道上是一种亲近自然的享受。公园内的正中央还建有观鹭台，便于登高观鸟。</p>
                  </div>
                  <div class="time">活动时间：约2小时30分钟</div>
                </div>
              </div>
              <!-- 景点餐饮模板 餐饮-->
              <div class="service foods">
                <div class="service_con">
                  <p class="pblue sopt_pblue">餐饮：老滋味农家乐(崇明店)</p>
                  <div class="pic">
                    <img src="../assets/images/detalinfoimg/hotel_03.jpg" alt />
                  </div>
                  <div class="time">活动时间：约2小时30分钟</div>
                </div>
              </div>
            </div>
            <!-- 第二天 -->
            <div class="dayone daytwo" ref="daytwo">
              <!-- 主题 -->
              <span class="spottit">
                <b>D2</b>东平国家森林公园—返回温馨的家
              </span>
              <!-- 景点餐饮模板 景点 -->
              <div class="service">
                <div class="service_con">
                  <p class="pblue sopt_pblue">景点：东平国家森林公园(Dongping National Forest Park)</p>
                  <div class="pic">
                    <img src="../assets/images/detalinfoimg/hotel_04.jpg" alt />
                  </div>
                  <div class="synopsis">
                    <p
                      class="pgray4"
                    >东平国家森林公园位于崇明岛中部，公园深处有烧烤区和露营基地，可以约上三五好友来此烧烤、或者租自行车环园骑行，夏季更是避暑的好地方。这里还提供多种娱乐体验项目，其中包括彩弹射击、卡丁车、滑草等，还有脚踏船、水上步行球等水上娱乐项目。。</p>
                  </div>
                  <div class="time">活动时间：约2小时</div>
                </div>
              </div>
              <!-- 温馨提示 -->
              <div class="Tips">
                <p>推荐前往陈家镇，品尝崇明当地特色土菜。</p>
              </div>
              <!-- 景点餐饮模板 餐饮-->
              <div class="service foods">
                <div class="service_con">
                  <p class="pblue sopt_pblue">餐饮：大雄农家乐(崇明森林公园店)</p>
                  <div class="time">活动时间：约2小时30分钟</div>
                </div>
              </div>
              <!-- 交通 -->
              <div class="trpexp two_trpexp">
                <h3 class="traffic">交通</h3>
                <p class="explain">自行返回温馨的家。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐玩法end -->
      <!-- 预定须知 -->
      <div class="subscribe" ref="subscribe">
        <ul>
          <li>预订须知及安全提示</li>
        </ul>
      </div>
      <!-- 预定须知end -->
      <!-- 携程自营 -->
      <div class="ciptxie">
        <span class="s1">携程自营</span>
        <span class="s2">可查看经营许可证信息</span>
      </div>
      <!-- 携程自营end -->
      <!-- 更多产品 -->
      <div class="More">
        <div class="tit">更多产品推荐</div>
        <recommend></recommend>
      </div>
      <!-- 更多产品end -->
      <!-- 定制旅行 -->
      <div class="youself">
        <h3>定制旅行</h3>
        <p>想要行程更灵活？独立成团欢乐旅行找旅行定制师来搞定！</p>
      </div>
      <!-- 定制旅行end -->
      <!-- 底部预定 -->
      <div class="footer">
        <div class="like foo" @click="addlike()">
          <i :class="{con:this.journeyinfo.likeFlag}"></i>
          <span>收藏</span>
        </div>
        <div class="contact foo" @click="showPopup">
          <i></i>
          <span>客服Hi~</span>
        </div>
        <div class="btn" @click="add()">
          <div class="btn_b">立即预订</div>
        </div>
      </div>
      <!-- 底部预定end -->
      <!-- 侧边导航 -->
      <div class="aside">
        <ul>
          <li>祥</li>
          <li @click="showPopup2"></li>
          <li @click="goTop()"></li>
        </ul>
      </div>
      <!-- 侧边导航end -->
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
      <!-- 行程概要 -->
      <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      <div class="trip">
        <van-popup
          v-model="show2"
          :overlay-style="{backgroundColor:'rgba(0,0,0,0)'}"
          position="right"
          :style="{ width: '84%' ,height:'100%'}"
        >
          <div class="tripcon">
            <div class="box">
              <h2>行程概要</h2>
              <div class="outline">
                <ul>
                  <li>
                    <h4>第一天</h4>
                    <p>自行前往酒店—东滩湿地公园</p>
                  </li>
                  <li>
                    <h4>第二天</h4>
                    <p>东平国家森林公园—返回温馨的家</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </van-popup>
      </div>
      <!-- 行程概要end -->
    </div>
  </div>
</template>
<script>
// import BScroll from "@better-scroll/core";
// import {createNamespacedHelpers} from "vuex";
// const {mapMutations} = createNamespacedHelpers('detalinfo');
import recommend from "../components/publics/recommend.vue";
export default {
  data() {
    return {
      current: 0,
      flag: false,
      tabsFlag: false,
      likeFlag: false,
      num: 0,
      tablist: ["产品特色", "推荐玩法", "预订须知"],
      scrollist: [],
      show: false,
      show2: false,

      //详情价格等静态数据
      hotelinfo: {
        hotelname: "崇明金茂凯悦酒店",
        hoteladdress: "酒店位于河口冲积岛——崇明岛",
        price: 520
      },
      // 该旅程信息
      journeyinfo: {
        id: "0001",
        title: "上海2日1晚自由行(5钻)",
        detalis: "劲爆价格入住崇明金茂凯悦酒店，可携带宠物出游！",
        price: 520,
        likeFlag: false,
        img: require("../assets/images/listsimg/spot_01.jpg")
      }
    };
  },
  methods: {
    // 数据传递
    // 调用vuex里面的add方法
    // ...mapMutations(['add']),
    add() {
      if (this.$store.state.loginshow) {
        this.$store.commit("detalinfo/add", this.hotelinfo);
      }
      this.$router.push("/reserve");
    },
    // 喜欢
    addlike() {
      this.journeyinfo.likeFlag = true;

      this.$store.commit("collection/addlike", this.journeyinfo);
    },
    // 数据传递ed
    onChange(index) {
      this.current = index;
    },
    // 1.0 点击tabs时调用
    tabsClick(i) {
      // 切换样式
      this.num = i;
      // 右侧瞬动
      // window.scrollTo(0, this.scrollist[i]);
    },
    // 2.0 获取滚动区域的高度
    // tabsScroll() {
    //   // 产品特色
    //   let characteTop = this.$refs.characte.offsetTop;
    //   //  推荐玩法 D1
    //   let playwaysTop = this.$refs.playways.offsetTop;
    //   //  推荐玩法 D2
    //   // let daytwoTop = this.$refs.daytwo.offsetTop;
    //   //  预定须知
    //   let subscribeTop = this.$refs.subscribe.offsetTop;

    //   this.scrollist[0] = characteTop;
    //   this.scrollist[1] = playwaysTop;
    //   // this.scrollist[2] = daytwoTop;
    //   this.scrollist[2] = subscribeTop;
    // },
    goTop() {
      window.scrollTo(0, 0);
    },
    showPopup() {
      this.show = !this.show;
    },
    showPopup2() {
      this.show2 = !this.show2;
    }
  },
  components: {
    recommend
  },
  created() {
    let index = this.$store.state.collection.collectionlist.findIndex(
      item => item.id == this.journeyinfo.id
    );
    if (index != "-1") {
      this.journeyinfo.likeFlag = this.$store.state.collection.collectionlist[
        index
      ].likeFlag;
    } else {
      this.journeyinfo.likeFlag == false;
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // 1.0 显示与隐藏顶部标题
      if (window.pageYOffset == 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
      // // 2.0 固定联动轮动导航
      // let tabsHeight = this.$refs.tabs.offsetHeight;
      // let navHeight = this.$refs.header.offsetHeight;
      // let recommendTop = this.$refs.recommend.offsetTop;
      // if (window.pageYOffset >= recommendTop - (tabsHeight + navHeight)) {
      //   this.tabsFlag = true;
      // } else {
      //   this.tabsFlag = false;
      // }
    });
    // 3.0 测算出需要的高度
    // this.tabsScroll();
  }
};
</script>
<style lang="scss" scoped>
#app > div {
  width: 100%;
  background-color: #f7f7f7;
}
.detainfo {
  width: 100%;
  background-color: #f7f7f7;
  padding-bottom: 78px;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    .hicon {
      display: inline-block;
      width: 32px;
      height: 32px;
      position: relative;
      top: 6px;
      left: 18px;
      background-color: rgba(34, 34, 34, 0.6);
      border-radius: 50%;
      &::after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: url(../assets/images/detalinfoimg/icon_01.png) no-repeat 0 -40px;
        background-size: 60px auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    .title {
      width: 199px;
      height: 44px;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 18px;
      color: #333;
      line-height: 44px;

      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;

      display: none;
    }
    &.con {
      background-color: #ffffff;
      .hicon {
        background-color: #ffffff;
        &::after {
          background-position: 0 0;
        }
      }
      .title {
        display: inline-block;
      }
    }
  }
  // 顶部轮播
  .rotation {
    width: 100%;
    position: relative;
    .custom-indicator {
      width: 23px;
      height: 19px;
      padding: 0 8px 0 25px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      font-size: 13px;
      text-align: center;
      line-height: 19px;
      border-radius: 9px;
      position: absolute;
      right: 15px;
      bottom: 30px;
      &::after {
        content: "";
        display: block;
        width: 12px;
        height: 10px;
        background: url(../assets/images/detalinfoimg/icon_02.png);
        background-size: 12px 10px;
        position: relative;
        top: -14px;
        left: -14px;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .info {
      width: 100%;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      color: #ffffff;
      position: absolute;
      bottom: 4px;
      left: 0;
      display: flex;
      justify-content: center;
      .info_con {
        display: flex;
        width: 90%;
        .way {
          margin-right: auto;
        }
        .number {
        }
      }
    }
  }
  // 基本信息
  .basicinfo {
    width: 100%;
    background-color: #ffffff;
    .price {
      padding: 10px 15px 0 15px;
      display: flex;
      align-items: flex-end;
      .number {
        padding-right: 10px;
        margin-right: 10px;
        position: relative;
        i {
          font-style: normal;
          font-size: 12px;
          color: #ff6913;
        }
        .num {
          font-size: 25px;
        }
        .up {
          color: #999;
        }
        &::before {
          content: "";
          display: block;
          width: 11px;
          height: 11px;
          background: url(../assets/images/detalinfoimg/icon_03.png);
          background-size: 11px 11px;
          position: absolute;
          right: -3px;
          bottom: 5px;
        }
      }
      .person {
        font-size: 12px;
        color: #999;
        line-height: 22px;
      }
    }
    .baseinfo {
      padding: 15px;
      .title {
        width: 100%;
        display: flex;
        h2 {
          font-size: 16px;
          color: #333;
        }
        .star {
          height: 18px;
          margin-left: 8px;
          i {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: url(../assets/images/detalinfoimg/icon_06.png) no-repeat
              center center;
            background-size: 12px auto;
          }
        }
      }
      .content {
        width: 100%;
        text-align: justify;
        font-size: 13px;
        color: #222222;
        line-height: 1.5em;
      }
      .specil {
        width: 100%;
        margin-top: 5px;
        i {
          display: inline-block;
          width: 50px;
          height: 17px;
          border: 1px solid #eaeaea;
          border-radius: 2px;
          font-size: 10px;
          font-style: normal;
          color: #666666;
          text-align: center;
          line-height: 17px;
        }
        i.con {
          padding-right: 10px;
          color: #ff4646;
          border-color: #ffe6e6;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 4px;
            height: 6px;
            background: url(../assets/images/detalinfoimg/icon_07.png) no-repeat
              center center;
            background-size: 4px 6px;
            position: absolute;
            top: 5px;
            right: 5px;
          }
        }
      }
    }
  }
  // 优惠
  .discount {
    width: 100%;
    background-color: #ffffff;
    margin-top: 8px;
    .discon {
      padding: 15px 55px 15px 63px;
      font-size: 13px;
      color: #222222;
      position: relative;
      line-height: 13px;
      i {
        display: inline-block;
        font-size: 12px;
        border: 1px solid rgba(13, 186, 13, 0.3);
        font-style: normal;
        color: #0dba0d;
        line-height: 13px;
      }
      &::before {
        content: "优惠";
        display: block;
        font-size: 13px;
        color: #999;
        position: absolute;
        top: 15px;
        left: 15px;
      }
      &::after {
        content: "";
        display: block;
        background: url(../assets/images/detalinfoimg/icon_08.png);
        width: 5px;
        height: 9px;
        background-size: 5px 9px;
        position: absolute;
        top: 17px;
        right: 15px;
      }
    }
    .guar {
      padding: 13px 30px 13px 15px;
      display: flex;
      align-items: flex-end;
      position: relative;
      .noworry {
        display: inline-block;
        width: 57px;
        height: 20px;
        background: url(../assets/images/detalinfoimg/icon_04.png) no-repeat -142px
          0;
        background-size: auto 60px;
        margin-right: 8px;
      }
      i {
        padding-left: 16px;
        font-style: normal;
        font-size: 12px;
        color: #333;
        position: relative;
        margin-right: 8px;
        &::before {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          background: url(../assets/images/detalinfoimg/icon_04.png) no-repeat -124px -20px;
          background-size: auto 60px;
          position: absolute;
          top: 4px;
          left: 0;
        }
      }
      .details {
        font-size: 12px;
        color: #999;
        margin-left: auto;
      }
      &::after {
        content: "";
        display: block;
        background: url(../assets/images/detalinfoimg/icon_08.png);
        width: 5px;
        height: 9px;
        background-size: 5px 9px;
        position: absolute;
        top: 21px;
        right: 15px;
      }
    }
  }
  // 评论
  .personwords {
    width: 100%;
    margin-bottom: 8px;
    .comment {
      display: flex;
      padding: 11px 0 11px 35px;
      align-items: flex-end;
      position: relative;
      i {
        font-style: normal;
      }
      .num {
        font-size: 15px;
        color: #333333;
      }
      .person {
        font-size: 12px;
        color: #999;
        margin-left: 8px;
      }
      .more {
        font-size: 12px;
        color: #19a0f0;
        margin-left: auto;
        margin-right: 25px;
        position: relative;
        &::after {
          content: "";
          display: block;
          background: url(../assets/images/detalinfoimg/icon_08.png);
          width: 5px;
          height: 9px;
          background-size: 5px 9px;
          position: absolute;
          top: 5px;
          right: -10px;
        }
      }
      &::before {
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        background: url(../assets/images/detalinfoimg/icon_05.png);
        background-size: 14px 14px;
        position: absolute;
        left: 12px;
        top: 16px;
      }
    }
    .free {
      padding: 0 0 10px 15px;
      height: 40px;
      dl {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        height: 20px;
        dd {
          flex: 0 0 50%;
          display: flex;
          height: 20px;
          line-height: 20px;
          align-items: center;
          .tit {
            font-size: 12px;
            color: #999;
            margin-right: 4px;
          }
          .scroll {
            width: 85px;
            height: 4px;
            background-color: #f2f2f2;
            border-radius: 2px;
            position: relative;
            .bar {
              width: 60%;
              height: 4px;
              background-color: #bbbbbb;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 2px;
            }
          }
          .grade {
            font-size: 12px;
            color: #333;
            margin-left: 6px;
          }
        }
      }
    }
    .words {
      padding: 3px 15px 11px 15px;
      .user {
        display: flex;
        align-items: flex-end;
        span {
          font-size: 12px;
          color: #333;
          &:nth-child(2) {
            margin-left: 8px;
          }
          &:nth-child(3) {
            margin-left: auto;
          }
        }
      }
      .userwords {
        font-size: 13px;
        color: #333;
        margin: 5px 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  // 班期
  .schedule {
    width: 100%;
    background-image: linear-gradient(to top, #fff 55%, #d7dce4 100%);
    margin-bottom: 8px;
    .local {
      padding: 11px 0 11px 35px;
      font-size: 15px;
      color: #222222;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 12px;
        height: 15px;
        background: url(../assets/images/detalinfoimg/icon_09.png) no-repeat 0 0;
        background-size: 12px 15px;
        position: absolute;
        top: 15px;
        left: 15px;
      }
    }
    .datetime {
      width: 100%;
      padding-bottom: 10px;
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        li {
          width: 63px;
          height: 37px;
          border: 1px solid #f9f9fb;
          border-radius: 2px;
          margin: 0 2.5px;
          a {
            font-size: 12px;
            display: block;
            width: 100%;
            height: 100%;
            span {
              display: block;
              width: 100%;
              text-align: center;
            }
            .time {
              color: #333333;
            }
            .price {
              color: #ff6913;
              font-size: 11px;
              i {
                font-style: normal;
              }
            }
          }
        }
        .more {
          padding: 0 18px;
          box-sizing: border-box;
          a {
            color: #19a0f0;
            font-size: 12px;
          }
        }
      }
    }
  }
  // 详细介绍
  .detailscon {
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 10px;
    @mixin title {
      font-size: 20px;
      color: #333;
      margin: 25px 0;
      text-align: center;
    }
    .tabs {
      width: 100%;
      height: 43px;
      border-bottom: 1px solid #fafafa;
      ul {
        display: flex;
        width: 100%;
        li {
          flex: 0 0 33.33%;
          height: 43px;
          text-align: center;
          line-height: 43px;
          font-size: 14px;
          color: #666666;
        }
        li.con {
          font-weight: bold;
          color: #19a0f0;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 64px;
            height: 3px;
            background-color: #19a0f0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
      }
      &.con {
        position: fixed;
        top: 44px;
        left: 0;
        background-color: #ffffff;
        z-index: 1000;
        border-color: #f4f4f4;
        border-width: 2px;
      }
    }
    .recommend {
      padding: 0 15px;
      .manager {
        @include title();
      }
      .manwords {
        padding: 10px 25px;
        position: relative;
        &::before,
        &::after {
          content: "";
          display: block;
          width: 20px;
          height: 16px;
          position: absolute;
        }
        &::before {
          background: url(../assets/images/detalinfoimg/icon_10.png) no-repeat -140px -2px;
          background-size: 200px auto;
          top: 0;
          left: 0;
        }
        &::after {
          background: url(../assets/images/detalinfoimg/icon_10.png) no-repeat -140px -2px;
          background-size: 200px auto;
          bottom: 0;
          right: 0;
          transform: rotate(180deg);
        }
        ol {
          li {
            font-size: 14px;
            color: #666666;
            padding-left: 15px;
            position: relative;
            &::before {
              content: "";
              display: block;
              width: 4px;
              height: 4px;
              background-color: #666666;
              border-radius: 2px;
              position: absolute;
              top: 8px;
              left: 2px;
            }
          }
        }
      }
    }
    .characte {
      padding: 0 15px;
      .special {
        @include title();
        p.pred {
          color: #ff0000;
        }
      }
      p {
        font-size: 14px;
        color: #333;
      }
      p.pred {
        color: #ff0000;
        font-weight: bold;
      }
      p.p20 {
        width: 100%;
        height: 20px;
      }
    }
    .loadmore {
      width: 100%;
      line-height: 43px;
      font-size: 14px;
      color: #19a0f0;
      text-align: center;
      i {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url(../assets/images/detalinfoimg/icon_10.png) no-repeat -62px -2px;
        background-size: 200px auto;
        transform: rotate(90deg);
        position: relative;
        left: 0px;
        top: 2px;
        margin-left: 4px;
      }
    }
  }
  // 推荐玩法
  .playways {
    padding: 5px 15px 15px;
    background-color: #ffffff;
    // 公共样式
    .trpexp {
      margin-top: 10px;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: url(../assets/images/detalinfoimg/icon_11.png) no-repeat -60px -20px;
        background-color: #ffffff;
        background-size: 100px auto;
        position: absolute;
        top: 0;
        left: -36px;
      }
      .traffic {
        font-size: 14px;
        color: #333;
        font-weight: bolder;
        line-height: 20px;
      }
      .explain {
        font-size: 14px;
        color: #333;
        line-height: 20px;
      }
    }
    .pblue {
      font-weight: bold;
      color: #19a0f0;
      font-size: 14px;
      line-height: 20px;
      &::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background: url(../assets/images/detalinfoimg/icon_11.png) no-repeat -20px -20px;
        background-color: #ffffff;
        background-size: 100px auto;
        position: absolute;
        top: 0;
        left: -36px;
      }
    }
    .pgray {
      font-size: 13px;
      color: #333333;
      line-height: 20px;
    }
    .Tips {
      p {
        padding-top: 30px;
        font-size: 14px;
        color: #333333;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          background-color: #cbcbcb;
          border-radius: 3px;
          position: absolute;
          top: 38px;
          left: -29px;
        }
      }
    }
    // 公共样式end
    .tit {
      margin: 10px 0;
      text-align: center;
      h3 {
        font-weight: normal;
        font-size: 20px;
        color: #333;
      }
      b {
        font-size: 12px;
        color: #666666;
        font-weight: normal;
        letter-spacing: 1px;
        line-height: 24px;
        i {
          font-style: normal;
        }
      }
    }
    .cont {
      .content {
        .dayone {
          padding: 0 0 30px 25px;
          margin-left: 25px;
          border-left: 2px solid #f4f4f4;
          .spottit {
            font-size: 16px;
            color: #333;
            font-weight: bold;
            position: relative;
            b {
              font-size: 28px;
              color: #333333;
              font-weight: 500;
              position: absolute;
              left: -40px;
              top: -10px;
              background-color: #ffffff;
            }
          }
          .hotel {
            width: 100%;
            margin-top: 20px;
            position: relative;
            &::before {
              content: "";
              background: #f4fbff;
              position: absolute;
              left: -10px;
              right: -10px;
              top: -10px;
              bottom: -10px;
              z-index: 1;
              border: rgba(105, 196, 255, 0.4) 1px solid;
              border-radius: 5px;
            }
            .hotel_con {
              position: relative;
              z-index: 5;
              display: flex;
              .hotelpic {
                width: 75px;
                height: 75px;
                img {
                  width: 75px;
                  height: 75px;
                }
              }
              .hotelinfo {
                padding: 0 20px 0 10px;
                position: relative;
                width: 100%;
                box-sizing: border-box;
                &::after {
                  content: "";
                  display: block;
                  width: 6px;
                  height: 6px;
                  border: solid #69c4ff;
                  border-width: 2px 2px 0 0;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  right: 0;
                  margin: auto 0;
                  transform: rotate(45deg);
                }
                .pblue {
                  margin-bottom: 18px;
                  &::before {
                    left: -112px;
                    background-position: -20px 0;
                  }
                }
              }
            }
          }
          .service {
            width: 100%;
            margin-top: 30px;
            position: relative;
            &::before {
              content: "";
              background: #f4fbff;
              position: absolute;
              left: -10px;
              right: -10px;
              top: -10px;
              bottom: -10px;
              z-index: 1;
              border: rgba(105, 196, 255, 0.4) 1px solid;
              border-radius: 5px;
            }
            .service_con {
              position: relative;
              z-index: 5;
              .pic {
                width: 100%;
                margin-top: 5px;
                img {
                  width: 100%;
                }
              }
              .synopsis {
                padding-right: 20px;
                margin-top: 5px;
                position: relative;
                .pgray4 {
                  font-size: 14px;
                  color: #333333;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                }
                &::after {
                  content: "";
                  display: block;
                  width: 6px;
                  height: 6px;
                  border: solid #69c4ff;
                  border-width: 2px 2px 0 0;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  right: 0;
                  margin: auto 0;
                  transform: rotate(45deg);
                }
              }
              .time {
                padding-left: 18px;
                line-height: 20px;
                font-size: 12px;
                color: #999;
                margin-top: 5px;
                position: relative;
                &::before {
                  content: "";
                  display: block;
                  width: 14px;
                  height: 14px;
                  background: url(../assets/images/detalinfoimg/icon_10.png)
                    no-repeat -163px -3px;
                  background-size: 200px auto;
                  position: absolute;
                  top: 3px;
                  left: 0;
                }
              }
            }
          }
        }
        .daytwo {
          padding-bottom: 0;
          .foods {
            .sopt_pblue {
              &::before {
                background-position: -40px 0;
              }
            }
          }
          .two_trpexp {
            margin-top: 20px;
          }
        }
      }
    }
  }
  // 预定须知
  .subscribe {
    padding: 0 15px;
    background-color: #ffffff;
    margin-top: 10px;
    border-bottom: 1px solid #535353;
    ul {
      width: 100%;
      li {
        width: 100%;
        line-height: 44px;
        font-size: 14px;
        color: #333;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border: solid #cecece;
          border-width: 2px 2px 0 0;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto 0;
          transform: rotate(45deg);
        }
      }
    }
  }
  // 携程自营
  .ciptxie {
    padding: 0 25px 0 40px;
    line-height: 44px;
    background-color: #ffffff;
    margin-top: 10px;
    display: flex;
    position: relative;
    .s1 {
      font-size: 15px;
      color: #222222;
      margin-right: auto;
    }
    .s2 {
      font-size: 12px;
      color: #999;
    }
    &::before {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      background: url(../assets/images/detalinfoimg/icon_12.png) no-repeat
        center center;
      background-size: 18px 18px;
      position: absolute;
      top: 14px;
      left: 14px;
    }
    &::after {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border: solid #cecece;
      border-width: 2px 2px 0 0;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 15px;
      margin: auto 0;
      transform: rotate(45deg);
    }
  }
  // 更多
  .More {
    .tit {
      padding-top: 10px;
      font-size: 20px;
      color: #333333;
      text-align: center;
      background-color: #ffffff;
      margin-top: 10px;
    }
  }
  // 定制旅行
  .youself {
    padding: 12px 90px;
    margin: 10px 0;
    background-color: #ffffff;
    position: relative;
    h3 {
      font-size: 16px;
      color: #ff6913;
      font-weight: normal;
    }
    p {
      font-size: 12px;
      color: #333333;
    }
    &::before {
      content: "";
      display: block;
      width: 52px;
      height: 52px;
      background: url(../assets/images/detalinfoimg/icon_04.png) no-repeat 0 0;
      background-size: 200px auto;
      position: absolute;
      top: 12px;
      left: 24px;
    }
    &::after {
      content: "立即定制";
      display: block;
      width: 64px;
      height: 25px;
      border-radius: 4px;
      border: 1px solid #e9e9e9;
      line-height: 25px;
      text-align: center;
      font-size: 12px;
      color: #333333;
      position: absolute;
      top: 28px;
      right: 10px;
    }
  }
  // 底部预定
  .footer {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: #ffffff;
    i {
      display: block;
      width: 22px;
      height: 20px;
      margin-bottom: 5px;
    }
    span {
      font-size: 10px;
      color: #666666;
    }
    .foo {
      width: 60px;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .like {
      i {
        background: url(../assets/images/detalinfoimg/icon_13.png) no-repeat 0 0;
        background-size: 72px auto;
      }
      i.con {
        background-position: 0 -20px;
      }
    }
    .contact {
      i {
        background: url(../assets/images/detalinfoimg/icon_13.png) no-repeat -50px
          0;
        background-size: 72px auto;
      }
    }
    .btn {
      flex: 1;
      .btn_b {
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;
        margin: 8px 5px;
        background-color: #ff6913;
        color: #ffffff;
        text-align: center;
        border-radius: 3px;
        font-size: 17px;
      }
    }
  }
  // 侧边导航
  .aside {
    width: 37px;
    position: fixed;
    right: 10px;
    bottom: 110px;
    z-index: 1000;
    ul {
      li {
        width: 35px;
        height: 35px;
        border: 1px solid #dcdcdc;
        border-radius: 50%;
        text-align: center;
        line-height: 35px;
        background: no-repeat center center;
        background-color: #ffffff;
        background-size: 35px 35px;
        margin-bottom: 10px;
        color: #7c7c7c;
        &:nth-child(2) {
          background-image: url(../assets/images/detalinfoimg/icon_14.png);
        }
        &:nth-child(3) {
          background-image: url(../assets/images/detalinfoimg/icon_15.png);
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
  // 行程概要
  .trip {
    .van-popup {
      background-color: rgba(36, 45, 58, 0.9);
    }
    .tripcon {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 10px 10px 70px 10px;
      .box {
        padding: 10px 0 0 14px;
        color: #ffffff;
        h2 {
          width: 100%;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .outline {
          ul {
            padding: 10px 0 0 10px;
            border-left: 1px solid #ffffff;
            li {
              display: flex;
              margin-bottom: 20px;
              font-size: 14px;
              position: relative;
              h4 {
                color: #a0a5ab;
                font-weight: normal;
                margin-right: 10px;
              }
              &::before {
                content: "";
                display: block;
                width: 7px;
                height: 7px;
                border: 2px solid #ffffff;
                background-color: #000000;
                border-radius: 50%;

                position: absolute;
                top: 5px;
                left: -16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>