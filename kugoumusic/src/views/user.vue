<template>
  <div>
    <div class="User">
      <div class="user_con">
        <div class="user_box">
          <div class="left">
            <div class="headphoto">
              <img src="../assets/headerNav/me.jpg" alt />
            </div>
            <div class="name">{{$store.state.login.userinfo.username}}</div>
          </div>
          <div class="right">
            <div class="right_con">
              <div class="top">
                <span>我的酷狗</span>
              </div>
              <div class="myinfo">
                <div class="tabheader">
                  <ul>
                    <li
                      :class="{'con':index == num}"
                      v-for="(item,index) in tablist"
                      :key="index"
                      @click="num=index"
                    >{{item}}</li>
                  </ul>
                </div>
                <div class="tabcontent">
                  <div class="play_content">
                    <div class="list_con">
                      <ul>
                        <!--  class="con" -->
                        <li v-for="(item,index) in lovesonginfolist" :key="index">
                          <span>{{index+1}}</span>
                          <div class="songname">
                            <p>{{item.name}}</p>
                            <div class="song_btns">
                              <em class="song_down"></em>
                              <b class="song_share" @click="playsong(index)"></b>
                              <em class="song_del" @click="deltesongFun(index)"></em>
                            </div>
                          </div>
                          <div class="songsinger">{{item.singer}}</div>
                          <div class="songtime">{{parseInt(item.time / 1000) | dataFormat}}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from "../components/public/footerNav.vue";
export default {
  data() {
    return {
      num: 0,
      tablist: ["我的喜欢的音乐"],
      lovesonginfolist: []
    };
  },
  methods: {
    deltesongFun(index) {
      this.$store.state.user.lovesonginfolist.splice(index, 1);
    },
    playsong(index) {
      var id = this.lovesonginfolist[index].id;
      var list = this.$store.state.play.songlist;
      // 将id列表数据获取
    console.log(list,id);
    if(list.findIndex(item => (item.id === id)) === -1) {
      this.$store.state.play.songlist.unshift(this.lovesonginfolist[index]);
    }
      this.$router.push("/play");
      
    }
  },
  created() {
    this.lovesonginfolist = Object.assign(
      this.$store.state.user.lovesonginfolist
    );
  },
  filters: {
    dataFormat(dataString) {
      var dd = dataString;
      // 分秒
      var mm = parseInt(dd / 60);
      var ss = parseInt(dd % 60);

      // mm < 10 ? "0" + mm : mm;
      // ss < 10 ? "0" + ss : ss;
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }

      return `${mm}:${ss}`;
    }
  },
  components: {
    footerNav
  }
};
</script>
<style lang="scss" scoped>
.User {
  width: 100%;
  position: relative;
  height: 592px;
  background-color: #40444b;
  .user_con {
    padding: 30px 0 50px;
    width: 960px;
    height: 512px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    .user_box {
      width: 100%;
      height: 100%;
      background-color: #2f343b;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      display: flex;
      .left {
        width: 200px;
        height: 100%;
        border-right: 1px solid #25292f;
        .headphoto {
          width: 170px;
          height: 170px;
          padding: 7px;
          border-radius: 5px;
          margin-top: 40px;
          margin-left: 8px;
          img {
            width: 170px;
            height: 170px;
          }
        }
        .name {
          width: 200px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #007ac1;
          font-weight: bold;
        }
      }
      .right {
        flex: 1;
        height: 100%;
        .right_con {
          padding: 10px;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          .top {
            width: 100%;
            height: 24px;
            span {
              line-height: 24px;
              font-size: 20px;
              color: #b1b3b9;
            }
          }
          .myinfo {
            margin-top: 14px;
            .tabheader {
              ul {
                display: flex;
                justify-content: space-between;
                li {
                  width: 49%;
                  height: 24px;
                  line-height: 24px;
                  text-align: center;
                  font-size: 14px;
                  border: 1px solid transparent;
                  border-radius: 3px;
                  color: #b1b3b9;
                  cursor: pointer;
                  &.con {
                    border: 1px solid #999999;
                  }
                }
              }
            }
            .tabcontent {
              padding-top: 20px;
              ::-webkit-scrollbar {
                width: 8px;
                height: 0;
              }
              ::-webkit-scrollbar-track {
                background-color: transparent;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #595d62;
                border-radius: 4px;
              }
              .play_content {
                width: 100%;
                height: 400px;
                overflow: scroll;
                .list_con {
                  ul {
                    li {
                      width: 730px;
                      height: 39px;
                      color: #d3d3d3;
                      line-height: 39px;
                      display: flex;
                      font-size: 13px;
                      color: #77777e;
                      border-bottom: 1px solid #42484e;
                      cursor: pointer;
                      span {
                        display: block;
                        width: 30px;
                        height: 39px;
                        text-align: center;
                        line-height: 39px;
                      }
                      .songname {
                        // width: 254px;
                        flex: 1;
                        height: 39px;
                        margin-left: 16px;
                        display: flex;
                        p {
                          color: #d3d3d3;
                          flex: 1;
                          height: 39px;
                          line-height: 39px;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          white-space: nowrap;
                        }
                        .song_btns {
                          display: none;
                          align-items: center;
                          width: 95px;
                          height: 39px;
                          margin-left: auto;
                          em {
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            background: url(../assets/play/btn.png) no-repeat;
                            margin-right: 15px;
                          }
                          .song_down {
                            background-position: -240px 0;
                            &:hover {
                              background-position: -256px 0;
                            }
                          }
                          .song_share {
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            margin-right: 5px;
                            background: url(../assets/home/icon_splice.png)
                              no-repeat 0 0;
                            &:hover {
                              background-position: 0 -30px;
                            }
                          }
                          .song_del {
                            background-position: -240px -64px;
                            &:hover {
                              background-position: -256px -64px;
                            }
                          }
                        }
                      }
                      .songsinger {
                        width: 120px;
                        height: 39px;
                        line-height: 39px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                      .songtime {
                        width: 90px;
                        height: 39px;
                        line-height: 39px;
                      }
                      &.con {
                        .songname {
                          p {
                            color: #19b5f0;
                          }
                        }
                        background-color: #40444b;
                      }
                      &:hover {
                        background-color: #40444b;
                        .songname {
                          .song_btns {
                            display: flex;
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
      }
    }
  }
}
</style>