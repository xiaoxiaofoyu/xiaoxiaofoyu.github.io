// 大背景图
// 1.0 二维码动态滑线动画
var download_code_line = $("#download_code .line");

setInterval(line, 10);

// 1.1 动态滑线函数
var num1 = 2;
function line() {
    num1 == 146 ? num1 = 2 : num1++;
    download_code_line.animate({ "top": num1 }, 10);
}

// 2.0 设备下载按钮显示隐藏动画
var download_facility_on_btn1 = $("#download_facility i");

setInterval(on_btn, 300);

// 2.1 下载按钮显示隐藏函数
var num2 = 0;
function on_btn() {
    num2++;
    if (num2 == 1) {
        download_facility_on_btn1
            .eq(0)
            .fadeOut("slow");
    } else if (num2 == 2) {
        download_facility_on_btn1
            .eq(1)
            .fadeOut("slow");
    } else if (num2 == 3) {
        download_facility_on_btn1
            .eq(2)
            .fadeOut("slow");
    } else if (num2 == 5) {
        download_facility_on_btn1
            .fadeIn("slow")
        num2 = -1;
    }

}
// 3.0 videos播放按钮动画
var btn_video_1 = $("#btn_video .btn_video_1");

setInterval(btn_video, 1000);

var num3 = 0;
function btn_video() {
    num3++;
    if (num3 == 1) {
        btn_video_1
            .css({ "transform": "scale(1.1)" })
            .next()
            .css({ "transform": "scale(1)" });
    } else if (num3 == 2) {
        btn_video_1
            .css({ "transform": "scale(1)" })
            .next()
            .css({ "transform": "scale(1.2)" });
        num3 = 0;
    }
}

// 头部
// 1.0 轮播图
var solideUlsW = $("#top_solide ul li:eq(0)").width();
var solideOls = $("#top_solide ol li");
var solide_next = $("#top_solide .next");
var num6 = 0;

solideOls.mouseenter(function () {          //小圆点悬停切换
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .parent()
        .siblings("ul")
        .stop()
        .animate({ "left": - i * solideUlsW }, "fast");     //图片随小圆点轮播
    num6 = i;
})
solide_next.click(function () {    //右按钮点击事件
    num6++;
    if (num6 > solideOls.length - 1) {
        num6 = 0;
    }
    solide01();
}).prev().click(function () {
    num6--;
    if (num6 < 0) {
        num6 = solideOls.length - 1;
    }
    // }
    solide01();
})
// 1.1 轮播图函数
function solide01() {
    solideOls
        .eq(num6)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .parent()
        .siblings("ul")
        .stop()
        .animate({ "left": - num6 * solideUlsW }, "fast");

    // 当索引值大于视窗所含li数量时，对容器ol的left值进行调整
    if (num6 > 2) {
        solideOls
            .parent()
            .animate({ "left": - (num6 - 2) * solideOls.eq(0).width() }, 10)
    } else {
        solideOls
            .parent()
            .animate({ "left": 0 }, 10)
    }
}
// 1.2 定时器向右轮播
var solide01Timer = setInterval(function () {
    num6++;
    if (num6 > solideOls.length - 1) {
        num6 = 0;
    }
    solide01();
}, 3000);
// 1.3 鼠标悬停清除定时器
$("#top_solide").mouseenter(function () {
    clearInterval(solide01Timer);
}).mouseleave(function () {
    clearInterval(solide01Timer);
    solide01Timer = setInterval(function () {
        num6++;
        if (num6 > solideOls.length - 1) {
            num6 = 0;
        }
        solide01();
    }, 3000);
})

