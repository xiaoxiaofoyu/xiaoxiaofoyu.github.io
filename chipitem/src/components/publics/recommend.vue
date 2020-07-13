<template>
  <div>
    <div class="More">
      <!-- <div class="tit">更多产品推荐</div> -->
      <ul>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_01.jpg" alt />
            </div>
            <p>崇明区2日自由行(5钻)·【倾力推荐·度假胜地】住崇明由由喜来登酒店1晚+可加购东滩湿地公园门票|日出观鸟·赏东滩美景·吃地道土家菜|换个角度审视上海的美</p>
            <div class="price">
              <span>￥</span>
              <span>323</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_02.jpg" alt />
            </div>
            <p>上海2日1晚自由行(5钻)·【立减150/单 网红深坑酒店】上海佘山世茂洲际酒店1晚 |逆向生长 地下88米的深坑秘境 |水幕灯光秀 暗夜精灵 唯美梦幻 |打卡精灵乐园玻璃栈道 观全景深坑</p>
            <div class="price">
              <span>￥</span>
              <span>1106</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_03.jpg" alt />
            </div>
            <p>上海2日1晚自由行(4钻)·【林中漫步|悠享生活】住崇明森林漫心度假酒店1晚+可加购江南三民文化村&东滩湿地公园|约会上海后花园&享受自然</p>
            <div class="price">
              <span>￥</span>
              <span>259</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_04.jpg" alt />
            </div>
            <p>上海2日1晚自由行(4钻)·【约会春天·亲近自然】1晚住崇明新崇大酒店+可加购江南三民文化村&东滩湿地公园|约会上海近郊&享自然|品地道农家菜|呼吸大自然的美好</p>
            <div class="price">
              <span>￥</span>
              <span>244</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_05.jpg" alt />
            </div>
            <p>千岛湖3日2晚自由行(5钻)·【自驾游|住绿城】2晚连住·尽享一线湖景·宅在酒店静享湖光山色·每个春天都不应被辜负</p>
            <div class="price">
              <span>￥</span>
              <span>444</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_06.jpg" alt />
            </div>
            <p>千岛湖2日1晚自由行(5钻)·【自驾游|住绿城】尽享一线湖景·宅在酒店静享湖光山色·细品鱼头吃出美味鲜爽·千岛湖中心位置&贴心服务</p>
            <div class="price">
              <span>￥</span>
              <span>222</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_07.jpg" alt />
            </div>
            <p>千岛湖3日2晚自由行·【自驾游】小红书网红民宿·人少|远离喧嚣·不为景点打卡·只为亲近自然·景美|原生态·满目青山绿水·半城山色半城湖·安全|自己开车更有保障</p>
            <div class="price">
              <span>￥</span>
              <span>220</span>
              <span>起</span>
            </div>
          </a>
        </li>
        <li @click="$router.push('/detalinfo')">
          <a href="javascript:;">
            <div class="pic">
              <img src="../../assets/images/detalinfoimg/more_08.jpg" alt />
            </div>
            <p>千岛湖3日2晚自由行(4钻)·【自驾游】入住鱼街旁|紧邻夜游码头|吃喝玩乐超方便·美景|春花|新氧|你要的春天这里都有·不负春光</p>
            <div class="price">
              <span>￥</span>
              <span>365</span>
              <span>起</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 更多产品
.More {
  padding: 5px 15px;
  background-color: #ffffff;
  // .tit {
  //   padding: 5px 0;
  //   font-size: 20px;
  //   color: #333333;
  //   text-align: center;
  // }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      flex: 0 0 49%;
      padding-top: 10px;
      a {
        display: block;
        width: 100%;
        .pic {
          width: 100%;
          img {
            width: 100%;
            border-radius: 5px;
          }
        }
        p {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 14px;
          color: #333333;
        }
        .price {
          line-height: 24px;
          span {
            font-size: 16px;
            color: #ff6913;
            &:nth-child(1) {
              font-size: 12px;
            }
            &:nth-child(3) {
              font-size: 12px;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>