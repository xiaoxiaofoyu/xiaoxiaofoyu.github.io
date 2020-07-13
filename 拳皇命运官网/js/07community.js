// 滚动滚动条，顶部变化
var Hearder = $("#Hearder");
var h_list = $("#Hearder .Hearder_con .h_list");
$(window).scroll(function(){
    var top = $(document).scrollTop();
    if(top == 0){
        Hearder
            .stop()
            .animate({"height":"90px"},"normal")
            .find(".Hearder_con")
            .stop()
            .animate({"paddingTop":"21px"})
            .find(".h_left .logo")
            .stop()
            .animate({"width":"180px","height":"34px"},"normal")
            .next()
            .stop()
            .animate({"marginTop":"3px"},"normal")
            .parent()
            .next()
            .find("ul")
            .stop()
            .animate({"paddingTop":"9px"},"normal");
        h_list.stop().fadeIn("normal");
    }else {
        Hearder
            .stop()
            .animate({"height":"50px"},"normal")
            .find(".Hearder_con")
            .stop()
            .animate({"paddingTop":"10px"})
            .find(".h_left .logo")
            .stop()
            .animate({"width":"165px","height":"30px"},"normal")
            .next()
            .stop()
            .animate({"marginTop":"0px"},"normal")
            .parent()
            .next()
            .find("ul")
            .stop()
            .animate({"paddingTop":"3px"},"normal");
            h_list.stop().fadeOut("normal");
    }
    // Hearder.css("height","50px");
})

// 点击推荐搜索
// var h_search_inp = $("#Hearder .Hearder_con .h_left .search input");
// h_list.find("ul li").click(function(){
//     h_search_inp.attr("value",$(this).text());
// })
