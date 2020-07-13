<template>
  <div>
    <div class="Choice">
      <!-- 顶部导航 -->
      <header class="header">
        <i class="iconfont icon-zuojiantou1" @click="$router.go(-1)"></i>
        <div class="tit">
          <p class="top">选择资源</p>
          <p class="time">{{humannum}}成人 {{childnum+babynum}}儿童/{{starttimes}}</p>
        </div>
      </header>
      <!-- 顶部导航end -->
      <!-- 订单 -->
      <div class="order">
        <ul>
          <li>
            <div class="tit">
              <div class="address">
                <span class="sp1">上海酒店</span>
                <span class="sp2">政策/特别提示</span>
              </div>
              <div class="time">{{starttimes}}至{{endtimes}}(1晚)</div>
            </div>
            <div class="content">
              <p class="name">
                {{hotelname}}
                <span>更换房型</span>
              </p>
              <p class="info">
                <span class="start">4.5分</span>|
                <span class="style">豪华型酒店</span>|
                <span class="spot">崇明岛/长兴岛/横沙岛</span>
              </p>
              <p class="service">
                <span class="sp1">休闲度假</span>
                <span class="sp1">亲子酒店</span>
                <span class="sp2">自助餐棒</span>
                <span class="sp2">适合带孩子</span>
              </p>
              <div class="hotelinfo">
                <div class="img">
                  <img src="../assets/images/detalinfoimg/hotel_01.jpg" alt />
                </div>
                <div class="details">
                  <p class="type">凯悦园景双床房</p>
                  <p class="someser">
                    <span>无餐</span>
                    <span class="line">|</span>
                    <span>可住2人</span>
                    <span class="line">|</span>
                    <span>不可加床</span>
                    <span class="line">|</span>
                    <span>双床</span>
                    <span class="line">|</span>
                    <span>不可取消</span>
                    <span>立即确认</span>
                  </p>
                  <div class="num">{{hotelnum}}间</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 订单end -->
      <!-- 底部按钮 -->
      <div class="submit">
        <div class="price">
          <span class="yuan">￥</span>
          <span class="num">{{price}}</span>
          <span class="details">明细</span>
        </div>
        <div class="nextbtn">
          <div class="btn" @click="tips()">立即预订</div>
        </div>
      </div>
      <!-- 底部按钮end -->
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      show: false,
      humannum:0,
      childnum:0,
      babynum:0,
      price:0,
      hotelname:'',
      starttimes:'',
      hotelnum:0,
      endtimes:''
    };
  },
  methods: {
    tips() {
      Dialog.confirm({
        title: "确定预订",
        message: '请您提前办理入住手续，祝您旅途愉快',
      })
        .then(() => {
          this.updateprice();
        })
        .catch(() => {
          // console.log('catch');
        });
    },
    updateprice(){
      this.$store.commit('detalinfo/updateprice',{price:this.price,hotelnum:this.hotelnum});
      this.$router.push('/order');
    }
  },
  created(){
    let index = this.$store.state.detalinfo.index;
    this.humannum = this.$store.state.detalinfo.shopcar[index].humannum;
    this.childnum = this.$store.state.detalinfo.shopcar[index].childnum;
    this.babynum = this.$store.state.detalinfo.shopcar[index].babynum;
    this.hotelnum = Math.ceil(this.humannum / 2);
    this.price = parseInt(this.$store.state.detalinfo.shopcar[index].price) * this.hotelnum; 
    this.hotelname = this.$store.state.detalinfo.shopcar[index].hotelname;
    this.starttimes = this.$store.state.detalinfo.shopcar[index].starttimes;
    this.endtimes = this.$store.state.detalinfo.shopcar[index].endtimes;
    
  }
};
</script>

<style lang="scss" scoped>
#app > div {
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.Choice {
  padding-top: 44px;
  // 顶部导航
  .header {
    width: 100%;
    height: 44px;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
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
    .tit {
      .top {
        width: 100%;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        color: #333333;
      }
      .time {
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: #666666;
      }
    }
  }
  // 订单
  .order {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      li {
        flex: 0 0 95%;
        background-color: #ffffff;
        border-radius: 5px;
        margin-top: 5px;
        .tit {
          padding: 8px 15px 8px 0;
          margin-left: 15px;
          .address {
            display: flex;
            line-height: 24px;
            .sp1 {
              font-size: 16px;
              color: #333333;
              font-weight: bold;
              margin-right: auto;
            }
            .sp2 {
              font-size: 12px;
              color: #19a0f0;
            }
          }
          .time {
            font-size: 12px;
            color: #999999;
            line-height: 16px;
            margin-top: 3px;
          }
        }
        .content {
          padding: 10px 15px;
          .name {
            font-size: 14px;
            color: #333333;
            line-height: 18px;
            display: flex;
            span {
              font-size: 14px;
              color: #19a0f0;
              margin-left: auto;
            }
          }
          .info {
            font-size: 12px;
            color: #999999;
            line-height: 16px;
            margin-top: 4px;
          }
          .service {
            font-size: 10px;
            line-height: 16px;
            margin-top: 4px;
            .sp1 {
              border: 1px solid #999999;
              color: #666666;
              border-radius: 2px;
              margin-right: 2px;
              padding: 0 2px;
            }
            .sp2 {
              color: #ff9913;
              margin-right: 2px;
            }
          }
          .hotelinfo {
            margin-top: 4px;
            display: flex;
            .img {
              width: 60px;
              img {
                width: 60px;
                height: 60px;
                border-radius: 5px;
              }
            }
            .details {
              flex: 1;
              padding: 0 70px 0 10px;
              position: relative;
              .type {
                display: flex;
                font-size: 13px;
                color: #333333;
              }
              .someser {
                font-size: 12px;
                color: #999999;
                line-height: 16px;
                span {
                  margin-right: 3px;
                }
              }
              .num {
                font-size: 14px;
                color: #999999;
                position: absolute;
                top: 0;
                right: 0;
              }
            }
          }
        }
      }
    }
  }
  // 底部按钮
  .submit {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    .price {
      height: 60px;
      flex: 0 0 35%;
      line-height: 60px;
      padding-left: 10px;
      .yuan {
        font-size: 12px;
        color: #ff6913;
        font-weight: bold;
      }
      .num {
        font-size: 15px;
        color: #ff6913;
      }
      .details {
        font-size: 12px;
        color: #19a0f0;
        margin-left: 5px;
      }
    }
    .nextbtn {
      flex: 1;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        height: 44px;
        flex: 0 0 95%;
        background-color: #ff6913;
        border-radius: 5px;
        text-align: center;
        line-height: 44px;
        color: #ffffff;
      }
    }
  }
}
</style>