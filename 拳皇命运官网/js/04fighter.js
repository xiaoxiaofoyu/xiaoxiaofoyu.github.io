// 列表内容
// 01 整除3的li右外边距
var list_content_uls = $("#list_content ul li");
marW(list_content_uls);

// 01-1 改变右外边距函数
function marW(ww) {
    ww.each(function (a, b) {
        if ((a + 1) % 3 == 0) {
            ww.eq(a).css("marginRight", "44px");
        }
    })
}

// 02 鼠标悬停变换混合模式属性luminosity --> normal
list_content_uls.mouseenter(function () {
    $(this).find("a img").css({ "mix-blend-mode": "normal" });
}).mouseleave(function () {
    $(this).find("a img").css({ "mix-blend-mode": "luminosity" });
})

// 03 格斗家导航
var list_nav_uls = $("#list_nav ul li");
// SSR
var list_SSR = $("#list_content ul li[data-select='SSR']");
// SR
var list_SR = $("#list_content ul li[data-select='SR']");
// R
var list_R = $("#list_content ul li[data-select='R']");
// UR
var list_UR = $("#list_content ul li[data-select='UR']");

list_nav_uls.click(function () {
    // 切换按键色系
    $(this).addClass("con").siblings().removeClass("con");
    // 重置li右外边距
    list_content_uls.css("marginRight", "16px");
    // 格斗家定位筛选
    list_content_uls.css("display", "none");
    switch ($(this).index()) {
        case 1: 
            list_SSR.css("display", "block"); 
            marW(list_SSR);   //调用自定义函数改变li右外边距
            break;
        case 2: 
            list_SR.css("display", "block"); 
            marW(list_SR);
            break;
        case 3: 
            list_R.css("display", "block"); 
            marW(list_R);
            break;
        case 4: 
            list_UR.css("display", "block");
            marW(list_UR);
            break;
        default:
            list_content_uls.css("display", "block");
            marW(list_content_uls);
            break;
    }
    // 改变li右外边距
})