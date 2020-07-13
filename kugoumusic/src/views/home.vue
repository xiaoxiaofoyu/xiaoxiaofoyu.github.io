<template>
  <div>
    <div class="Home">
      <!-- 轮播图 -->
      <div class="solide">
        <div class="swiper-container solidecontainer">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              style="background:url(https://imgessl.kugou.com/commendpic/20200406/20200406233800728240.jpg) no-repeat center center"
            ></div>
          </div>
          <div class="swiper-button-next solidebuttonnext"></div>
          <div class="swiper-button-prev solidebuttonprev"></div>
          <div class="swiper-pagination solidepagination swiper-pagination-white"></div>
        </div>
      </div>
      <!-- 轮播图end -->
      <div class="content">
        <div class="content_con">
          <!-- 双单一 -->
          <div class="doublelist clearfix">
            <!-- 精选歌单 -->
            <div class="selected">
              <div class="title">
                <div class="tit">
                  <span>精选</span>
                  <em>歌单</em>
                </div>
                <div class="more">
                  <span>更多</span>
                </div>
              </div>
              <div class="selected_con clearfix">
                <div
                  v-for="(item,index) in selectedlist"
                  :key="index"
                  :class="['select',{'mid':index != 0},{'big':index == 0}]"
                >
                  <div class="img">
                    <img :src="item.url" alt />
                    <div class="playnum">
                      <i></i>
                      {{item.play}}万
                    </div>
                    <div class="details">
                      <div class="details_con">
                        <div class="tit">{{item.title}}</div>
                        <div class="name">{{item.name}}</div>
                      </div>
                    </div>
                    <div class="play">
                      <div class="play_con">
                        <div class="play_btn"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 精选歌单end -->
            <!-- 热门榜单 -->
            <div class="hot">
              <div class="title">
                <div class="tit">
                  <span>精选</span>
                  <em>歌单</em>
                </div>
                <div class="more">
                  <span>更多</span>
                </div>
              </div>
              <div class="hot_content">
                <div class="ranklist clearfix" v-for="(item,index) in hotlist" :key="index">
                  <div class="img">
                    <img :src="item.url" alt />
                    <div class="play">
                      <div class="play_con">
                        <div class="play_btn"></div>
                      </div>
                    </div>
                  </div>
                  <div class="list">
                    <dl>
                      <dt>{{item.title}}</dt>
                      <dd v-for="(value,i) in item.song" :key="i">{{value}}</dd>
                    </dl>
                    <div class="to"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 热门榜单end -->
          </div>
          <!-- 双单一end -->
          <!-- 大图片 -->
          <div class="BIGimg size_10">
            <img src="../assets/home/big_img.jpg" alt />
          </div>
          <!-- 大图片end -->
          <!-- 双单二 -->
          <div class="doublelistsecond clearfix">
            <!-- 新歌首发 -->
            <div class="newsongs">
              <div class="title">
                <div class="tit">
                  <span>新歌</span>
                  <em>首发</em>
                </div>
                <div class="list">
                  <ul class="clearfix">
                    <li
                      :class="{'con':num == index}"
                      @mouseenter="num = index,changeNewsonglist = 1"
                      v-for="(item,index) in list"
                      :key="index"
                    >{{item}}</li>
                  </ul>
                </div>
                <div class="play_all" @click="playallsongFun(num)">
                  <span></span>
                  播放全部
                </div>
              </div>
              <div class="newsongs_con">
                <div class="songslist">
                  <!-- 华语 -->
                  <ul
                    v-for="(itemfirst,indexfirst) in newsonglist"
                    :key="indexfirst"
                    v-show="num == indexfirst"
                  >
                    <li
                      v-for="(item,index) in itemfirst.list.slice(0 + (changeNewsonglist - 1) * 7,8 + (changeNewsonglist - 1) * 7)"
                      :key="index + changeNewsonglist"
                    >
                      <span class="songName">{{item.name}}</span>
                      <span class="songTips"></span>
                      <span class="songBtns">
                        <span class="play_btn" @click="playnowsongFun(indexfirst,index)"></span>
                        <span class="down_btn" @click="addlovelist(indexfirst,index)"><i class="iconfont icon-xihuan"></i></span>
                      </span>
                      <span class="songTime">{{item.dt | dateFormat}}</span>
                    </li>
                  </ul>
                </div>
                <div class="page">
                  <div class="prev" @click="changeNewsonglist <= 1 ? 1 : changeNewsonglist-- "></div>
                  <div class="pagenum">{{changeNewsonglist}}/3</div>
                  <div class="next" @click="changeNewsonglist >= 3 ? 3 : changeNewsonglist++ "></div>
                </div>
              </div>
            </div>
            <!-- 推荐MV -->
            <div class="recomMv">
              <div class="title">
                <div class="tit">
                  <span>推荐</span>
                  <em>MV</em>
                </div>
                <div class="more">
                  <span>更多</span>
                </div>
              </div>
              <div class="recomMv_con">
                <div
                  v-for="(item,index) in recomMvlist"
                  :key="index"
                  :class="['MV',{'mid':index != 0},{'big':index == 0}]"
                >
                  <div class="img">
                    <img :src="item.url" alt />
                  </div>
                  <div class="details">
                    <div class="details_con">
                      <div class="tit">{{item.title}}</div>
                      <div class="name">{{item.singer}}</div>
                    </div>
                  </div>
                  <div class="play">
                    <div class="play_con">
                      <div class="play_btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 双单二end -->
          <!-- 大图片 -->
          <div class="BIGimg">
            <img src="../assets/home/big_img_02.jpg" alt />
          </div>
          <!-- 大图片end -->
          <!-- 双单三 -->
          <div class="doublelisthird clearfix">
            <!-- 热门电台 -->
            <div class="station">
              <div class="title">
                <div class="tit">
                  <span>热门</span>
                  <em>电台</em>
                </div>
                <div class="more">
                  <span>更多</span>
                </div>
              </div>
              <div class="station_con">
                <ul class="clearfix">
                  <li v-for="(item,index) in stationlist" :key="index">
                    <div class="img">
                      <img :src="item.url" alt />
                      <div class="play">
                        <div class="play_con">
                          <div class="play_btn"></div>
                        </div>
                      </div>
                    </div>
                    <div class="name">{{item.title}}</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 热门歌手 -->
            <div class="hotSinger">
              <div class="title">
                <div class="tit">
                  <span>热门</span>
                  <em>歌手</em>
                </div>
                <div class="list">
                  <ul>
                    <li
                      :class="{'con':index == num2}"
                      v-for="(item,index) in list2"
                      :key="index"
                      @mouseenter="num2 = index"
                    >{{item}}</li>
                  </ul>
                </div>
                <div class="more">
                  <span>更多</span>
                </div>
              </div>
              <div class="hotSinger_con">
                <div
                  v-for="(item,index) in hotSingerlist[num2].singers"
                  :key="index"
                  :class="['singer',{'mid':index != 0 && index != 1},{'big':index == 0 || index == 1}]"
                >
                  <div class="img">
                    <img :src="item.url" alt />
                    <div class="play"></div>
                    <div class="name">{{item.name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 双单三end -->
          <!-- 大图片 -->
          <div class="BIGimg size_10">
            <img src="../assets/home/big_img_03.jpg" alt />
          </div>
          <!-- 大图片end -->
          <!-- 友情链接 -->
          <div class="friendlink">
            <div class="title">
              <div class="tit">
                <span>友情</span>
                <em>链接</em>
              </div>
              <div class="more">
                <span>更多</span>
              </div>
            </div>
            <div class="friendlink_con">
              <ul class="clearfix">
                <li>爱美网</li>
                <li>汽车论坛</li>
                <li>IT之家</li>
                <li>iPhone游戏</li>
                <li>旅游攻略</li>
                <li>华为商城</li>
                <li>365音乐网</li>
                <li>软件下载</li>
                <li>漫漫看漫画</li>
                <li>手机游戏</li>
                <li>5sing原创音乐</li>
                <li>腾讯音乐人</li>
                <li>豌豆荚</li>
                <li>5sing众筹</li>
                <li>智能电视网</li>
              </ul>
            </div>
          </div>
          <!-- 友情链接end -->
        </div>
      </div>
    </div>
    <!-- 底部信息 -->
    <footerNav></footerNav>
    <!-- 底部信息end -->
  </div>
</template>
<script>
import Swiper from "swiper";
import footerNav from "../components/public/footerNav.vue";
export default {
  data() {
    return {
      num: 0,
      num2: 0,
      list: ["华语", "欧美", "韩国", "日本"],
      list2: ["华语", "欧美", "日韩"],
      changeNewsonglist: 1,
      // 精选歌单
      selectedlist: [
        {
          title: "我的潮玩新金曲，不潮不用花钱",
          name: "哈弗大狗",
          play: "10.5",
          url:
            "https://imgessl.kugou.com/custom/480/20200701/20200701110536763091.jpg"
        },
        {
          title: "每周推荐歌曲",
          name: "酷狗号歌单君",
          play: "112520.4",
          url:
            "https://imgessl.kugou.com/soft/collection/150/20200416/20200416163225901881.jpg"
        },
        {
          title: "国风大赏 · 2020评论破万热歌",
          name: "国风小编-千金大小姐M",
          play: "259.5",
          url:
            "https://imgessl.kugou.com/soft/collection/150/20200703/20200703210446662742.jpg"
        },
        {
          title: "高考加油！希望你最后的成绩能点亮整个夏天",
          name: "李呀",
          play: "105.2",
          url:
            "https://imgessl.kugou.com/soft/collection/150/20200706/20200706193654676955.jpg"
        },
        {
          title: "抖腿电音 · 2020上半年年度热门歌曲",
          name: "电疗中心",
          play: "313.5",
          url:
            "https://imgessl.kugou.com/soft/collection/150/20200701/20200701212319604003.jpg"
        }
      ],
      // 热门歌单
      hotlist: [
        {
          title: "酷狗飙升榜",
          url:
            "https://imgessl.kugou.com/v2/rank_cover/04b10ec0bb3d8dfdc2b6cf0d30e0ebd3.jpg_240x240.jpg",
          song: ["1 . 刘珂矣 - 闲庭絮", "2 . 黄静美 - 新欢渡旧爱"]
        },
        {
          title: "酷狗TOP500",
          url:
            "https://imgessl.kugou.com/v2/rank_cover/bc23a80bf7a2e9179460ed2b6e384849.jpg_240x240.jpg",
          song: ["1 . Ava Max - Salt", "2 . 海来阿木 - 你的万水千山"]
        },
        {
          title: "网络红歌榜",
          url:
            "https://imgessl.kugou.com/v2/rank_cover/47e76f9757c6bbb670630b4671961759.jpg_240x240.jpg",
          song: ["1 . 崔伟立 - 酒醉的蝴蝶", "2 . 马健涛 - 忘情牛肉面"]
        }
      ],
      // 新歌首发
      newsonglist: [
        {
          name: "华语",
          list: [] // 华语
        },
        {
          name: "欧美",
          list: [] // 欧美
        },
        {
          name: "韩国",
          list: [] // 韩国
        },
        {
          name: "日本",
          list: [] // 日本
        }
      ],
      // 推荐MV
      recomMvlist: [
        {
          title: "Up To Me",
          singer: "宋茜",
          url:
            "https://imgessl.kugou.com/mvhdpic/400/20200519/20200519130723708938.jpg"
        },
        {
          title: "",
          singer: "《酷爱大牌》第96期：Dua Lipa啪姐独家专访",
          url:
            "https://imgessl.kugou.com/commendpic/20200519/20200519102344702905.jpg"
        },
        {
          title: "深度对话邓紫棋：我已经浴火重生成凤凰",
          singer: "由你音乐榜、G.E.M. 邓紫棋",
          url:
            "https://imgessl.kugou.com/commendpic/20200506/20200506135956371787.jpg"
        }
      ],
      // 热门电台
      stationlist: [
        {
          title: "KTV必点曲",
          url: "https://staticssl.kugou.com/public/root/images/radio_1.jpg"
        },
        {
          title: "中文DJ",
          url: "https://staticssl.kugou.com/public/root//images/radio_2.jpg"
        },
        {
          title: "酷狗热歌",
          url: "https://staticssl.kugou.com/public/root//images/radio_3.jpg"
        },
        {
          title: "网络红歌",
          url: "https://staticssl.kugou.com/public/root//images/radio_4.jpg"
        },
        {
          title: "经典",
          url: "https://staticssl.kugou.com/public/root//images/radio_5.jpg"
        },
        {
          title: "老情歌",
          url: "https://staticssl.kugou.com/public/root//images/radio_6.jpg"
        },
        {
          title: "新歌",
          url: "https://staticssl.kugou.com/public/root//images/radio_7.jpg"
        },
        {
          title: "动漫",
          url: "https://staticssl.kugou.com/public/root//images/radio_8.jpg"
        },
        {
          title: "轻音乐",
          url: "https://staticssl.kugou.com/public/root//images/radio_9.jpg"
        },
        {
          title: "最爱成名曲",
          url: "https://staticssl.kugou.com/public/root//images/radio_10.jpg"
        }
      ],
      // 热门歌手
      hotSingerlist: [
        {
          title: "华语",
          singers: [
            {
              name: "周杰伦",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20180515/20180515002522714.jpg"
            },
            {
              name: "周深",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20190708/20190708101121281.jpg"
            },
            {
              name: "刘德华",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20180507/20180507120242140.jpg"
            },
            {
              name: "小阿枫",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20200519/20200519110010318777.jpg"
            },
            {
              name: "花姐",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20171128/20171128003758522.jpg"
            }
          ]
        },
        {
          title: "欧美",
          singers: [
            {
              name: "Michael Jackson",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20140409/20140409145904650908.jpg"
            },
            {
              name: "Alan Walker",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20191030/20191030151254106.jpg"
            },
            {
              name: "Taylor Swift",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20200506/20200506140943118.jpg"
            },
            {
              name: "Marshmello",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20200303/20200303141702540.jpg"
            },
            {
              name: "Lollipop",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20180530/20180530115419467.jpg"
            }
          ]
        },
        {
          title: "日韩",
          singers: [
            {
              name: "BLACKPINK",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20190626/20190626102829897.jpg"
            },
            {
              name: "BIGBANG",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20170704/20170704172442730.jpg"
            },
            {
              name: "EXO",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20191127/20191127135154508.jpg"
            },
            {
              name: "G-DRAGON",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20161229/20161229183012269.jpg"
            },
            {
              name: "IU",
              url:
                "https://imgessl.kugou.com/uploadpic/softhead/240/20191104/20191104115828263.jpg"
            }
          ]
        }
      ]
    };
  },
  components: {
    footerNav
  },
  methods: {
    // 1.0 获取新歌首发歌曲数据
    getNewSongsFun(listnum, callback) {
      this.$axios
        .get("http://music.kele8.cn/top/list?idx=" + listnum)
        .then(res => {
          callback(res);
        });
    },
    // 1.1 点击播放当前音乐
    playnowsongFun(index1, index2) {
      var id = this.newsonglist[index1].list[index2].id;
      var ids = this.$store.state.play.playsongidlist;

      if (!ids.includes(id)) {
        ids.push(id);
      }
      // this.$store.state.play.playnowsongid = id;

      this.idlist = this.$store.state.play.playsongidlist;

      // 将id列表数据获取
      this.idlist.forEach(item => {
        if (
          this.$store.state.play.songlist.findIndex(
            value => value.id == item
          ) == -1
        ) {
          this.getsongdetailFun(item, res => {
            this.$store.state.play.songlist.unshift({
              id: item,
              name: res.data.songs[0].al.name,
              singer: res.data.songs[0].ar[0].name,
              time: res.data.songs[0].dt,
              img: res.data.songs[0].al.picUrl
            });
          });
        }
      });

      this.$router.push("/play");
    },
    // 1.2 点击播放全部获取当前所有id
    playallsongFun(index1) {
      var ids = this.$store.state.play.playsongidlist;
      this.newsonglist[index1].list.forEach(item => {
        if (!ids.includes(item.id)) {
          ids.push(item.id);
        }
      });

      this.idlist = this.$store.state.play.playsongidlist;

      // 将id列表数据获取
      this.idlist.forEach(item => {
        if (
          this.$store.state.play.songlist.findIndex(
            value => value.id == item
          ) == -1
        ) {
          this.getsongdetailFun(item, res => {
            this.$store.state.play.songlist.push({
              id: item,
              name: res.data.songs[0].al.name,
              singer: res.data.songs[0].ar[0].name,
              time: res.data.songs[0].dt,
              img: res.data.songs[0].al.picUrl
            });
          });
        }
      });

      this.$router.push("/play");
    },
    // 14.0 获取歌曲详情
    getsongdetailFun(id, callback) {
      this.$axios
        .get("http://music.kele8.cn/song/detail?ids=" + id)
        .then(res => {
          callback(res);
        });
    },
    // 15 添加喜欢
    addlovelist(index1,index2){
      var id = this.newsonglist[index1].list[index2].id;
      var ids = this.$store.state.user.lovelist;

      if (!ids.includes(id)) {
        ids.push(id);
      }

      // 将id列表数据获取
      ids.forEach(item => {
        if (
          this.$store.state.user.lovesonginfolist.findIndex(
            value => value.id == item
          ) == -1
        ) {
          this.getsongdetailFun(item, res => {
            this.$store.state.user.lovesonginfolist.push({
              id: item,
              name: res.data.songs[0].al.name,
              singer: res.data.songs[0].ar[0].name,
              time: res.data.songs[0].dt,
              img: res.data.songs[0].al.picUrl
            });
          });
        }
      });

      console.log(this.$store.state.user.lovesonginfolist);
      

    }
  },
  created() {
    // 1.0 获取新歌首发歌曲数据
    // 1.1 获取华语数据
    this.getNewSongsFun(0, res => {
      res.data.playlist.tracks.forEach((item, index) => {
        if (index < 24) {
          this.newsonglist[0].list.push(item);
        }
      });
      // console.log(this.newsonglist[0].list);
    });
    // 1.2 获取欧美数据
    this.getNewSongsFun(6, res => {
      res.data.playlist.tracks.forEach((item, index) => {
        if (index < 24) {
          this.newsonglist[1].list.push(item);
        }
      });
    });
    // 1.3 获取韩国数据
    this.getNewSongsFun(11, res => {
      res.data.playlist.tracks.forEach((item, index) => {
        if (index < 24) {
          this.newsonglist[2].list.push(item);
        }
      });
    });
    // 1.4 获取日本数据
    this.getNewSongsFun(10, res => {
      res.data.playlist.tracks.forEach((item, index) => {
        if (index < 24) {
          this.newsonglist[3].list.push(item);
        }
      });
    });
  },
  mounted() {
    new Swiper(".solidecontainer", {
      cssMode: true,
      loop: true,
      autoplay: {
        delay: 5000
      },
      navigation: {
        nextEl: ".solidebuttonnext",
        prevEl: ".solidebuttonprev"
      },
      pagination: {
        el: ".solidepagination"
      },
      mousewheel: true,
      keyboard: true
    });
  }
};
</script>

<style lang="scss" scoped>
.Home {
  // 轮播图
  .solide {
    position: relative;
    width: 100%;
    height: 445px;
    .swiper-slide {
      height: 445px;
    }
    .solidebuttonnext,
    .solidebuttonprev {
      background: rgba(0, 0, 0, 0.3);
      width: 60px;
      height: 120px;
      color: #ffffff;
    }
    .mybullet {
    }
  }
  .content {
    width: 100%;
    .content_con {
      width: 1000px;
      margin: 0 auto;
      padding-top: 40px;
      // -------公共样式---------
      // // 标题
      .title {
        height: 30px;
        display: flex;
        padding-bottom: 30px;
        .tit {
          font-size: 28px;
          line-height: 30px;
          font-weight: 100;
          color: #555555;
          span {
            color: #009af3;
          }
          em {
            font-style: normal;
          }
        }
        .more {
          line-height: 30px;
          margin-left: auto;
          span {
            font-size: 13px;
            color: #999999;
            cursor: pointer;
            &:hover {
              color: #009af3;
            }
          }
        }
      }
      // -------公共样式---------
      // 双单一
      .doublelist {
        // 精选歌单
        .selected {
          width: 655px;
          float: left;
          .selected_con {
            width: 100%;
            .select {
              float: left;
              cursor: pointer;
              .img {
                position: relative;
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                }
                .playnum {
                  font-size: 13px;
                  color: #ffffff;
                  width: 152px;
                  padding-right: 8px;
                  height: 30px;
                  line-height: 30px;
                  text-align: right;
                  background: url(../assets/home/cptTBg.png);
                  position: absolute;
                  top: 0;
                  right: 0;
                  i {
                    vertical-align: middle;
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background: url(../assets/headerNav/sprite.png) no-repeat 0 -195px;
                    margin-right: 5px;
                  }
                }
                .details {
                  height: 50px;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  background: rgba(0, 0, 0, 0.5);
                  width: 100%;
                  .details_con {
                    padding: 6px 8px;
                    height: 38px;
                    font-size: 14px;
                    line-height: 18px;
                    .tit {
                      color: #ffffff;
                      margin-right: 36px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    .name {
                      margin-right: 36px;
                      color: #cfcfcf;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }
                .play {
                  width: 100%;
                  height: 100%;
                  background: rgba(0, 0, 0, 0.3);
                  position: absolute;
                  top: 0;
                  left: 0;
                  display: none;
                  .play_con {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    .play_btn {
                      width: 36px;
                      height: 36px;
                      background: url(../assets/headerNav/sprite.png) no-repeat
                        0 -401px;
                      position: absolute;
                      right: 8px;
                      bottom: 6px;
                      &:hover {
                        background-position: 0 -360px;
                      }
                    }
                  }
                }
                &:hover {
                  .play {
                    display: block;
                  }
                }
              }
            }
            .big {
              width: 325px;
              height: 325px;
            }
            .mid {
              width: 160px;
              height: 160px;
              margin-left: 5px;
              margin-bottom: 5px;
            }
          }
        }
        // 热门歌单
        .hot {
          float: right;
          width: 320px;
          .hot_content {
            .ranklist {
              cursor: pointer;
              display: flex;
              margin-bottom: 15px;
              .img {
                width: 98px;
                height: 98px;
                position: relative;
                float: left;
                img {
                  width: 100%;
                  height: 100%;
                }
                .play {
                  width: 100%;
                  height: 100%;
                  background: rgba(0, 0, 0, 0.3);
                  position: absolute;
                  top: 0;
                  left: 0;

                  display: none;
                  .play_con {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    .play_btn {
                      width: 36px;
                      height: 36px;
                      background: url(../assets/headerNav/sprite.png) no-repeat
                        0 -401px;
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      margin: auto;
                      &:hover {
                        background-position: 0 -360px;
                      }
                    }
                  }
                }
              }
              .list {
                float: left;
                position: relative;
                flex: 1;
                background-color: #f6f6f6;
                dl {
                  padding: 13px 10px;
                  font-size: 14px;
                  dt {
                    color: #333333;
                    font-weight: bold;
                    height: 24px;
                    line-height: 24px;
                  }
                  dd {
                    color: #555555;
                    height: 24px;
                    line-height: 24px;
                  }
                }
                .to {
                  width: 7px;
                  height: 14px;
                  background: url(../assets/headerNav/sprite.png) no-repeat 0 -321px;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  margin: auto 0;
                  right: 10px;
                }
              }
              &:hover {
                .img {
                  .play {
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
      // 大图片
      .BIGimg {
        width: 100%;
        margin-top: 40px;
        img {
          width: 100%;
          height: auto;
        }
        &.size_10 {
          margin-top: 10px;
        }
      }
      // 双单二
      .doublelistsecond {
        margin-top: 40px;
        // 新歌首发
        .newsongs {
          width: 655px;
          float: left;
          .title {
            padding-bottom: 20px;
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 10px;
            .list {
              display: flex;
              align-items: center;
              height: 30px;
              margin-left: 25px;
              ul {
                li {
                  font-size: 14px;
                  color: #000000;
                  float: left;
                  margin-right: 20px;
                  cursor: pointer;
                  &.con {
                    color: #009af3;
                  }
                }
              }
            }
            .play_all {
              padding: 5px 10px;
              border: 1px solid #dbdbdb;
              font-size: 13px;
              color: #555555;
              border-radius: 3px;
              cursor: pointer;
              margin-left: auto;
              span {
                display: inline-block;
                width: 12px;
                height: 14px;
                background: url(../assets/headerNav/sprite.png) no-repeat 0 -303px;
                vertical-align: middle;
              }
              &:hover {
                color: #009af3;
                border-color: #009af3;
                span {
                  background-position: 0 -341px;
                }
              }
            }
          }
          .newsongs_con {
            .songslist {
              ul {
                li {
                  font-size: 13px;
                  color: #333333;
                  padding: 0 10px;
                  height: 35px;
                  line-height: 35px;
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  .songNamefle {
                  }
                  .songTips {
                    width: 21px;
                    height: 12px;
                    display: inline-block;
                    background: url(../assets/home/first.png) no-repeat center
                      center;
                    margin-left: 10px;
                    margin-right: auto;
                  }
                  .songBtns {
                    margin-left: auto;
                    height: 35px;
                    align-items: center;
                    display: none;
                    .play_btn,
                    .down_btn {
                      display: inline-block;
                      width: 14px;
                      height: 14px;
                      background: url(../assets/home/icon_splice.png) no-repeat;
                      margin-right: 10px;
                    }
                    .play_btn {
                      background-position: 0 0;
                      &:hover {
                        background-position: 0 -30px;
                      }
                    }
                    .down_btn {
                      i {
                        font-weight: bold;
                        color: #999999;
                      }
                      background: none;
                      &:hover {
                        i {
                          color: #68A9EC;
                        }
                      }
                    }
                  }
                  &:hover {
                    background: #f5f8fb;
                    color: #009af3;
                    .songTips {
                      display: none;
                    }
                    .songBtns {
                      display: block;
                    }
                  }
                }
              }
            }
            .page {
              display: flex;
              height: 20px;
              align-items: center;
              justify-content: center;
              margin-top: 10px;
              .prev,
              .next {
                width: 6px;
                height: 9px;
                background: url(../assets/home/pageChange.jpg) no-repeat;
                cursor: pointer;
              }
              .prev {
                background-position: 0 -14px;
              }
              .pagenum {
                font-size: 12px;
                color: #8d8d8d;
                padding: 0 15px;
              }
              .next {
                background-position: -13px -14px;
              }
            }
          }
        }
        // 推荐MV
        .recomMv {
          width: 320px;
          float: right;
          .title {
            padding-bottom: 20px;
          }
          .recomMv_con {
            width: 110%;
            .MV {
              position: relative;
              cursor: pointer;
              float: left;
              .img {
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .details {
                height: 50px;
                position: absolute;
                left: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                width: 100%;
                .details_con {
                  padding: 6px 8px;
                  height: 38px;
                  font-size: 14px;
                  line-height: 18px;
                  .tit {
                    color: #ffffff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .name {
                    color: #cfcfcf;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
              }
              .play {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
                position: absolute;
                top: 0;
                left: 0;
                display: none;
                .play_con {
                  width: 100%;
                  height: 100%;
                  position: relative;
                  .play_btn {
                    width: 48px;
                    height: 48px;
                    background: url(../assets/headerNav/sprite.png) no-repeat 0 -541px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    &:hover {
                      background-position: 0 -488px;
                    }
                  }
                }
              }
              &:hover {
                .play {
                  display: block;
                }
              }
            }
            .big {
              width: 320px;
              height: 175px;
            }
            .mid {
              width: 154px;
              height: 125px;
              margin-right: 12px;
              margin-top: 12px;
              .img {
                height: 84px;
              }
              .details {
                position: static;
                background-color: #ffffff;
                height: 43px;
                .details_con {
                  padding: 5px 0 0 0;
                  .tit {
                    color: #444444;
                  }
                  .name {
                    color: #888888;
                    font-size: 12px;
                  }
                }
              }
              .play {
                height: 84px;
              }
              &:hover {
                .details {
                  .tit {
                    color: #009af3;
                  }
                }
              }
            }
          }
        }
      }
      // 双单三
      .doublelisthird {
        margin-top: 40px;
        // 热门电台
        .station {
          width: 655px;
          float: left;
          .station_con {
            ul {
              width: 110%;
              li {
                cursor: pointer;
                width: 100px;
                float: left;
                margin-right: 37px;
                margin-bottom: 25px;
                .img {
                  width: 100px;
                  height: 100px;
                  position: relative;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                  .play {
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.3);
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: none;
                    border-radius: 50%;
                    .play_con {
                      width: 100%;
                      height: 100%;
                      position: relative;
                      .play_btn {
                        width: 42px;
                        height: 42px;
                        background: url(../assets/headerNav/sprite.png)
                          no-repeat 0 -442px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        margin: auto;
                      }
                    }
                  }
                }
                .name {
                  width: 100%;
                  height: 20px;
                  font-size: 14px;
                  color: #333333;
                  text-align: center;
                  line-height: 20px;
                  margin-top: 10px;
                }
                &:hover {
                  .play {
                    display: block;
                  }
                  .name {
                    color: #009af3;
                  }
                }
              }
            }
          }
        }
        // 热门歌手
        .hotSinger {
          width: 325px;
          float: right;
          .title {
            .list {
              margin-left: auto;
              ul {
                display: flex;
                height: 30px;
                align-items: center;
                li {
                  font-size: 14px;
                  color: #000000;
                  cursor: pointer;
                  margin-right: 20px;
                  &.con {
                    color: #009af3;
                  }
                }
              }
            }
            .more {
              span {
                font-size: 14px;
              }
              margin-left: 0;
            }
          }
          .hotSinger_con {
            width: 110%;
            .singer {
              cursor: pointer;
              margin-right: 5px;
              margin-bottom: 5px;
              float: left;
              .img {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                  width: 100%;
                  height: 100%;
                }
                .play {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  display: none;
                  top: 0;
                  left: 0;
                  z-index: 10;
                  background: rgba(0, 0, 0, 0.3);
                }
                .name {
                  height: 40px;
                  line-height: 40px;
                  width: 100%;
                  color: #ffffff;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  z-index: 20;
                  font-size: 14px;
                  text-indent: 1em;
                }
              }

              &.big {
                width: 160px;
                height: 160px;
              }
              &.mid {
                width: 105px;
                height: 105px;
              }
              &:hover {
                .play {
                  display: block;
                }
              }
            }
          }
        }
      }
      // 友情链接
      .friendlink {
        margin-top: 30px;
        padding-bottom: 20px;
        .friendlink_con {
          ul {
            li {
              font-size: 13px;
              float: left;
              color: #555555;
              width: 125px;
              height: 24px;
              line-height: 24px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>