// 2.0 新闻资讯tab选项卡
var hot_nav_uls = $("#hot .hot_nav ul li");
var hot_list_uls = $("#hot .hot_list ul");
hot_nav_uls.mouseenter(function () {
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    hot_list_uls
        .eq(i)
        .addClass("con")
        .siblings()
        .removeClass("con");

})
//  格斗家专区
// 1.0 虚拟数据库
var arr01 = [
    // 特瑞·博加德
    {
        "国籍：": "美国",
        "登场年龄：": "24",
        "身高：": "185公分",
        "体重：": "83公斤",
        "星座：": "巨蟹座",
        "爱好：": "旅行 NBA",
        "血型：": "O",
        "姓名": "特瑞·博加德",
        "KDA": "./images/01官网首页/fighter/f-l-1.png"
    },
    // 八神庵
    {
        "国籍：": "日本",
        "登场年龄：": "20",
        "身高：": "182公分",
        "体重：": "76公斤",
        "星座：": "巨蟹座",
        "爱好：": "音乐",
        "血型：": "O",
        "姓名": "八神庵",
        "KDA": "./images/01官网首页/fighter/f-l-2.png"
    },
    // 不知火舞
    {
        "籍国：": "日本",
        "登场年龄：": "18",
        "身高：": "166公分",
        "体重：": "50公斤",
        "星座：": "巨蟹座",
        "爱好：": "厨艺",
        "血型：": "B",
        "姓名": "不知火舞",
        "KDA": "./images/01官网首页/fighter/f-l-3.png"
    },
    // 草薙京
    {
        "国籍：": "日本 ",
        "登场年龄：": "19 ",
        "身高：": "181公分 ",
        "体重：": "75公斤 ",
        "星座：": "巨蟹座 ",
        "爱好：": "俳句 书法 ",
        "血型：": "B",
        "姓名": "草薙京",
        "KDA": "./images/01官网首页/fighter/f-l-4.png"
    }
]
// 1.1 背景移动
var Fighter = $("#Fighter");
var num4 = 0;
setInterval(function () {
    num4--;
    Fighter.css("backgroundPosition", num4);
}, 30);
// 1.2 圆点触发
var middle_uls = $("#details_con_middle ul li");
var top_name = $("#details_con_top .left .name");
var top_dds = $("#details_con_top .left dl dd");
var right_KDA = $("#details_con_top .right .KDA");
var picture = $("#picture");
var num5 = 0;
middle_uls.click(function () {
    var i = $(this).index();
    num5 = i;
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    // 姓名替换
    top_name.text(arr01[i]["姓名"]).stop().animate({ "left": "-100", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 900);
    });
    // 详情数据替换
    top_dds.each(function (a, b) {
        top_dds.eq(a).find("b").text(arr01[i][top_dds.eq(a).find("i").text()]);
    }).parent().stop().animate({ "left": "-100", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 800);
    });
    // KDA图示替换
    right_KDA.attr("src", arr01[i]["KDA"]).stop().animate({ "left": "-100", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 800);
    }).prev().stop().animate({ "left": "-50", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 700);
    });
    // 格斗家图像轮换
    picture.find("img").eq(i).stop().animate({ "left": "1500", "opacity": "0" }, 0, function () {
        $(this).stop().animate({ "left": "432", "opacity": "1" }, "slow");
    }).siblings().stop().animate({ "left": "1500", "opacity": "0" }, "slow");
}).parent().next().click(function () {  //右按钮
    num5 == 0 ? num5 = 3 : num5--;
    change01();
}).next().click(function () {
    num5 == 3 ? num5 = 0 : num5++;
    change01();
})
// 1.20 切换函数包
function change01() {
    middle_uls
        .eq(num5)
        .addClass("con")
        .siblings()
        .removeClass("con");
    // 姓名替换
    top_name.text(arr01[num5]["姓名"]).stop().animate({ "left": "-100", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 900);
    });
    // 详情数据替换
    top_dds.each(function (a, b) {
        top_dds.eq(a).find("b").text(arr01[num5][top_dds.eq(a).find("i").text()]);
    }).parent().stop().animate({ "left": "-100", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 800);
    });
    // KDA图示替换
    right_KDA.attr("src", arr01[num5]["KDA"]).stop().animate({ "left": "-100", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 800);
    }).prev().stop().animate({ "left": "-50", "opacity": "0" }, 0, function () {
        $(this).animate({ "left": "0", "opacity": "1" }, 700);
    });
    // 格斗家图像轮换
    picture.find("img").eq(num5).stop().animate({ "left": "1500", "opacity": "0" }, 0, function () {
        $(this).stop().animate({ "left": "432", "opacity": "1" }, "slow");
    }).siblings().stop().animate({ "left": "1500", "opacity": "0" }, "slow");
}
// 1.21 自动轮播
setInterval(function () {
    num5 == 3 ? num5 = 0 : num5++;
    change01();
}, 7000)

// 2.0 攻略
// 2.1 tab选项卡
var gl_nav_uls = $("#strategy_con .gl .gl_nav ul li");

gl_nav_uls.mouseenter(function () {
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .parents(".gl_nav")
        .next()
        .find("ul")
        .eq(i)
        .addClass("clearfix con")
        .siblings()
        .removeClass("con");
})
// 2.2 扇子旋转
var strategy_con_xs = $("#strategy_con .xs");

strategy_con_xs.mouseenter(function () {
    $(this)
        .find(".xs_con h1 em")
        .css({ "transform": "rotateY(360deg)", "transition": "1s" });
}).mouseleave(function () {
    $(this)
        .find(".xs_con h1 em")
        .css({ "transform": "rotateY(0deg)", "transition": "0s" });
})

// 3.0 视频中心
var video_nav_uls = $(".video_con .video_nav ul li");
video_nav_uls.mouseenter(function () {
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con")
        .parents(".video_nav")
        .next()
        .find("ul")
        .eq(i)
        .addClass("clearfix con")
        .siblings()
        .removeClass("con");
})

