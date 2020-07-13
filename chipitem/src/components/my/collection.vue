<template>
  <div>
    <div class="Collection">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.go(-1)"></i>
        {{$route.name}}
      </header>
      <!-- 顶部导航end -->
      <!-- 收藏列表 -->
      <div class="list">
        <ul>
          <li v-for="(item,index) in $store.state.collection.collectionlist" :key="index">
            <div class="img">
              <img :src="item.img" />
            </div>
            <div class="content">
              <div class="title">{{item.title}}</div>
              <div class="details">{{item.detalis}}</div>
              <div class="price">
                <span>￥</span>
                <span class="num">{{item.price}}</span>
                <span>起</span>
              </div>
            </div>
            <div class="like" @click="removelike(index)">
              <i :class="{con:item.likeFlag}"></i>
            </div>
          </li>
        </ul>
      </div>
      <!-- 收藏列表end -->
      <div class="tips">
        <div class="line"></div>
        <div class="words" @click="$router.push('/lists')">去收藏更多属于您的旅程</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    removelike(index){
      this.$store.commit('collection/removelike',index);
    }
  }
};
</script>

<style lang="scss" scoped>
#app > div {
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.Collection {
  padding-top: 44px;
  width: 100%;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    border-bottom: 1px solid #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
    color: #333333;
    z-index: 1000;
    i {
      width: 44px;
      height: 44px;
      position: absolute;
      top: 0;
      left: 0;
      font-weight: bolder;
      text-align: center;
      line-height: 44px;
      font-size: 18px;
    }
  }
  // 收藏列表
  .list {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        width: 95%;
        background-color: #ffffff;
        border-radius: 5px;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        position: relative;
        .img {
          width: 70px;
          height: 70px;
          img {
            width: 70px;
            height: 70px;
            border-radius: 5px;
          }
        }
        .content {
          flex: 1;
          padding: 0 40px 0 10px;
          .title {
            width: 100%;
            font-size: 14px;
            color: #333333;
            font-weight: bold;
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
          }
          .details {
            width: 100%;
            font-size: 12px;
            color: #666666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            text-align: justify;
          }
          .price {
            width: 100%;
            text-align: right;
            span {
              font-size: 12px;
              color: #ff9a14;
              font-weight: bold;
            }
            .num {
              font-size: 16px;
            }
          }
        }
        .like {
          position: absolute;
          bottom: 12px;
          right: 12px;
          i {
            display: block;
            width: 22px;
            height: 20px;
            background: url(../../assets/images/detalinfoimg/icon_13.png)
              no-repeat 0 0;
            background-size: 72px auto;
          }
          i.con {
            background-position: 0 -20px;
          }
        }
      }
    }
  }
  // 提示
  .tips {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    .line {
      flex: 0 0 95%;
      height: 1px;
      background-color: #cccccc;
    }
    .words {
      background-color: #efeff4;
      position: absolute;
      color: #666666;
      font-size: 12px;
      padding: 0 10px;
    }
  }
}
</style>