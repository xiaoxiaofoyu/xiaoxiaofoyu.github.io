// 底部

var nav_con_uls = $("#footer_nav .nav_con ul li");

nav_con_uls.mouseenter(function(){
    $(this).find(".erweima").stop().animate({"top" : "-148px","opacity" : "1"},"normal");
}).mouseleave(function(){
    $(this).find(".erweima").stop().animate({"top" : "-128px","opacity" : "0"},"normal");
})