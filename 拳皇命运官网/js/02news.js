// 左栏
// 1.0 轮播图
var left_solide_ols = $("#left_solide ol li");
var left_solide_ul = $("#left_solide ul");
left_solide_ols.mouseenter(function(){
    var i = $(this).index();
    $(this)
        .addClass("con")
        .siblings()
        .removeClass("con");
    left_solide_ul
        .stop()
        .animate({"left" : -i * 247},"fast");
})

