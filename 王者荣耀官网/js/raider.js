// 周免英雄
var herofreeBoxUls = $("#herofree_box_ul li");
herofreeBoxUls.mouseenter(function () {
    $(this)
        .stop()
        .animate({ width: "222px" }, 300)
        .addClass("con")
        .siblings()
        .stop()
        .animate({ width: "69px" }, 300)
        .removeClass("con");
})

// 轮播图
var LsolideUl = $("#Lsolide ul");   //轮播图片
var LsolideUls0W = $("#Lsolide ul li:eq(0)").width(); //第一张图片
var LsolideOls = $("#Lsolide ol li");  //小圆点
LsolideOls.mouseenter(function () {
    var i = $(this).index();  //当前事件触发事件对象的索引值
    num = num1 = i;
    $(this).addClass("con").siblings().removeClass("con"); //对当前小圆点添加con类样式
    LsolideUl.stop().animate({ "left": - i * LsolideUls0W }, "fast");  //图片轮播
})
var num = 0;
var num1 = 0;
LsolideUl.find("li").first().clone().appendTo(LsolideUl);
var timer = setInterval(fn, 5000);
function fn() {
    // 图片轮播
    num++;
    if (num > 5) {
        LsolideUl.css("left", "0px");
        num = 1;
    }
    LsolideUl.stop().animate({ "left": - num * LsolideUls0W }, "fast");
    // 小圆点轮播
    num1++;
    if (num1 > 4) {
        num1 = 0
    }
    LsolideOls.eq(num1).addClass("con").siblings().removeClass("con");
}

// 视频图文展示栏

var RsBody = $("#Rs_body");
var videoes = $("#Rs_body .videoes");
var scroll1 = $("#Rs_body .scroll");
var bar1 = $("#Rs_body .scroll .bar");

Myscorll(RsBody, videoes, scroll1, bar1);

// 自定义滚动条函数
function Myscorll(Iwindow, Icontent, Iscorll, Ibar) {

    Iwindow.mouseenter(function () {
        Ibar.stop().fadeIn("normal");
        $(this).mouseleave(function () {
            Ibar.stop().fadeOut("normal");
        })
    })

    Ibar
        .css("height", Iwindow.height() * Iscorll.height() / Icontent.height())
        .mousedown(function () {
            $(document).mousemove(function (event) {
                var event = event || window.event;
                var Hei = event.pageY - Iscorll.offset().top - Ibar.height() / 2;

                if (Hei <= 0) {
                    Hei = 0;
                } else if (Hei >= Iscorll.height() - Ibar.height()) {
                    Hei = Iscorll.height() - Ibar.height();
                }
                Ibar.css("top", Hei);
                Icontent.css("top", -Hei * (Icontent.height() - Iwindow.height()) / (Iscorll.height() - Ibar.height()));

                // 如何禁止鼠标移动时选中文本

            })
            $(document).mouseup(function () {
                $(this).off("mousemove");
            })
        })
}

// 英雄攻略   
var heroConUls = $("#hero_con ul li");
heroConUls.mouseenter(function () {
    $(this).addClass("con").siblings().removeClass("con");
})

