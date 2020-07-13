// 区块2-最新攻略
// 1.0 tab选项卡
var nav_con_as = $("#Sec2_right .r_nav .nav_con a");
var r_cons = $("#Sec2_right .R_Con .r_con");
nav_con_as.click(function(){
    var i = nav_con_as.index($(this));   //???
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    r_cons
        .eq(i)
        .addClass("r_con con")
        .siblings()
        .removeClass("con");
})
// 区块2-新手指引
// 1.0 手风琴导播
var man_con_tits = $("#man_con ul li .li_con .tit");
man_con_tits.click(function(){
    $(this)
        .parents("li")
        .stop()
        .animate({"width" : "793px"},"normal")
        .siblings()
        .stop()
        .animate({"width" : "80px"},0);
})
// 区块3-活动玩法
// 1.0 鼠标悬停事件
var act_con_uls = $("#act_con ul li");
act_con_uls.mouseenter(function(){
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
})

// 区块3-图文攻略
//1.0 鼠标点击事件
var body_nav_uls = $("#pt_body .body_nav ul li");
var body_con_ul = $("#pt_body .body_con ul");
body_nav_uls.click(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    body_con_ul
        .eq(i)
        .addClass("con")
        .siblings()
        .removeClass("con");
})
// 区块4-视频攻略
// 1.0 tab选项卡
var vid_nav_uls = $("#vid_con .vid_nav ul li")
var vid_body_ul = $("#vid_con .vid_body ul");
vid_nav_uls.click(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    vid_body_ul
        .eq(i)
        .addClass("con")
        .siblings()
        .removeClass("con");
})
// 2.0 鼠标悬停video按钮渐入渐出
vid_body_ul
    .find("li")
    .mouseenter(function(){
        $(this)
            .find(".video_btn")
            .stop()
            .fadeIn("normal");
    }).mouseleave(function(){
        $(this)
            .find(".video_btn")
            .stop()
            .fadeOut("normal");
    })
// 右侧导航栏end
// 1.0 鼠标悬停事件&点击事件
var R_NAV_uls = $("#R_NAV ul li");
R_NAV_uls.mouseenter(function(){
    $(this)
        .find("a")
        .css({"color": "#d12525","font-weight": "600"})
        .next()
        .css({"backgroundPosition" : "-359px -93px"})
        .parent()
        .siblings("li[class != 'con']")
        .find("a")
        .css({"color": "#585858","font-weight": "400"})
}).mouseleave(function(){
    $("#R_NAV ul li[class != 'con']")
        .find("a")
        .css({"color": "#585858","font-weight": "400"})
        .next()
        .css({"backgroundPosition" : "-359px -195px"})
        
}).click(function(){
    $(this).addClass("con").siblings().removeClass("con");
})

// 2.0 与滚动条事件触发使用

