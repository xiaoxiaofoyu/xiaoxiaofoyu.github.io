// 格斗家技能
// 1.0 技能
var FS_skillUls = $("#FS_skill ul li");
var skill_name = $("#FS_skill .skill_name");
var sk_time = $("#FS_skill .skill_name .sk_time");
var sk_name = $("#FS_skill .skill_name .sk_name");
var sk_btn = $("#FS_skill .sk_details .sk_btn");

FS_skillUls.mouseenter(function () {
    // 1.1 改变技能图标颜色
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    // 1.2 改变skill_name宽度
    skill_name.css("width", sk_time.width() + sk_name.width() + 70);
    // 1.3 判断索引值并改变skill_name位置和排布方式
    if (i > 4) {
        skill_name
            .find("p")
            .css("float", "right")
            .parent()
            .stop()
            .animate({ "left": i * 103 - (sk_time.width() + 70) }, 50);
    } else {
        skill_name
            .find("p")
            .css("float", "left")
            .parent()
            .stop()
            .animate({ "left": i * 103 }, 50);
    }
    // 1.4 改变sk_btn的位置
    sk_btn
        .stop()
        .animate({ "left": i * 103 + 30 }, 50);
})
// 格斗家技能end
// 格斗家攻略
// 1.0 视频攻略
var vi_navUls01 = $("#sc_video .vi_nav ul li");
var vi_conUls = $("#sc_video .vi_con ul li");
// 1.1 改变导航栏样式
vi_navUls01.mouseenter(function () {
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
})
vi_conUls.mouseenter(function () {
    $(this)
        .find(".shadow")
        .stop()
        .fadeOut("fast");
}).mouseleave(function () {
    $(this)
        .find(".shadow")
        .stop()
        .fadeIn("fast");
});
// 2.0 图文攻略
var vi_navUls02 = $("#sc_ptext .vi_nav ul li");
var pt_conUl = $("#sc_ptext .pt_con ul");
// 2.1 改变导航栏样式
vi_navUls02.mouseenter(function () {
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    // 2.2 切换pt_con内容
    pt_conUl
        .eq(i)
        .addClass("con")
        .siblings()
        .removeClass("con");
})

// 格斗家攻略end
// 同人作品
var FC_conUls = $("#FC_con ul li");
FC_conUls.mouseenter(function(){
    $(this)
        .find("img")
        .css({"transform": "scale(1.1)"})
        .siblings(".shadow")
        .stop()
        .fadeIn();
}).mouseleave(function(){
    $(this)
        .find("img")
        .css({"transform": "scale(1)"})
        .siblings(".shadow")
        .stop()
        .fadeOut();
})
// 同人作品end