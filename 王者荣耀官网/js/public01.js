// 顶部导航条
var Nav =  $("#Nav");
var Nav_tab = Nav.find(".Nav_tab");

Nav.mouseenter(function(){
    Nav_tab.stop().animate({"height" : 285},300);
}).mouseleave(function(){
    Nav_tab.stop().animate({"height" : 0},300);
})

// 游戏排行榜
var list = $("#list");

list.mouseenter(function(){
    $(this)
        .find(".list_box")
        .css("display","block")
        .find("#list_ol li")
        .mouseenter(function(){
            $(this)
                .addClass("con clearfix")
                .siblings()
                .removeClass("con");
        })
}).mouseleave(function(){
    $(this)
        .find(".list_box")
        .css("display","none");
})

// 登录弹出框
var top_login_btn = $("#top_login_btn");
var welcome = $("#welcome");

top_login_btn.click(function(){ //点击弹出登录框
    welcome
        .css("display","block")
        .find(".del")
        .click(function(){ //点击隐藏登录框
            welcome.css("display","none");
        })
        .next()
        .click(function(){ //点击弹出微信登录框  
            $(this)
                .next()
                .css("display","block")
                .find(".wechat_del")
                .click(function(){   //点击隐藏微信登录框  
                    $(this)
                        .parents(".wechat-login")
                        .css("display","none");
                })
        })
        .siblings(".QQ")
        .click(function(){ //点击弹出QQ登录框
            $(this)
                .next()
                .css("display","block")
                .find(".QQ_del")
                .click(function(){    //点击隐藏QQ登录框
                    $(this).parent().css("display","none");
                })
                .next()
                .find(".QQ-code-box .QQ-code")
                .mouseenter(function(){   //鼠标悬停右移，且显示扫码指引图
                    $(this)
                        .next()
                        .css("display","block")
                        .parent()
                        .stop()
                        .animate({"left" : "-67px"},500);
                }).mouseleave(function(){  //鼠标离开左移，且隐藏扫码指引图
                    $(this)
                        .next()
                        .css("display","none")
                        .parent()
                        .stop()
                        .animate({"left" : "0px"},500);
                })
                .parent()
                .siblings(".number-login")
                .find("ul li")
                .eq(0)
                .click(function(){   //点击之后隐藏二维码登录区块，且显示账号密码登录区块
                    $(this)
                        .parents(".QQ-login-box")
                        .css("display","none")
                        .next()
                        .css("display","block")
                        .find("h2 a")
                        .click(function(){   //点击之后隐藏账号密码登录区块，且显示二维码登录区块
                            $(this)
                                .parents(".QQ-login-box")
                                .css("display","none")
                                .prev()
                                .css("display","block");
                        })
                })   
        })
})