// 更多英雄定位筛选 
// 英雄数组对象
var heroSort = [
    //热门
    {
        "鲁班七号": "lubanqihao",
        "亚瑟": "yase",
        "孙悟空": "sunwukong",
        "凯": "kai",
        "后羿": "houyi",
        "甄姬": "zhenji",
        "孙尚香": "sunshangxiang",
        "妲己": "daji",
        "庄周": "zhuangzhou",
        "安琪拉": "anqila",
        "典韦": "dianwei",
        "吕布": "lvbu",
        "诸葛亮": "zhugeliang",
        "韩信": "hanxin",
        "虞姬": "yuji",
        "李白": "libai",
        "钟馗": "zhongkui",
        "兰陵王": "lanlingwang",
        "百里守约": "bailishouyue",
        "王昭君": "wangzhaojun"
    },
    //坦克
    {
        "猪八戒": "zhubajie",
        "梦奇": "mengqi",
        "苏烈": "sulie",
        "东皇太一": "donghuangtaiyi",
        "刘邦": "liubang",
        "钟馗": "zhongkui",
        "张飞": "zhangfei",
        "庄周": "zhuangzhou",
        "牛魔": "niumo",
        "墨子": "mozi",
        "刘禅": "liuchan",
        "廉颇": "lianpo",
        "白起": "baiqi",
        "项羽": "xiangyu",
        "程咬金": "chengyaojin"
    },
    //战士
    {
        "马超": "machao",
        "曜": "yao",
        "盘古": "pangu",
        "李信": "lixin",
        "孙策": "sunce",
        "狂铁": "kuangtie",
        "凯": "kai",
        "刘备": "liubei",
        "宫本武藏": "gongbenwuzang",
        "哪吒": "neza",
        "杨戬": "yangjian",
        "橘右京": "juyoujing",
        "雅典娜": "yadianna",
        "夏侯惇": "xiahoudun",
        "关羽": "guanyu",
        "吕布": "lvbu",
        "达摩": "damo",
        "老夫子": "laofuzi",
        "典韦": "dianwei",
        "曹操": "caocao",
        "亚瑟": "yase",
        "孙悟空": "sunwukong",
        "钟无艳": "zhongwuyan",
        "赵云": "zhaoyun"
    },
    //刺客
    {
        "云中君": "yunzhongjun",
        "司马懿": "simayi",
        "元歌": "yuange",
        "裴擒虎": "peiqinhu",
        "百里玄策": "bailixuance",
        "李白": "libai",
        "娜可露露": "nakelulu",
        "兰陵王": "lanlingwang",
        "花木兰": "huamulan",
        "韩信": "hanxin",
        "露娜": "luna",
        "阿珂": "ake"
    },
    //法师
    {
        "嫦娥": "change",
        "上官婉儿": "shangguanwaner",
        "沈梦溪": "shenmengxi",
        "米莱狄": "milaidi",
        "弈星": "yixing",
        "杨玉环": "yangyuhuan",
        "女娲": "nvwa",
        "干将莫邪": "ganjiangmoye",
        "诸葛亮": "zhugeliang",
        "不知火舞": "buzhihuowu",
        "貂蝉": "diaochan",
        "芈月": "minyue",
        "张良": "zhangliang",
        "安琪拉": "anqila",
        "妲己": "daji",
        "扁鹊": "bianque",
        "王昭君": "wangzhaojun",
        "高渐离": "gaojianli",
        "武则天": "wuzetian",
        "小乔": "xiaoqiao",
        "周瑜": "zhouyu",
        "甄姬": "zhenji",
        "姜子牙": "jiangziya",
        "嬴政": "yinzhen"
    },
    //射手
    {
        "伽罗": "jialuo",
        "公孙离": "gongsunli",
        "百里守约": "bailishouyue",
        "黄忠": "huangzhong",
        "成吉思汗": "chengjisihan",
        "马可波罗": "makeboluo",
        "虞姬": "yuji",
        "李元芳": "liyuanfang",
        "鲁班七号": "lubanqihao",
        "孙尚香": "sunshangxiang",
        "狄仁杰": "direnjie",
        "后羿": "houyi"
    },
    //辅助
    {
        "瑶": "yao1",
        "盾山": "dunshan",
        "明世隐": "mingshiyin",
        "鬼谷子": "guiguzi",
        "大乔": "daqiao",
        "太乙真人": "taiyizhenren",
        "蔡文姬": "caiwenji",
        "孙膑": "sunbin"
    }
];

var herosSortOls = $("#hero_con .hero_list .heros_sort ol li");
var herosOl = $("#hero_con .hero_list .heros ol");
var moreBtn = $("#hero_con .more_btn");
var heroList = $("#hero_con .hero_list");
// “更多英雄”按钮显示
moreBtn.mouseenter(function () {
    heroList.css("display", "block");
    herosOl.empty();
    for (key in heroSort[0]) {
        herosOl.append("<li><a href='javascript:;'><img src='./images/herolist-images/herolist/" + heroSort[0][key] + ".jpg' alt='" + key + "'>" + key + "</a> </li>");
    }
    fun();
    // 鼠标移开时，隐藏英雄列表
    heroList.mouseenter(function () {
        heroList.css("display", "block");
    }).mouseleave(function () {
        heroList.css("display", "none");
    })
}).mouseleave(function () {
    heroList.css("display", "none");
})
// 英雄列表筛选
herosSortOls.mouseenter(function () {
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    // 删除所有显示的li    
    herosOl.empty();
    // 添加应对定位的li
    for (key in heroSort[i]) {
        herosOl.append("<li><a href='javascript:;'><img src='./images/herolist-images/herolist/" + heroSort[i][key] + ".jpg' alt='" + key + "'>" + key + "</a> </li>");
    }
    fun();
})
// 英雄列表筛选函数
function fun() {
    // li鼠标悬停
    herosOl.find("li").mouseenter(function () {
        var _this = $(this);
        _this.addClass("con").click(function () {
            heroList.css("display", "none");
        }).siblings().removeClass("con");
        // 改变li的类名和在索引栏最后一个中显示

        var herodata = 0;
        // 遍历索引栏中所有li中英雄名字，判断是否与筛选栏中所选中英雄名称相同
        // 相同时，改变当前索引栏中li类名，并且使得herodata = 1;
        heroConUls.find(".inform p span:eq(0)").each(function () {
            if (_this.find("img").attr("alt") == $(this).text()) {
                herodata = 1;
                $(this).parents("li").addClass("con").siblings().removeClass("con");
            }
        });
        // 如果不相同时，执行以下代码
        if (herodata == 0) {
            heroConUls
                .last()
                .addClass("con")
                .find("img")
                .attr(
                    {
                        "src": _this.find("img").attr("src"),
                        "alt": _this.find("img").attr("alt")
                    })
                .siblings(".inform")
                .find("p span:eq(0)")
                .text(_this.find("img").attr("alt"))
                .parents("li")
                .siblings()
                .removeClass("con");
        }

    })
}

