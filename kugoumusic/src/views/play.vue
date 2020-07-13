<template>
  <div>
    <div class="Play">
      <!--  style="background:url(../assets/play/play_img.jpg)" -->
      <div class="play_con">
        <div class="songs_face">
          <div class="img">
            <img :src="songlist[playnewsongIndex].img" alt />
          </div>
        </div>
        <div class="songinfo">
          <div class="songName">
            {{songlist[playnewsongIndex].name}}
            <span></span>
          </div>
          <div class="songSinger">
            <!-- <p class="album">
              <span>专辑：</span>
              <em>百结愁肠HIFI珍藏限量版</em>
            </p>-->
            <p class="singer">
              <span>歌手：</span>
              <em>{{songlist[playnewsongIndex].singer}}</em>
            </p>
          </div>
          <div class="songlyric">
            <div class="lyric" ref="lyricUL">
              <p
                v-for="(item, i) in lyricsObjArr"
                :key="item.uid"
                :data-index="i"
                ref="lyric"
                :style="{color: lyricIndex === i ? '#0C8ED9' : '#ded9d9'}"
              >{{item.lyric}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="play_btns">
        <div class="play_btns_con">
          <!-- 播放按钮 -->
          <div class="btns">
            <div class="prev" @click="prevsongFun()"></div>
            <div
              :class="['playORpasue', {'con':playORpauseFlag}]"
              @click="playORpauseFlag=!playORpauseFlag,playORpauseFun(),getmusicalltime()"
            ></div>
            <div class="next" @click="nextsongFun()"></div>
          </div>
          <!-- 歌曲页面 -->
          <div class="img">
            <img src="../assets/play/play_img.jpg" alt />
          </div>
          <!-- 歌曲进度 -->
          <div class="progress">
            <div class="top">
              <div class="songname">{{songlist[playnewsongIndex].name}}</div>
              <div class="songtime">
                <span>{{musicnowtimeFlag | dataFormat}}</span>
                <span>/</span>
                <span>{{musicalltimeFlag | dataFormat}}</span>
              </div>
            </div>
            <div class="line">
              <input type="range" min="0" max="100" ref="progress" v-model="progressWidth" />
              <audio :src="songnowUrl" ref="myaudio" autoplay></audio>
            </div>
          </div>
          <!-- 操作按钮 -->
          <div class="operation">
            <!-- 音量 -->
            <div class="volume">
              <div class="volumenum">
                <div class="volumenum_con">
                  <input type="range" v-model="volumeFlag" ref="myvolume" />
                </div>
              </div>
            </div>
            <!-- 播放方式 -->
            <div class="change">
              <i class="one" v-show="changestyeList[0].btn" @click="showstyleFlag=!showstyleFlag"></i>
              <i class="two" v-show="changestyeList[1].btn" @click="showstyleFlag=!showstyleFlag"></i>
              <i class="three" v-show="changestyeList[2].btn" @click="showstyleFlag=!showstyleFlag"></i>
              <div class="changestye" v-show="showstyleFlag">
                <dl class="changestyle_con">
                  <dd
                    :class="{'con':changestyeFlag == index}"
                    v-for="(item,index) in changestyeList"
                    :key="index"
                    @click="changestyeFun(index)"
                  >
                    <span></span>
                    {{item.style}}
                  </dd>
                </dl>
              </div>
            </div>
            <!-- 下载 -->
            <div class="down"></div>
            <!-- 分享 -->
            <div class="share"></div>
            <!-- 播放列表按钮 -->
            <div
              class="playlist"
              @click="showplaylistonFlag=!showplaylistonFlag"
            >{{songlist.length}}</div>
            <!-- 播放列表 -->
            <div class="playlist_con" v-show="showplaylistonFlag">
              <div class="play_header">
                <div class="list_num">播放队列/{{songlist.length}}</div>
                <div class="list_btns">
                  <span class="clear"></span>
                  <i class="line"></i>
                  <span class="del" @click="showplaylistonFlag=false"></span>
                </div>
              </div>
              <div class="play_content">
                <div class="list_con">
                  <ul>
                    <!--  class="con" -->
                    <li
                      v-for="(item,index) in songlist"
                      :key="index"
                      :class="{'con':index == playnewsongIndex}"
                    >
                      <span>{{index+1}}</span>
                      <div class="songname">
                        <p @click="playnewsongFun(index)">{{item.name}}</p>
                        <div class="song_btns">
                          <em class="song_down"></em>
                          <em class="song_share iconfont icon-xihuan"></em>
                          <em class="song_del" @click="deltesongFun(index)"></em>
                        </div>
                      </div>
                      <div class="songsinger">{{item.singer}}</div>
                      <div class="songtime">{{parseInt(item.time/1000) | dataFormat}}</div>
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
</template>
<script>
export default {
  data() {
    return {
      changestyeList: [
        // 播放方式数据
        { style: "列表循环", btn: true },
        { style: "单曲循环", btn: false },
        { style: "随机播放", btn: false }
      ],
      changestyeFlag: 0, // 切换播放方式 切换面板
      showstyleFlag: false, // 切换播放方式  显示按钮
      showplaylistonFlag: false, // 显示隐藏播放列表
      playORpauseFlag: false, // 播放 暂停
      myaudioDom: null, // 音频标签
      volumeFlag: 50, // 音量，默认为50（一半）
      musicalltimeFlag: 0, // 音频总时长
      musicnowtimeFlag: 0, // 音频当前时长
      progressWidth: 0, // 音频进度条长度
      songlist: null, // 播放歌单
      playnewsongIndex: 0, // 播放新歌曲索引值
      idlist: [], // 歌曲id列表
      songnowinfo: null, // 当前播放的音乐
      songnowUrl: null, // 歌曲播放当前地址
      lyricsObjArr: [], // 歌词数组
      lyricIndex: 0 // 歌词索引值
    };
  },
  methods: {
    // 切换播放方式
    changestyeFun(index) {
      this.changestyeFlag = index;
      this.showstyleFlag = false;
      this.changestyeList.forEach(item => {
        item.btn = false;
      });
      this.changestyeList[index].btn = true;
    },
    // 点击页面非列表位置隐藏播放列表
    hiddenplaylistFun() {
      document.onclick = function(e) {
        // console.log(e.target.className);
        if (e.target.className != "playlist_con") {
          // console.log("aa");
        }
      };
    },
    // -----------音乐播放操作方法集合---------------
    // 1.0 播放与暂停音乐
    playORpauseFun() {
      if (!this.playORpauseFlag) {
        this.myaudioDom.pause();
      } else {
        this.getmusicnowtime();
        this.myaudioDom.play();
      }
    },
    // 3.0 改变音量的颜色
    changevolumecolorFun() {
      this.$refs.myvolume.style.backgroundImage = `linear-gradient(to right,#19B5F0 ${this.volumeFlag}%,#51555C ${this.volumeFlag}%`;
    },
    // 4.0 获取歌曲总时长  -------------------------------------- 还没完成  ---------在挂载钩子中调用无效-----
    getmusicalltime() {
      this.musicalltimeFlag = parseInt(
        this.songlist[this.playnewsongIndex].time / 1000
      );
    },
    // 5.0 获取歌曲当前位置
    getmusicnowtime() {
      this.myaudioDom.ontimeupdate = () => {
        // console.log(this.myaudioDom.currentTime);
        // 匹配歌词 歌词滚动

        // console.log("aa");

        for (let i = 0; i < this.lyricsObjArr.length; i++) {
          if (
            this.myaudioDom.currentTime > parseInt(this.lyricsObjArr[i].time)
          ) {
            const index = this.$refs.lyric[i].dataset.index;
            if (i === parseInt(index)) {
              this.lyricIndex = i;
              this.$refs.lyricUL.style.transform = `translateY(${170 -
                30 * (i + 1)}px)`;
            }
          }
        }
        this.musicnowtimeFlag = this.myaudioDom.currentTime;

        // console.log(this.musicnowtimeFlag);

        this.changeprogresscolorFun();
        this.songendnextFun();
      };
    },
    // 6.0 改变音乐进度条颜色
    changeprogresscolorFun() {
      // console.log(this.musicnowtimeFlag,this.musicalltimeFlag);

      this.progressWidth = parseInt(
        (this.musicnowtimeFlag / this.musicalltimeFlag) * 100
      );
      this.$refs.progress.style.backgroundImage = `linear-gradient(to right,#19B5F0 ${parseInt(
        this.progressWidth
      )}%,#51555C ${this.progressWidth}%`;
    },
    // 7.0 通过拖动进度条设置播放当前位置
    changemusicnowtimeFun() {
      this.$refs.progress.onmousedown = () => {
        document.onmousemove = () => {
          this.changeprogresscolorFun();
          document.onmouseup = () => {
            this.myaudioDom.currentTime =
              (this.progressWidth / 100) * this.musicalltimeFlag;
            document.onmousemove = null;
          };
        };
      };
    },
    // 8.0 播放列表点击新歌曲
    playnewsongFun(index) {
      this.playnewsongIndex = index;
      var id = this.songlist[this.playnewsongIndex].id;
      // 获取歌曲
      this.getsongurlFun(id, res => {
        this.songnowUrl = res.data.data[0].url;
      });

      this.myaudioDom = this.$el.querySelector("audio");

      // console.log(this.myaudioDom);

      this.myaudioDom.addEventListener("canplay", () => {
        // console.log("aaa");

        this.progressWidth = 0; // 设置进度条值为0
        this.getmusicalltime(); // 获取总时长
        this.getmusicnowtime(); // 获取当前时长
        this.playORpauseFlag = true;
        this.playORpauseFun();
      });

      // // 获取歌词
      this.getsonglyricFun(id, res => {
        let lyric = res.data.lrc.lyric;
        const regNewLine = /\n/; // 获取每一行歌词的数组
        const lineArr = lyric.split(regNewLine);
        const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/; // 匹配中括号里面的时间
        lineArr.forEach(item => {
          if (item === "") return;
          const obj = {};
          const time = item.match(regTime);
          obj.lyric =
            item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
          obj.time = time
            ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
            : 0;
          obj.uid = Math.random()
            .toString()
            .slice(-6);
          if (obj.lyric === "") {
            console.log("这一行没有歌词");
          } else {
            this.lyricsObjArr.push(obj);
          }
        });

        // console.log(this.lyricsObjArr);
      });
    },
    // 转换时间的函数
    formatLyricTime(time) {
      // 格式化歌词的时间 转换成 sss:ms
      const regMin = /.*:/;
      const regSec = /:.*\./;
      const regMs = /\./;

      const min = parseInt(time.match(regMin)[0].slice(0, 2));
      let sec = parseInt(time.match(regSec)[0].slice(1, 3));
      const ms = time.slice(
        time.match(regMs).index + 1,
        time.match(regMs).index + 3
      );
      if (min !== 0) {
        sec += min * 60;
      }
      return Number(sec + "." + ms);
    },
    // 9.0 播放下一曲
    nextsongFun() {
      if (this.playnewsongIndex >= this.songlist.length - 1) {
        this.playnewsongIndex = 0;
      } else {
        this.playnewsongIndex += 1;
      }
      var id = this.songlist[this.playnewsongIndex].id;

      this.getsongurlFun(id, res => {
        this.songnowUrl = res.data.data[0].url;
      });

      this.myaudioDom.addEventListener("canplay", () => {
        this.progressWidth = 0; // 设置进度条值为0
        this.getmusicalltime(); // 获取总时长
        this.getmusicnowtime(); // 获取当前时长
        this.playORpauseFlag = true;
        this.playORpauseFun();
      });

      // // 获取歌词
      this.getsonglyricFun(id, res => {
        let lyric = res.data.lrc.lyric;
        const regNewLine = /\n/; // 获取每一行歌词的数组
        const lineArr = lyric.split(regNewLine);
        const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/; // 匹配中括号里面的时间
        lineArr.forEach(item => {
          if (item === "") return;
          const obj = {};
          const time = item.match(regTime);
          obj.lyric =
            item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
          obj.time = time
            ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
            : 0;
          obj.uid = Math.random()
            .toString()
            .slice(-6);
          if (obj.lyric === "") {
            console.log("这一行没有歌词");
          } else {
            this.lyricsObjArr.push(obj);
          }
        });

        // console.log(this.lyricsObjArr);
      });
    },
    // 10.0 播放上一曲
    prevsongFun() {
      if (this.playnewsongIndex <= 0) {
        this.playnewsongIndex = this.songlist.length - 1;
      } else {
        this.playnewsongIndex -= 1;
      }
      var id = this.songlist[this.playnewsongIndex].id;

      this.getsongurlFun(id, res => {
        this.songnowUrl = res.data.data[0].url;
      });

      this.myaudioDom.addEventListener("canplay", () => {
        this.progressWidth = 0; // 设置进度条值为0
        this.getmusicalltime(); // 获取总时长
        this.getmusicnowtime();
        this.playORpauseFlag = true;
        this.playORpauseFun();
      });

      // // 获取歌词
      this.getsonglyricFun(id, res => {
        let lyric = res.data.lrc.lyric;
        const regNewLine = /\n/; // 获取每一行歌词的数组
        const lineArr = lyric.split(regNewLine);
        const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/; // 匹配中括号里面的时间
        lineArr.forEach(item => {
          if (item === "") return;
          const obj = {};
          const time = item.match(regTime);
          obj.lyric =
            item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
          obj.time = time
            ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
            : 0;
          obj.uid = Math.random()
            .toString()
            .slice(-6);
          if (obj.lyric === "") {
            console.log("这一行没有歌词");
          } else {
            this.lyricsObjArr.push(obj);
          }
        });

        // console.log(this.lyricsObjArr);
      });
    },
    // 11.0 判断是否播放完毕，切换下一首
    songendnextFun() {
      if (this.myaudioDom.ended) {
        this.nextsongFun();
      }
    },
    // // 12.0 清空播放列表
    // clearsonglistFun(){
    //   this.$store.state.play.songlist = [];
    // },
    // 13.0 删除列表歌曲
    deltesongFun(index) {
      this.$store.state.play.songlist.splice(index, 1);
    },
    // // 14.0 获取歌曲详情
    // getsongdetailFun(id, callback) {
    //   this.$axios
    //     .get("http://music.kele8.cn/song/detail?ids=" + id)
    //     .then(res => {
    //       callback(res);
    //     });
    // },
    // 15.0 获取歌曲地址
    getsongurlFun(id, callback) {
      this.$axios.get("http://music.kele8.cn/song/url?id=" + id).then(res => {
        callback(res);
      });
    },
    // 16.0 获取歌词地址
    getsonglyricFun(id, callback) {
      this.$axios.get("http://music.kele8.cn/lyric?id=" + id).then(res => {
        callback(res);
      });
    }
  },
  watch: {
    // 2.0 调节音量
    volumeFlag() {
      this.myaudioDom.volume = (this.volumeFlag / 100).toFixed(1);
      this.changevolumecolorFun();
    }
    // progressWidth(newvalue, oldvalue) {
    //   // var audio = this.$el.querySelector("audio");
    //   // console.log(newvalue, oldvalue);
    //   if (newvalue - oldvalue > 5 || oldvalue - newvalue > 5) {
    //     // audio.currentTime = (this.progressWidth / 100) * this.musicalltimeFlag;

    //     console.log((this.progressWidth / 100) * this.musicalltimeFlag,this.progressWidth,this.musicalltimeFlag);

    //   }
    //   this.$refs.progress.style.backgroundImage = `linear-gradient(to right,#19B5F0 ${parseInt(
    //     this.progressWidth
    //   )}%,#51555C ${this.progressWidth}%`;
    // }
  },
  // -----------音乐播放操作方法集合end------------
  // 过滤播放时间
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
    },
    aa(data) {
      return data + "aaaaaa函数";
    }
  },
  created() {
    this.songlist = Object.assign(this.$store.state.play.songlist);
    var id = this.songlist[0].id;
    // 获取歌曲
    this.getsongurlFun(id, res => {
      this.songnowUrl = res.data.data[0].url;
    });

    console.log(this.songlist);

    // 获取总时长
    this.musicalltimeFlag = parseInt(this.songlist[0].time / 1000);
    this.playORpauseFlag = true;
    // 获取歌词
    this.getsonglyricFun(id, res => {
      let lyric = res.data.lrc.lyric;
      const regNewLine = /\n/; // 获取每一行歌词的数组
      const lineArr = lyric.split(regNewLine);
      const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/; // 匹配中括号里面的时间
      lineArr.forEach(item => {
        if (item === "") return;
        const obj = {};
        const time = item.match(regTime);
        obj.lyric =
          item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
        obj.time = time
          ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
          : 0;
        obj.uid = Math.random()
          .toString()
          .slice(-6);
        if (obj.lyric === "") {
          console.log("这一行没有歌词");
        } else {
          this.lyricsObjArr.push(obj);
        }
      });

      console.log(this.lyricsObjArr);
    });

    // this.idlist = this.$store.state.play.playsongidlist;

    // // 将id列表数据获取
    // this.idlist.forEach(item => {
    //   if (this.songlist.findIndex(value => value.id == item) == -1) {
    //     this.getsongdetailFun(item, res => {
    //       this.songlist.push({
    //         id: item,
    //         name: res.data.songs[0].al.name,
    //         singer: res.data.songs[0].ar[0].name,
    //         time: res.data.songs[0].dt
    //       });
    //     });
    //   }
    // });
  },
  mounted() {
    this.hiddenplaylistFun();
    // this.myaudioDom = this.$refs.myaudio; // 获取音频标签
    this.myaudioDom = this.$el.querySelector("audio");
    this.changevolumecolorFun();
    this.getmusicnowtime();
    // this.changemusicnowtimeFun();

    // 播放第一首歌
    // this.playnewsongFun(0);
  }
};
</script>