// 游戏特色
// 1.0 轮播图
var json01 = [
    // 1
    {
        "width": "655px",
        "height": "375px",
        "top": "166px",
        "left": "0",
        "z-index": "300"
    },
    // 2
    {
        "width": "734px",
        "height": "420px",
        "top": "143px",
        "left": "70px",
        "z-index": "400"
    },
    // 3
    {
        "width": "874px",
        "height": "500px",
        "top": "102px",
        "left": "160px",
        "z-index": "500"
    },
    // 4
    {
        "width": "734px",
        "height": "420px",
        "top": "143px",
        "left": "398px",
        "z-index": "200"
    },
    // 5
    {
        "width": "655px",
        "height": "375px",
        "top": "166px",
        "left": "547px",
        "z-index": "100"
    }
]
var solide_con_uls = $("#solide_con ul li");
var solide_con_next = $("#solide_con .next");
var solide_con_ols = $("#solide_con ol li");
// 默认布局
solide_con_uls.each(function (a, b) {
    solide_con_uls.eq(a).css(json01[a]);
})
var num7 = 0;
var num8 = 2;
solide_con_next.click(function () {   //右按钮
    json01.push(json01.shift());
    solide_con_uls.each(function (a, b) {
        solide_con_uls
            .eq(a)
            .stop()
            .animate(json01[a], "fast");
    })
    // 小圆点
    num7 >= 4 ? num7 = 0 : num7++;
    solide_con_ols.eq(num7).addClass("con").siblings().removeClass("con");
    // man 和 char 回调函数，晃动效果
    num8 <= 0 ? num8 = 4 : num8--;
    solide_con_uls.eq(num8).find(".man").animate({ "left": "874px" }, 0, function () {  //man
        $(this).animate({ "left": "-30px" }, "slow", function () {
            $(this).animate({ "left": "30px" }, 150, function () {
                $(this).animate({ "left": "-10px" }, 150, function () {
                    $(this).animate({ "left": "0px" }, 150);
                })
            })
        });
    }).next().animate({ "left": "-874px" }, 0, function () {                      //char
        $(this).animate({ "left": "30px" }, "slow", function () {
            $(this).animate({ "left": "-30px" }, 150, function () {
                $(this).animate({ "left": "10px" }, 150, function () {
                    $(this).animate({ "left": "0px" }, 150);
                })
            })
        })
    })
}).prev().click(function () {  //左按钮
    json01.unshift(json01.pop());
    solide_con_uls.each(function (a, b) {
        solide_con_uls
            .eq(a)
            .stop()
            .animate(json01[a], "fast");
    })
    // 小圆点
    num7 <= 0 ? num7 = 4 : num7--;
    solide_con_ols.eq(num7).addClass("con").siblings().removeClass("con");
    // man 和 char 回调函数，晃动效果
    num8 >= 4 ? num8 = 0 : num8++;
    solide_con_uls.eq(num8).find(".man").animate({ "left": "874px" }, 0, function () {  //man
        $(this).animate({ "left": "-30px" }, "slow", function () {
            $(this).animate({ "left": "30px" }, 150, function () {
                $(this).animate({ "left": "-10px" }, 150, function () {
                    $(this).animate({ "left": "0px" }, 150);
                })
            })
        });
    }).next().animate({ "left": "-874px" }, 0, function () {                      //char
        $(this).animate({ "left": "30px" }, "slow", function () {
            $(this).animate({ "left": "-30px" }, 150, function () {
                $(this).animate({ "left": "10px" }, 150, function () {
                    $(this).animate({ "left": "0px" }, 150);
                })
            })
        })
    })
})
// 2.0 定时器轮播
setInterval(function () {
    json01.push(json01.shift());
    solide_con_uls.each(function (a, b) {
        solide_con_uls
            .eq(a)
            .stop()
            .animate(json01[a], "fast");
    })
    // 小圆点
    num7 >= 4 ? num7 = 0 : num7++;
    solide_con_ols.eq(num7).addClass("con").siblings().removeClass("con");
    // man 和 char 回调函数，晃动效果
    num8 <= 0 ? num8 = 4 : num8--;
    solide_con_uls.eq(num8).find(".man").animate({ "left": "874px" }, 0, function () {  //man
        $(this).animate({ "left": "-30px" }, "slow", function () {
            $(this).animate({ "left": "30px" }, 150, function () {
                $(this).animate({ "left": "-10px" }, 150, function () {
                    $(this).animate({ "left": "0px" }, 150);
                })
            })
        });
    }).next().animate({ "left": "-874px" }, 0, function () {                      //char
        $(this).animate({ "left": "30px" }, "slow", function () {
            $(this).animate({ "left": "-30px" }, 150, function () {
                $(this).animate({ "left": "10px" }, 150, function () {
                    $(this).animate({ "left": "0px" }, 150);
                })
            })
        })
    })
}, 4000);









