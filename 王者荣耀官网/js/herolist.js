// 英雄介绍
var herolistNav = $("#herolist .herolist_nav ul li");
var herolistDetails = $("#herolist .herolist_details");




herolistNav.click(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    herolistDetails
        .eq(i)
        .css("display","block")
        .siblings()
        .css("display","none")
        .eq(0)
        .css("display","block");
})
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


// 英雄介绍
var sorts = $("#herolist_con_top ul li");
var tank = $("#herolist_con_body ul li[data-sort='tank']");
var input = $("#search input");

//鼠标点击定位筛选
sorts.click(function () {
    $.each(sorts, function (i) {
        sorts.eq(i).find("span").removeClass("con");
    })
    $(this).find("span").addClass("con");

    var sortsArr = ["free", "recom", "", "tank", "warrior", "assassin", "mage", "archer", "support"]

    $("#herolist_con_body ul li").css("display", "none");

    if (sorts.index($(this)) == 2) {
        $("#herolist_con_body ul li[data-sort]").css("display", "block");
    } else {
        $("#herolist_con_body ul li[data-sort='" + sortsArr[sorts.index($(this))] + "']").css("display", "block");
        $("#herolist_con_body ul li[data-sort2='" + sortsArr[sorts.index($(this))] + "']").css("display", "block");
        $("#herolist_con_body ul li[data-sort3='" + sortsArr[sorts.index($(this))] + "']").css("display", "block");
        $("#herolist_con_body ul li[data-sort4='" + sortsArr[sorts.index($(this))] + "']").css("display", "block");
    }
})

// 输入框搜索筛选
input.focus(function () {
    $(this).attr("placeholder", "").blur(function () {
        if ($(this).val() == "") {
            $(this).attr("placeholder", "请输入你想搜索的英雄名");
            $.each(sorts, function (i) {
                sorts.eq(i).find("span").removeClass("con");
            })
            sorts.eq(2).find("span").addClass("con");
            $("#herolist_con_body ul li").css("display", "block");
        }
    }).change(function () {
        $("#herolist_con_body ul li").css("display", "none");
        $("#herolist_con_body ul li a img[alt = '" + input.val() + "']").parents("li").css("display", "block");
    })
})

// 召唤师技能
var skillsUls = $("#summoner_con .skills ul li");
var sdetailsUls = $("#summoner_con .sdetails ul li");

skillsUls.click(function () {
    var i = $(this).index();
    sdetailsUls
        .eq(i)
        .addClass("con")
        .siblings()
        .removeClass("con");
})

// 局内道具
// 01 鼠标悬停弹出详情
var propConBodyUls = $("#prop_con_body ul li");

propConBodyUls.mouseenter(function () {
    $(this)
        .find(".propDetail")
        .css({ "display": "block" })
        .parent()
        .mousemove(function (event) {
            $(this).find(".propDetail").css({
                "left": event.pageX - $(this).offset().left + 50 + "px",
                "top": event.pageY - $(this).offset().top - 50 + "px"
            });
        })
        .mouseleave(function () {
            $(this)
                .find(".propDetail")
                .css({ "display": "none" });
        })
})
// 02 筛选

var propConTopUls01 = $("#prop_con_top_ul01 li");
var propConTopUls02 = $("#prop_con_top_ul02 li");
var propConTopUls02bjtw = $("#prop_con_top_ul02 li.bjtw");

// 默认效果
$("#prop_con_body ul li[data-sort = 'breakout']").css("display", "none");
propConTopUls02bjtw.css("display", "none");

propConTopUls01.click(function () {
    propConBodyUls.css("display", "none");
    propConTopUls02.eq(0).find("span").addClass("con").parent().siblings().find("span").removeClass("con");
    if (propConTopUls01.index($(this)) == 0) {
        propConTopUls02.css("display", "block");
        propConTopUls02bjtw.css("display", "none");
        propConTopUls01.eq(0)
            .find("span")
            .addClass("con")
            .parent()
            .siblings()
            .find("span")
            .removeClass("con");
        $("#prop_con_body ul li[data-sort = 'normal']").css("display", "block");
    } else {
        propConTopUls02.css("display", "none");
        propConTopUls02.eq(0).css("display", "block");
        propConTopUls02bjtw.css("display", "block");
        propConTopUls01.eq(1)
            .find("span")
            .addClass("con")
            .parent()
            .siblings()
            .find("span")
            .removeClass("con");
        $("#prop_con_body ul li[data-sort = 'breakout']").css("display", "block");
    }
})

var sortsArr02 = ["", "attack", "spells", "defense", "move", "jungle", "assist", "equip", "prop", "orskill"];

propConTopUls02.click(function () {

    if (propConTopUls02.index($(this)) == 0) {
        propConBodyUls.css("display", "block");
        $(this).find("span").addClass("con").parent().siblings().find("span").removeClass("con");
    } else {
        propConBodyUls.css("display", "none");
        $(this).find("span").addClass("con").parent().siblings().find("span").removeClass("con");
        $("#prop_con_body ul li[data-sort1 = '" + sortsArr02[propConTopUls02.index($(this))] + "']").css("display", "block");
    }


})