// TV按钮显示

var UL_TVs = $(".UL_TV li");
UL_TVs.mouseenter(function () {
    $(this)
        .find(".TV_btn")
        .stop()
        .css("display", "block");
}).mouseleave(function () {
    $(this)
        .find(".TV_btn")
        .stop()
        .css("display", "none");
})

// 精品栏目tab栏
var boutiqueConTit = $("#boutique_con .tit");
var boutiqueConTitUl = $("#boutique_con .tit ul");
var Scroll2 = $("#boutique_con .tit .scroll");
var Bar2 = $("#boutique_con .tit .scroll .bar");
var FirstTime = $("#FirstTime");
var TVBody = $("#boutique_con .TV_body");

Myscorll(boutiqueConTit, boutiqueConTitUl, Scroll2, Bar2);
BULSFT(boutiqueConTitUl,FirstTime,TVBody)

// 赛事精品tab栏
var boutiqueConTit2 = $("#boutique_con2 .tit");
var boutiqueConTitUl2 = $("#boutique_con2 .tit ul");
var Scroll3 = $("#boutique_con2 .tit .scroll");
var Bar3 = $("#boutique_con2 .tit .scroll .bar");
var FirstTime2 = $("#FirstTime2");
var TVBody2 = $("#boutique_con2 .TV_body");

Myscorll(boutiqueConTit2, boutiqueConTitUl2, Scroll3, Bar3);
BULSFT(boutiqueConTitUl2,FirstTime2,TVBody2)

// 展开收起赛事精品tab栏函数
function BULSFT(tabUL,FTbtn,tabDIV) {
    tabUL.find("li").mouseenter(function () {
        $(this)
            .addClass("con")
            .siblings()
            .removeClass("con");
        FTbtn.find(".p1 span").text("“" + $(this).text() + "”");
    })

    var FTData = 0;
    FTbtn.click(function () {
        if (FTData == 0) {
            tabDIV.animate({ "height": "744px" }, 10);
            $(this).find(".p1").css("display", "none").next().css("display", "block");

            FTData = 1;
        } else {
            tabDIV.animate({ "height": "360px" }, 10);
            $(this).find(".p1").css("display", "block").next().css("display", "none");

            FTData = 0;
        }

    })

}

// 图文攻略


var top_nav_uls = $("#top_nav ul li");

top_nav_uls.mouseenter(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .parents("#top_nav")
        .next()
        .find("ul")
        .eq(i)
        .css("display","block")
        .siblings()
        .css("display","none");
})

// 技能攻略
var top_nav_uls = $("#KI_strate .top_nav ul li");
var KI_content_man = $("#KI_strate .KI_content .man");

top_nav_uls.mouseenter(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .parents(".top_nav")
        .next()
        .find(".man")
        .eq(i)
        .css("display","block")
        .siblings()
        .css("display","none");
})

// 召唤师技能
var kill_nav_uls = $("#mankill .kill_nav ul li");
var kill_details_uls = $("#mankill .kill_details ul li");
kill_nav_uls.mouseenter(function(){
    $(this)
    .css({"color" : "#edc040","fontWeight" : "600"})
    .find("img")
    .stop()
    .css("transform","scale(1.1)");
}).click(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .css({"color" : "#666666","fontWeight" : "400"});
    kill_details_uls
        .eq(i)
        .css("display","block")
        .siblings()
        .css("display","none");

}).mouseleave(function(){
    $(this)
        .find("img")
        .stop()
        .css("transform","scale(1)");
    if($(this).attr("class") != "con"){
        $(this).css({"color" : "#666666","fontWeight" : "400"}) 
    }
})
// 局内道具
var manprop_uls = $("#manprop ul li");

manprop_uls.mouseenter(function(){
    $(this)
        .mousemove(function(event){

            $(this).find(".propDetail").css({
                "top" : event.pageY - $(this).offset().top - 50,
                "left" : event.pageX - $(this).offset().left + 50
            })
        })
        .find(".propDetail")
        .css("display","block");
}).mouseleave(function(){
    $(this).find(".propDetail").css("display","none");
})














