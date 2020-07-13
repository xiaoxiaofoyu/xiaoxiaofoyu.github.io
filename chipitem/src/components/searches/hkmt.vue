<template>
  <div>
    <!-- 周边 -->
    <!-- 图片列表 -->
    <div class="list">
      <div class="tit">当季热门</div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in list.recommend" :key="index">
            <div class="img">
              <img :src="item.img" alt />
              <h3>{{item.city}}</h3>
              <span v-if="item.signId">{{item.sign}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 字体列表 -->
    <div class="list">
      <div class="tit">台湾经典目的地</div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in list.hot" :key="index">
            <div class="text">
              <i v-if="item.signId">{{item.sign}}</i>
              {{item.spot}}
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="more">
        展开
        <i class="iconfont icon-xiangxia"></i>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        hot: [
          {
            spot: "新北"
          },
          {
            spot: "宜兰"
          },
          {
            spot: "台东"
          },
          {
            spot: "嘉义市"
          },
          {
            spot: "南投"
          },
          {
            spot: "屏东"
          },
          {
            spot: "嘉义县"
          }
        ],
        recommend: [
          {
            city: "澳门",
            img: require("../../assets/images/searchimg/hkmt_01.jpg")
          },
          {
            city: "台湾",
            img: require("../../assets/images/searchimg/hkmt_02.jpg")
          },
          {
            city: "香港",
            img: require("../../assets/images/searchimg/hkmt_03.jpg")
          },
          {
            city: "台北",
            img: require("../../assets/images/searchimg/hkmt_04.jpg")
          },
          {
            city: "垦丁",
            img: require("../../assets/images/searchimg/hkmt_05.jpg")
          },
          {
            city: "高雄",
            img: require("../../assets/images/searchimg/hkmt_06.jpg")
          },
          {
            city: "台中",
            img: require("../../assets/images/searchimg/hkmt_07.jpg")
          },
          {
            city: "花莲",
            img: require("../../assets/images/searchimg/hkmt_08.jpg")
          },
          {
            city: "日月潭",
            img: require("../../assets/images/searchimg/hkmt_09.jpg")
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-left: 12px;
  margin-top: 10px;
  .tit {
    width: 100%;
    height: 30px;
    padding-top: 10px;
    font-size: 14px;
    color: #333;
    line-height: 30px;
    font-weight: bold;
  }
  .content {
    width: 100%;
    padding-top: 10px;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 0 0 33.33%;
        border-radius: 3px;
        padding: 0 8px 8px 0;
        box-sizing: border-box;
        .text {
          width: 100%;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 14px;
          color: #333;
          background-color: #f8f8f8;
          position: relative;
          i {
            display: block;
            height: 14px;
            padding: 0 4px;
            line-height: 14px;
            background-color: #ff7700;
            color: #ffffff;
            border-radius: 7px 7px 7px 0;
            font-style: normal;
            font-size: 10px;
            text-align: center;
            position: absolute;
            top: -4px;
            right: -4px;
          }
        }
        .img {
          width: 100%;
          position: relative;
          img {
            width: 100%;
            border-radius: 5px;
          }
          h3 {
            font-size: 14px;
            color: #333;
            height: 20px;
            padding: 0 4px;
            margin-top: 4px;
            font-weight: normal;
            line-height: 20px;
            text-align: center;
          }
          span {
            display: block;
            padding: 0 4px;
            height: 16px;
            line-height: 16px;
            background-color: #ff7700;
            color: #ffffff;
            font-size: 10px;
            text-align: center;
            border-radius: 5px 0 5px 0;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
  .more {
    width: 100%;
    padding: 12px 0;
    font-size: 13px;
    color: #0086f6;
    line-height: 13px;
    text-align: center;
    i {
    }
  }
}
</style>