<template>
  <div>
    <!-- 热门 -->
    <!-- 字体列表 -->
    <div class="list">
      <div class="tit">猜你喜欢</div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in list.like" :key="index">
            <div class="text">{{item}}</div>
          </li>
        </ul>
      </div>
      <div class="more">
        展开
        <i class="iconfont icon-xiangxia"></i>
      </div>
    </div>
    <!-- 图片列表 -->
    <div class="list">
      <div class="tit">当季推荐</div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        like: ["杭州", "千岛湖", "黄山", "苏州", "南京", "乌镇"],
        recommend: [
          {
            city:"日本",
            img:require('../../assets/images/searchimg/hot_01.jpg')
          },
          {
            city:"三亚",
            sign:"人气",
            signId:true,
            img:require('../../assets/images/searchimg/hot_02.jpg')
          },
          {
            city:"泰国",
            img:require('../../assets/images/searchimg/hot_03.jpg')
          },
          {
            city:"新加坡",
            img:require('../../assets/images/searchimg/hot_04.jpg')
          },
          {
            city:"巴厘岛",
            sign:"蜜月",
            signId:true,
            img:require('../../assets/images/searchimg/hot_05.jpg')
          },
          {
            city:"云南",
            img:require('../../assets/images/searchimg/hot_06.jpg')
          },
          {
            city:"成都",
            sign:"美食",
            signId:true,
            img:require('../../assets/images/searchimg/hot_07.jpg')
          },
          {
            city:"普吉岛",
            img:require('../../assets/images/searchimg/hot_08.jpg')
          },
          {
            city:"马尔代夫",
            sign:"蜜月",
            signId:true,
            img:require('../../assets/images/searchimg/hot_09.jpg')
          },
          {
            city:"重庆",
            sign:"美食",
            signId:true,
            img:require('../../assets/images/searchimg/hot_10.jpg')
          },
          {
            city:"厦门",
            img:require('../../assets/images/searchimg/hot_11.jpg')
          },
          {
            city:"广州",
            sign:"美食",
            signId:true,
            img:require('../../assets/images/searchimg/hot_12.jpg')
          },
          {
            city:"北京",
            img:require('../../assets/images/searchimg/hot_13.jpg')
          },
          {
            city:"上海",
            img:require('../../assets/images/searchimg/hot_14.jpg')
          },
          {
            city:"西安",
            sign:"兵马俑",
            signId:true,
            img:require('../../assets/images/searchimg/hot_15.jpg')
          },
          {
            city:"杭州",
            img:require('../../assets/images/searchimg/hot_16.jpg')
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