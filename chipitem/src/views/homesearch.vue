<template>
  <div>
    <div class="homesearch">
      <!-- 顶部搜索 -->
      <header class="header">
        <div class="goback" @click="$router.go(-1)">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="se_icon">
          <i class="iconfont icon-search"></i>
        </div>
        <input type="text" placeholder="目的地/酒店/景点/航班号" v-model="searchvalue" @input="isValue()" />
        <div class="se_del" @click="del()">
          <i class="iconfont icon-cha"></i>
        </div>
        <div class="gosearch" @click="search(searchvalue)">搜索</div>
      </header>
      <!-- 顶部搜索end -->
      <!-- 热门搜索 -->
      <div class="hotsearch" v-show="!isSearch">
        <div class="tit">
          <p>热门搜索</p>
        </div>
        <div class="searchlist">
          <ul>
            <li @click="$router.push('/lists')">
              机票
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
            <li @click="$router.push('/lists')">
              酒店
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
            <li @click="$router.push('/lists')">
              门票
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
            <li @click="$router.push('/lists')">
              旅游
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
            <li @click="$router.push('/lists')">
              火车票
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
            <li @click="$router.push('/lists')">
              一日游
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 热门搜索end -->
      <!-- 搜索列表 -->
      <div class="hotsearch" v-show="isSearch">
        <div class="searchlist">
          <ul>
            <li>
              <b></b>
              <div class="content">{{searchvalue}}</div>
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 搜索历史 -->
      <div class="hotsearch" v-show="isHistory">
        <div class="tit">
          <p>历史搜索</p>
        </div>
        <div class="searchlist history">
          <ul>
            <li
              v-for="(item,index) in $store.state.homesearch.history"
              :key="index"
              @click="$router.push('/lists')"
            >
              {{item}}
              <span>
                <i class="iconfont icon-jiantou"></i>
              </span>
            </li>
            <li class="clear" @click="clearhistory()">清空搜索历史</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearch: false,
      isHistory: false,
      searchvalue: ""
    };
  },
  methods: {
    //   判断输入框是否有值
    isValue() {
      if (this.searchvalue == "") {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
    },
    // 清空输入框数据
    del() {
      this.searchvalue = "";
      this.isSearch = false;
    },
    // 搜索历史
    search(place) {
      if (place != "") {
        this.$store.commit("homesearch/search", place);
      }
    },
    // 显示与隐藏搜索历史
    showhistory() {
      if (this.$store.state.homesearch.history != "" && this.searchvalue == "") {
        this.isHistory = true;
      } else {
        this.history = false;
      }
    },
    // 清空搜索历史
    clearhistory() {
      this.$store.commit("homesearch/clearhistory");
      this.isHistory = false;
    }
  },
  updated() {
    this.showhistory();
  }
};
</script>
<style lang="scss" scoped>
.homesearch {
  width: 100%;
  // 顶部搜索
  .header {
    height: 44px;
    border-bottom: 1px solid #e0e2e4;
    background-color: #e6f0f7;
    padding: 0 50px 0 45px;
    display: flex;
    align-items: center;
    position: relative;
    .se_icon,
    .se_del {
      width: 30px;
      height: 30px;
      background-color: #ffffff;
      text-align: center;
      line-height: 30px;
      i {
        font-size: 12px;
        color: #aaaaaa;
      }
    }
    .se_icon {
      border-radius: 3px 0 0 3px;
      i {
        font-size: 14px;
      }
    }
    .se_del {
      border-radius: 0 3px 3px 0;
    }
    input[type="text"] {
      flex: 1;
      height: 30px;
      border: none;
      background-color: #ffffff;
      outline: none;
      font-size: 14px;
      color: #333333;
    }
    .goback {
      width: 45px;
      height: 44px;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      line-height: 44px;
      i {
        font-size: 34px;
        color: #099fde;
      }
    }
    .gosearch {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      font-size: 15px;
      color: #099fde;
    }
  }
  // 搜索列表
  .hotsearch {
    width: 100%;
    .tit {
      width: 100%;
      border-bottom: 1px solid #e0e2e4;
      background-color: #fafafc;
      p {
        margin: 8px 15px 2px;
        font-size: 13px;
        color: #666;
      }
    }
    .searchlist {
      width: 100%;
      ul {
        width: 100%;
        li {
          padding: 10px 35px;
          font-size: 16px;
          color: #000;
          position: relative;
          border-bottom: 1px solid #e0e2e4;
          b {
            display: block;
            width: 20px;
            height: 20px;
            background: url(../assets/images/homeimg/icon_7.png) no-repeat 0 -50px;
            background-size: 20px auto;
            position: absolute;
            top: 0;
            left: 10px;
            bottom: 0;
            margin: auto 0;
          }
          span {
            display: block;
            width: 30px;
            height: 30px;
            transform: rotate(-135deg);
            text-align: center;
            line-height: 30px;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            margin: auto 0;
            i {
              font-size: 14px;
              color: #cccccc;
            }
          }
          .content {
            width: 100%;
          }
          &.clear {
            font-size: 15px;
            color: #099fde;
            text-align: center;
          }
        }
      }
    }
    .history {
      ul {
        li {
          padding: 10px 15px;
        }
      }
    }
  }
}
</style>