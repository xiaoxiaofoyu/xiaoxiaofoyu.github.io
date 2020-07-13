<template>
  <div>
    <!-- 境内 -->
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
    <div class="list" v-for="(value,key,index) in list.textlist" :key="index">
      <div class="tit">{{key}}</div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in value" :key="index">
            <div class="text">
              <i v-if="item.signId">{{item.sign}}</i>
              {{item.sopt}}
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
        recommend: [
          {
            city: "三亚",
            sign: "人气",
            signId: true,
            img: require("../../assets/images/searchimg/hot_02.jpg")
          },
          {
            city: "成都",
            sign: "美食",
            signId: true,
            img: require("../../assets/images/searchimg/hot_07.jpg")
          },
          {
            city: "重庆",
            sign: "美食",
            signId: true,
            img: require("../../assets/images/searchimg/hot_10.jpg")
          },
          {
            city: "厦门",
            img: require("../../assets/images/searchimg/hot_11.jpg")
          },
          {
            city: "广州",
            sign: "美食",
            signId: true,
            img: require("../../assets/images/searchimg/hot_12.jpg")
          },
          {
            city: "北京",
            img: require("../../assets/images/searchimg/hot_13.jpg")
          },
          {
            city: "上海",
            img: require("../../assets/images/searchimg/hot_14.jpg")
          },
          {
            city: "西安",
            sign: "兵马俑",
            signId: true,
            img: require("../../assets/images/searchimg/hot_15.jpg")
          },
          {
            city: "杭州",
            img: require("../../assets/images/searchimg/hot_16.jpg")
          }
        ],
        textlist: {
          云南: [
            { sopt: "丽江", sign: "人气", signId: true },
            { sopt: "西双版纳" },
            { sopt: "昆明" },
            { sopt: "大理" },
            { sopt: "香格里拉" },
            { sopt: "腾冲" },
            { sopt: "普者黑" },
            { sopt: "丽江古城" },
            { sopt: "腾冲热海风景区" }
          ],
          广东: [
            { sopt: "珠海" },
            { sopt: "深圳" },
            { sopt: "惠州" },
            { sopt: "长隆野生动物世界" },
            { sopt: "珠海长隆海洋王国" },
            { sopt: "汕头" },
            { sopt: "佛山" },
            { sopt: "潮州" },
            { sopt: "长隆欢乐世界" }
          ],
          黑龙江: [
            { sopt: "哈尔滨" },
            { sopt: "漠河" },
            { sopt: "哈尔滨冰雪大世界" },
            { sopt: "亚布力滑雪旅游度假区" },
            { sopt: "北极村" },
            { sopt: "牡丹江" },
            { sopt: "哈尔滨冰雪大世界室内冰雪主题乐园" },
            { sopt: "大兴安岭" },
            { sopt: "雪谷" }
          ],
          四川: [
            { sopt: "九寨沟", sign: "人气", signId: true },
            { sopt: "稻城" },
            { sopt: "稻城亚丁" },
            { sopt: "峨眉山" },
            { sopt: "阿坝" },
            { sopt: "都江堰" },
            { sopt: "青城山" },
            { sopt: "理县" },
            { sopt: "甘孜" }
          ],
          广西: [
            { sopt: "桂林" },
            { sopt: "北海" },
            { sopt: "南宁" },
            { sopt: "涠洲岛" },
            { sopt: "阳朔" },
            { sopt: "德天跨国瀑布景区" },
            { sopt: "柳州" },
            { sopt: "滴江" },
            { sopt: "巴马" }
          ],
          浙江: [
            { sopt: "普陀山" },
            { sopt: "乌镇", sign: "古镇", signId: true },
            { sopt: "千岛湖" },
            { sopt: "宁波" },
            { sopt: "安吉" },
            { sopt: "舟山" },
            { sopt: "绍兴" },
            { sopt: "湖州" },
            { sopt: "丽水" }
          ],
          福建: [
            { sopt: "福州" },
            { sopt: "武夷山" },
            { sopt: "鼓浪屿", sign: "小清晰", signId: true },
            { sopt: "泉州" },
            { sopt: "漳州" },
            { sopt: "云水谣古镇" },
            { sopt: "龙岩" },
            { sopt: "宁德" },
            { sopt: "莆田" }
          ],
          青海: [
            { sopt: "茶卡盐湖", sign: "天空之境", signId: true },
            { sopt: "西宁" },
            { sopt: "青海湖" },
            { sopt: "格尔木" },
            { sopt: "海西" },
            { sopt: "塔尔寺" },
            { sopt: "翡翠湖" },
            { sopt: "海北" },
            { sopt: "贵德" }
          ],
          吉林: [
            { sopt: "长白山" },
            { sopt: "长春" },
            { sopt: "万达长白山国际滑雪场" },
            { sopt: "长白山天池" },
            { sopt: "延边" },
            { sopt: "雾松岛" },
            { sopt: "万科松花湖国际度假区" },
            { sopt: "白山" },
            { sopt: "长白山北坡" }
          ],
          湖南: [
            { sopt: "张家界" },
            { sopt: "长沙" },
            { sopt: "凤凰古城" },
            { sopt: "凤凰" },
            { sopt: "韶山" },
            { sopt: "湘西" },
            { sopt: "芙容镇" },
            { sopt: "张家界大峡谷玻璃桥" },
            { sopt: "橘子洲" }
          ],
          湖北: [
            { sopt: "武汉" },
            { sopt: "恩施" },
            { sopt: "神农架" },
            { sopt: "宜昌" },
            { sopt: "武当山" },
            { sopt: "襄阳" },
            { sopt: "三峡大坝旅游区" },
            { sopt: "恩施大峡谷" },
            { sopt: "十堰" }
          ],
          江苏: [
            { sopt: "苏州" },
            { sopt: "南京" },
            { sopt: "无锡" },
            { sopt: "常州" },
            { sopt: "天目湖" },
            { sopt: "拈花湾" },
            { sopt: "溧阳" },
            { sopt: "灵山景区" },
            { sopt: "灵山大佛" }
          ],
          海南: [
            { sopt: "海口" },
            { sopt: "万宁" },
            { sopt: "亚龙湾" },
            { sopt: "三亚亚特兰蒂斯水世界" },
            { sopt: "三亚亚特兰蒂斯度假区" },
            { sopt: "海常湾" },
            { sopt: "琼海" },
            { sopt: "陵水" },
            { sopt: "三亚湾" }
          ],
          山东: [
            { sopt: "青岛" },
            { sopt: "济南" },
            { sopt: "泰山" },
            { sopt: "威海" },
            { sopt: "烟台" },
            { sopt: "泰安" },
            { sopt: "曲阜" },
            { sopt: "蓬莱" },
            { sopt: "崂山" }
          ],
          直辖市: [
            { sopt: "北京" },
            { sopt: "天津" },
            { sopt: "重庆" ,sign: "美食", signId: true}
          ],
          甘肃: [
            { sopt: "敦煌" },
            { sopt: "兰州" },
            { sopt: "张掖" },
            { sopt: "莫高窟" },
            { sopt: "甘南" },
            { sopt: "嘉峪关" },
            { sopt: "张掖七彩丹霞旅游景区" },
            { sopt: "酒泉" },
            { sopt: "鸣沙山月牙泉" }
          ],
          西藏: [
            { sopt: "拉萨" },
            { sopt: "布达拉宫" },
            { sopt: "纳木措" },
            { sopt: "林芝" },
            { sopt: "日喀则" },
            { sopt: "羊卓雍措" },
            { sopt: "雅鲁藏布大峡谷" },
            { sopt: "布达拉宫广场" },
            { sopt: "山南" }

          ],
          内蒙古: [
            { sopt: "呼伦贝尔" },
            { sopt: "呼和浩特" },
            { sopt: "呼伦见尔大草" },
            { sopt: "满洲里" },
            { sopt: "乌兰布统" },
            { sopt: "包头" },
            { sopt: "鄂尔多斯" },
            { sopt: "赤峰" },
            { sopt: "阿拉善" }
          ],
          贵州: [
            { sopt: "贵阳" },
            { sopt: "黄果树瀑布" },
            { sopt: "西江千户苗寨" },
            { sopt: "遵义" },
            { sopt: "安顺" },
            { sopt: "铜仁" },
            { sopt: "梵净山" },
            { sopt: "赤水" },
            { sopt: "凯里" }
          ],
          江西: [
            { sopt: "婺源" },
            { sopt: "南昌" },
            { sopt: "三清山" },
            { sopt: "庐山" },
            { sopt: "景德镇" },
            { sopt: "上饶" },
            { sopt: "婺源篁岭" },
            { sopt: "九江" },
            { sopt: "庐山风景区" }
          ],
          新疆: [
            { sopt: "乌鲁木齐" },
            { sopt: "喀纳斯" },
            { sopt: "喀什" },
            { sopt: "伊犁" },
            { sopt: "阿勒泰" },
            { sopt: "天山天池" },
            { sopt: "禾木风景区" },
            { sopt: "吐鲁番市" },
            { sopt: "赛里木湖" }
          ],
          陕西: [
            { sopt: "华山" },
            { sopt: "延安" },
            { sopt: "秦始皇兵马俑博物馆" },
            { sopt: "大唐不夜城" },
            { sopt: "壶口瀑布" },
            { sopt: "宝鸡" },
            { sopt: "陕西历史博物馆" },
            { sopt: "西安城墙" },
            { sopt: "渭南" }
          ],
          河北: [
            { sopt: "张家界" },
            { sopt: "秦皇岛" },
            { sopt: "承德" },
            { sopt: "北戴河" },
            { sopt: "太舞滑雪小镇" },
            { sopt: "昌黎" },
            { sopt: "南戴河" },
            { sopt: "阿那亚礼堂" },
            { sopt: "南戴河仙螺岛" }
          ],
          安徽: [
            { sopt: "黄山" },
            { sopt: "九华山" },
            { sopt: "宏村" },
            { sopt: "芜湖" },
            { sopt: "黄山风景区" },
            { sopt: "池州" },
            { sopt: "影县" },
            { sopt: "西海大峡谷" },
            { sopt: "屯溪老街" }
          ],
          山西: [
            { sopt: "五台山" },
            { sopt: "太原" },
            { sopt: "平遥" },
            { sopt: "大同" },
            { sopt: "平遥古城" },
            { sopt: "黄河壶口瀑布风景名胜区" },
            { sopt: "临汾" },
            { sopt: "乔家大院" },
            { sopt: "云冈石窟" }
          ],
          河南: [
            { sopt: "郑州" },
            { sopt: "洛阳" },
            { sopt: "开封" },
            { sopt: "云台山" },
            { sopt: "焦作" },
            { sopt: "清明上河园" },
            { sopt: "嵩山" },
            { sopt: "少林寺" },
            { sopt: "龙门石窟" }
          ],
          宁夏: [
            { sopt: "银川" },
            { sopt: "中卫" },
            { sopt: "沙坡头" },
            { sopt: "镇北堡西部影城" },
            { sopt: "西夏陵" },
            { sopt: "石嘴山" },
            { sopt: "沙湖生态旅游区" },
            { sopt: "宁夏水润沟旅游区" },
            { sopt: "吴忠" }
          ],
          辽宁: [
            { sopt: "大连" },
            { sopt: "沈阳" },
            { sopt: "老虎滩海洋公源" },
            { sopt: "星海广场" },
            { sopt: "金石滩度假区" },
            { sopt: "燕禽岭" },
            { sopt: "十里黄金海岸" },
            { sopt: "滨海路" },
            { sopt: "北大桥" }
          ]
        }
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
  }
}
</style>