<style lang="scss" scoped>
.Play {
  position: absolute;
  top: 133px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  // 歌曲播放信息
  .play_con {
    width: 840px;
    margin: 0 auto;
    margin-top: 10px;
    .songs_face {
      float: left;
      .img {
        img {
          width: 260px;
          height: 260px;
        }
      }
    }
    .songinfo {
      float: right;
      width: 460px;
      .songName {
        font-size: 24px;
        color: #ffffff;
        span {
        }
      }
      .songSinger {
        font-size: 15px;
        height: 24px;
        padding-top: 9px;
        display: flex;
        span {
          color: #c1c0c0;
        }
        em {
          color: #ffffff;
          font-style: normal;
          margin-right: 10px;
        }
        .album {
          width: 225px;
          margin-right: 10px;
        }
      }
      ::-webkit-scrollbar {
        width: 8px;
        height: 0px;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #969491;
        border-radius: 4px;
      }
      .songlyric {
        width: 460px;
        height: 287px;
        margin-top: 17px;
        overflow: scroll;
        .lyric {
          p {
            font-size: 15px;
            color: #c1c0c0;
            height: 34px;
            line-height: 34px;
          }
        }
      }
    }
  }
  // 歌曲播放条
  .play_btns {
    width: 100%;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    bottom: 0;
    .play_btns_con {
      width: 1000px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      position: relative;
      // 播放按钮
      .btns {
        display: flex;
        height: 80px;
        align-items: center;
        .prev {
          width: 36px;
          height: 36px;
          cursor: pointer;
          background: url(../assets/play/btn.png) no-repeat 0 -143px;
          &:hover {
            background-position: -36px -143px;
          }
        }
        .playORpasue {
          width: 60px;
          height: 60px;
          background: url(../assets/play/btn.png) no-repeat 0 0;
          margin: 0 10px;
          cursor: pointer;
          &:hover {
            background-position: -60px 0;
          }
          &.con {
            background-position: 0 -60px;
            &:hover {
              background-position: -60px -60px;
            }
          }
        }
        .next {
          width: 36px;
          height: 36px;
          cursor: pointer;
          background: url(../assets/play/btn.png) no-repeat -144px -143px;
          &:hover {
            background-position: -180px -143px;
          }
        }
      }
      // 歌曲页面
      .img {
        width: 60px;
        height: 80px;
        display: flex;
        align-items: center;
        margin-left: 40px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      // 歌曲进度
      .progress {
        margin-left: 20px;
        width: 374px;
        height: 80px;
        .top {
          height: 24px;
          padding-top: 18px;
          display: flex;
          .songname {
            height: 24px;
            line-height: 24px;
            color: #c4c3c3;
            font-size: 13px;
          }
          .songtime {
            margin-left: auto;
            color: #c4c3c3;
            font-size: 12px;
            height: 24px;
            line-height: 24px;
          }
        }
        .line {
          input[type="range"] {
            -webkit-appearance: none;
            width: 374px;
            height: 2px;
            border-radius: 1px;
            background-color: #605755;
            outline: none;
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 12px;
              height: 12px;
              background-color: #ffffff;
              border-radius: 6px;
              cursor: pointer;
            }
          }
        }
      }
      // 操作按钮
      .operation {
        display: flex;
        height: 80px;
        align-items: center;
        margin-left: 30px;
        .volume,
        .change .one,
        .change .two,
        .change .three,
        .down,
        .share {
          width: 16px;
          height: 16px;
          background: url(../assets/play/btn.png) no-repeat;
          margin: 0 20px;
          cursor: pointer;
        }
        // 音量
        .volume {
          background-position: -64px -195px;
          position: relative;
          .volumenum {
            position: absolute;
            width: 29px;
            height: 150px;
            background: url(../assets/play/volume-panel.png) no-repeat 0 0;
            top: -150px;
            left: -7px;

            display: none;
            .volumenum_con {
              width: 100%;
              height: 100%;
              position: relative;
              input[type="range"] {
                transform: rotate(-90deg);
                transform-origin: top left;
                position: absolute;
                top: 100px;
                left: 13px;
                -webkit-appearance: none;
                width: 90px;
                height: 3px;
                border-radius: 2px;
                background-color: #51555c;
                outline: none;
                &::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  width: 12px;
                  height: 12px;
                  background-color: #19b5f0;
                  border-radius: 6px;
                  cursor: pointer;
                }
              }
            }
          }
          &:hover {
            background-position: -80px -195px;
            .volumenum {
              display: block;
            }
          }
        }
        // 播放方式
        .change {
          background-position: 0 -179px;
          position: relative;
          i {
            display: block;
          }
          .one {
            background-position: -64px -179px;
            &:hover {
              background-position: -80px -179px;
            }
          }
          .two {
            background-position: 0 -179px;
            &:hover {
              background-position: -16px -179px;
            }
          }
          .three {
            background-position: -128px -179px;
            &:hover {
              background-position: -144px -179px;
            }
          }
          .changestye {
            width: 120px;
            height: 150px;
            position: absolute;
            top: -150px;
            left: -34px;
            background: url(../assets/play/play_style.png) no-repeat 0 0;
            .changestyle_con {
              padding: 10px;
              dd {
                height: 30px;
                border-bottom: 1px solid #30343d;
                font-size: 14px;
                color: #a1a1a1;
                display: flex;
                align-items: center;
                cursor: pointer;
                span {
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  margin: 7px 8px;
                  background: url(../assets/play/btn.png) no-repeat;
                }
                &:nth-child(1) {
                  span {
                    background-position: -64px -179px;
                  }
                  &.con {
                    span {
                      background-position: -80px -179px;
                    }
                    color: #19b5f0;
                  }
                }
                &:nth-child(2) {
                  span {
                    background-position: 0 -179px;
                  }
                  &.con {
                    span {
                      background-position: -16px -179px;
                    }
                    color: #19b5f0;
                  }
                }
                &:nth-child(3) {
                  span {
                    background-position: -128px -179px;
                  }
                  &.con {
                    span {
                      background-position: -144px -179px;
                    }
                    color: #19b5f0;
                  }
                }
              }
            }
          }

          &:hover {
            background-position: -16px -179px;
          }
        }
        // 下载
        .down {
          background-position: -240px -32px;
          &:hover {
            background-position: -256px -32px;
          }
        }
        // 分享
        .share {
          background-position: -240px 0;
          &:hover {
            background-position: -256px 0;
          }
        }
      }
      // 播放列表按钮
      .playlist {
        width: 30px;
        padding-left: 30px;
        height: 23px;
        background: url(../assets/play/btn.png) no-repeat 0 -120px;
        font-size: 12px;
        color: #a1a1a1;
        line-height: 23px;
        user-select: none;
        cursor: pointer;
        &:hover {
          background-position: -61px -120px;
          color: #19b5f0;
        }
      }
      // 播放列表
      .playlist_con {
        width: 480px;
        height: 410px;
        background: #2f343b;
        position: absolute;
        right: 40px;
        top: -410px;
        // 头部
        .play_header {
          height: 50px;
          padding: 0 19px;
          display: flex;
          align-items: center;
          background-color: #2a2e35;
          .list_num {
            font-size: 16px;
            color: #86898e;
            line-height: 50px;
          }
          .list_btns {
            margin-left: auto;
            span {
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url(../assets/play/btn.png) no-repeat;
            }
            .clear {
              background-position: -240px -63px;
              cursor: pointer;
            }
            .line {
              display: inline-block;
              width: 1px;
              height: 14px;
              background: #a1a1a1;
              margin: 0 20px;
            }
            .del {
              background-position: -240px -95px;
              cursor: pointer;
            }
          }
        }
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
          padding-left: 10px;
          width: 470px;
          height: 360px;
          overflow: scroll;
          .list_con {
            ul {
              li {
                width: 450px;
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
                  width: 254px;
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
                      line-height: 0;
                      background: none;
                      font-weight: bold;
                      color: #86898D;
                      position: relative;
                      top: -2px;
                      &:hover {
                        color: #19b5f0;
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
                  width: 90px;
                  height: 39px;
                  line-height: 39px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .songtime {
                  width: 60px;
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
                      display: block;
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