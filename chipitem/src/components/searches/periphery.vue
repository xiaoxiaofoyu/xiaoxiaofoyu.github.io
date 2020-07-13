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
      <div class="tit">周边经典目的地</div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in list.classic" :key="index">
            <div class="text">{{item}}</div>
          </li>
        </ul>
      </div>
      <div class="more">
        展开
        <i class="iconfont icon-xiangxia"></i>
      </div>
    </div>
    <div class="list">
      <div class="tit">周边热门景点</div>
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
      <div class="more">
        展开
        <i class="iconfont icon-xiangxia"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        classic: [
          "扬州",
          "婺源",
          "安吉",
          "武夷山",
          "常州",
          "舟山",
          "绍兴",
          "湖州",
          "丽水"
        ],
        hot: [
          {
            spot: "普陀山"
          },
          {
            spot: "迪士尼度假区"
          },
          {
            spot: "莫干山"
          },
          {
            spot: "天目湖"
          },
          {
            spot: "西塘",
            sign: "古镇",
            signId: true
          },
          {
            spot: "九华山"
          },
          {
            spot: "横店影视城"
          },
          {
            spot: "拈花湾"
          },
          {
            spot: "周庄",
            sign: "第一水乡",
            signId: true
          }
        ],
        recommend: [
          {
            city: "上海",
            img: require("../../assets/images/searchimg/hot_14.jpg")
          },
          {
            city: "杭州",
            img: require("../../assets/images/searchimg/hot_16.jpg")
          },
          {
            city: "苏州",
            sign: "园林",
            signId: true,
            img: require("../../assets/images/searchimg/periphery_01.jpg")
          },
          {
            city: "南京",
            img: require("../../assets/images/searchimg/periphery_02.jpg")
          },
          {
            city: "黄山",
            sign: "登高",
            signId: true,
            img: require("../../assets/images/searchimg/periphery_03.jpg")
          },
          {
            city: "乌镇",
            sign: "古镇",
            signId: true,
            img: require("../../assets/images/searchimg/periphery_04.jpg")
          },
          {
            city: "无锡",
            img: require("../../assets/images/searchimg/periphery_05.jpg")
          },
          {
            city: "千湖岛",
            img: require("../../assets/images/searchimg/periphery_06.jpg")
          },
          {
            city: "宁波",
            img: require("../../assets/images/searchimg/hot_07.jpg")
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