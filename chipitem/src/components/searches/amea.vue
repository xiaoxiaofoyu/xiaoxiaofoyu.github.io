<template>
  <div>
    <!-- 奥中东非 -->
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
    <div class="list" v-for="(item,index) in list.textlist" :key="index">
      <div class="tit">{{item.tit}}</div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in item.hot" :key="index+3">
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
        textlist: [
          {
            tit: "澳新经典目的地",
            hot: [
              {
                spot: "墨尔本"
              },
              {
                spot: "皇后镇"
              },
              {
                spot: "凯恩斯"
              },
              {
                spot: "黄金海岸"
              },
              {
                spot: "珀斯"
              },
              {
                spot: "奥克兰"
              },
              {
                spot: "布里斯班"
              },
              {
                spot: "大堡礁"
              },
              {
                spot: "阿德莱德"
              }
            ]
          },
          {
            tit: "中东非经典目的地",
            hot: [
              {
                spot: "以色列"
              },
              {
                spot: "阿联酋"
              },
              {
                spot: "南非"
              },
              {
                spot: "伊斯坦布尔"
              },
              {
                spot: "约旦"
              },
              {
                spot: "肯尼亚"
              },
              {
                spot: "卡萨布兰卡"
              },
              {
                spot: "卡塔尔"
              },
              {
                spot: "阿布扎比"
              }
            ]

          }
        ],
        recommend: [
          {
            city: "迪拜",
            img: require("../../assets/images/searchimg/amea_01.jpg")
          },
          {
            city: "澳大利亚",
            img: require("../../assets/images/searchimg/amea_02.jpg")
          },
          {
            city: "新西兰",
            img: require("../../assets/images/searchimg/amea_03.jpg")
          },
          {
            city: "毛里求斯",
            img: require("../../assets/images/searchimg/amea_04.jpg")
          },
          {
            city: "土耳其",
            signId: true,
            sign: "热气球",
            img: require("../../assets/images/searchimg/amea_05.jpg")
          },
          {
            city: "摩洛哥",
            img: require("../../assets/images/searchimg/amea_06.jpg")
          },
          {
            city: "埃及",
            img: require("../../assets/images/searchimg/amea_07.jpg")
          },
          {
            city: "塞舌尔",
            img: require("../../assets/images/searchimg/amea_08.jpg")
          },
          {
            city: "悉尼",
            img: require("../../assets/images/searchimg/amea_09.jpg")
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