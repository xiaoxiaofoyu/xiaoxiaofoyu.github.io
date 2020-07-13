// 导航条
// Nav_tab
var Nav = $("#Nav");
var NavTab = Nav.children[1];

Nav.onmouseenter = function () {
    animate(NavTab, { "height": 285 }, 15);
}
Nav.onmouseleave = function () {
    animate(NavTab, { "height": 0 }, 15);
}

// 导航条end
// ------------------------->
// 游戏排行榜
var list = $("#list");
var listBox = list.children[2];
var news = listBox.children;

for (var k = 0; k < news.length; k++) {
    news[k].index = k;
    news[k].onmouseover = function () {
        var ols = this.children[2].children;
        for (var i = 0; i < ols.length; i++) {
            ols[i].onmouseover = function () {
                for (var j = 0; j < ols.length; j++) {
                    ols[j].className = "clearfix";
                }
                this.className = "con clearfix";
            }
        }
    }
}



// list.onmouseover = function () {
//     listBox.style.display = "block";
// }
// list.onmouseout = function () {
//     listBox.style.display = "none";
// }

hide(list, listBox);

// 游戏排行榜end
// 轮播图
var solider = $("#solider");
var Picul = solider.children[0].children[0];
var Picli = Picul.children;

var Pwidth = Picli[0].offsetWidth;



var Btnol = $("#solider_btn_ol");
var Btnli = Btnol.children;

for (var i = 0; i < Btnli.length; i++) {

    Btnli[i].index = i;

    Btnli[i].onmouseover = function () {
        for (var j = 0; j < Btnli.length; j++) {
            Btnli[j].className = "";
        }
        this.className = "con";

        // Picul.style.left = - Pwidth * this.index + "px";

        animate(Picul, { "left": - Pwidth * this.index }, 10);

        num1 = num2 = this.index;

    }
}

var timer = setInterval(fun, 5000);
var num1 = 0;
var num2 = 0;



function fun() {

    num1++;
    if (num1 > Picli.length - 1) {
        Picul.style.left = "0px";
        num1 = 1;

    }
    animate(Picul, { "left": - Pwidth * num1 }, 10);

    num2++;
    if (num2 > Btnli.length - 1) {
        num2 = 0;
    }
    for (var j = 0; j < Btnli.length; j++) {
        Btnli[j].className = "";
    }
    Btnli[num2].className = "con";





}

solider.onmouseenter = function () {
    clearInterval(timer)
}
solider.onmouseleave = function () {
    timer = setInterval(fun, 5000);
}

// 轮播图end

// 轮播栏tab选项卡

var newsTit = $("#news_tit");
var newsTitUls = newsTit.children[0].children;
var newsBox = $("#news_box");

tabSolide(newsTitUls, newsBox, 5);

// 轮播栏tab选项卡end
// 内容中心tab选项卡 第一层
var Ctop = $("#Ctop");
var CtopUls = Ctop.getElementsByTagName("li");
var Body = $("#body");
var BodyBox = Body.children;

tabChange(CtopUls, BodyBox);
//------------ 内容中心tab选项卡 第二层

// --------------记得优化整合记得优化整合记得优化整合记得优化整合记得优化整合
//001
var Body = $("#body");
var BodyBox1 = Body.children[0];
var BodyConTopUls1 = BodyBox1.children[0].children[0].children;

var bodyConConUls1 = BodyBox1.children[1].children;

tabChange(BodyConTopUls1, bodyConConUls1);

//002
var BodyBox1 = Body.children[1];
var BodyConTopUls1 = BodyBox1.children[0].children[0].children;

var bodyConConUls1 = BodyBox1.children[1].children;

tabChange(BodyConTopUls1, bodyConConUls1);
//003
//------------ 内容中心tab选项卡 第二层 end
// 内容中心tab选项卡 第一层 end
// 选择英雄 

var bodyConTop = $("#body_con_top");
var heroList = $("#hero_list")

hide(bodyConTop, heroList)


var heroListTitOls = heroList.children[0].children[0].children;
var heroListConOls = heroList.children[1].children;


tabChange(heroListTitOls, heroListConOls)

// 选择英雄 end

//  英雄/皮肤
var heroCtop = $("#heroCtop");
var heroCtopUlS = heroCtop.children[0].getElementsByTagName("li");
var bodyBoxBox = $("#body_box_box");


tabSolide2(heroCtopUlS, bodyBoxBox, 10);

function tabSolide2(tabBtn, tabBox, tabTime) {

    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].index = i;
        tabBtn[i].onmouseenter = function () {
            for (var j = 0; j < tabBtn.length; j++) {
                tabBtn[j].className = "";
            }
            this.className = "con";

            animate(tabBox, { "left": - tabBox.children[0].offsetWidth * this.index }, tabTime);
        }
    }

}

//  英雄/皮肤 end



// 轮播式tab选项卡 函数
function tabSolide(tabBtn, tabBox, tabTime) {

    for (var i = 0; i < tabBtn.length - 1; i++) {
        tabBtn[i].index = i;
        tabBtn[i].onmouseenter = function () {
            for (var j = 0; j < tabBtn.length - 1; j++) {
                tabBtn[j].className = "";
            }
            this.className = "con";
            animate(tabBox, { "left": - tabBox.children[0].offsetWidth * this.index }, tabTime);
        }
    }

}
// 轮播式tab选项卡 函数end
// 切换式tab选项卡 函数

function tabChange(tabBtn, tabBoxes) {

    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].index = i;
        if (i == 0) {
            tabBtn[i].className = "con";
            tabBoxes[i].style.display = "block";
        }
        tabBtn[i].onmouseenter = function () {
            for (var j = 0; j < tabBtn.length; j++) {
                tabBtn[j].className = "";
                tabBoxes[j].style.display = "none";
            }
            this.className = "con";
            tabBoxes[this.index].style.display = "block";
        }
    }
}
// 切换式tab选项卡 函数 end

// 鼠标移入移出显示与隐藏 函数

function hide(obj, hideobj) {

    obj.onmouseenter = function () {
        hideobj.style.display = "block";
    }
    obj.onmouseleave = function () {
        hideobj.style.display = "none";
    }
}
// 鼠标移入移出显示与隐藏 函数 end


// 登录弹出框
var login = $("#login");
var welcome = $("#welcome");
var welLoginBox = $("#wel_login_box");
var del = welLoginBox.children[1];
var wechat = welLoginBox.children[2];
var QQ = welLoginBox.children[4];

onclickshow(login, welcome)
onclickhide(del, welcome)
// welcome.onmouseover = function(){
//     welcome.style.top = scroll().top +"px";
// }


// 微信登录
var wechatLogin = $("#wechat-login");
var wechatDel = wechatLogin.children[0].children[4];

wechat.onclick = function(){
    welcome.style.background = "rgba(255,255,255,0.7)";
    wechatLogin.style.display = "block";
}
wechatDel.onclick = function(){
    welcome.style.background = "rgba(255,255,255,0)";
    wechatLogin.style.display = "none";
}
// 微信登录end
// QQ登录
var QQLogin = $("#QQ-login");
var QQ_del = QQLogin.children[0].children[0];
var QQCodeBox = $("#QQ-code-box");
var QQCode = QQCodeBox.children[0];
var tips = QQCodeBox.children[1];

QQCode.onmouseenter = function () {
    this.style.marginLeft = "179px";
    this.style.transition = "0.5s";
    tips.style.display = "block";
}
QQCode.onmouseleave = function () {
    this.style.marginLeft = "246px";
    this.style.transition = "0.5s";
    tips.style.display = "none";
}
QQ.onclick = function(){
    welcome.style.background = "rgba(255,255,255,0.7)";
    QQLogin.style.display = "block";
}
QQ_del.onclick = function(){
    welcome.style.background = "rgba(255,255,255,0)";
    QQLogin.style.display = "none";
}

var QQ_delNum = QQLogin.children[1].children[0];
var Anum = $("#Anum");
var Afast = $("#Afast");
var QQLoginBox = QQLogin.children[0];
var numberLoginBox = QQLogin.children[1];

onclickhide(QQ_delNum, QQLogin);

Anum.onclick = function () {
    QQLoginBox.style.display = "block";
    numberLoginBox.style.display = "none";
}
Afast.onclick = function () {
    QQLoginBox.style.display = "none";
    numberLoginBox.style.display = "block";
}
// QQ账号登录
var inp = $(".inp");
var inpArr = ["支持QQ号/邮箱/手机号登录", "密码"];


var loginBtn = $("#login_btn");
var inps = $("#inps");
var inpTips = inps.children[0];
var first = inps.children[1];
var second = inps.children[2];

// 提交显示提示
loginBtn.onclick = function () {
    if (inp[0].value == "") {
        inpTips.style.display = "block";
        inpTips.innerHTML = "<em></em>你还没有输入帐号！";
    } else if (inp[1].value == "") {
        inpTips.style.display = "block";
        inpTips.innerHTML = "<em></em>你还没有输入密码！";
    } else {
        inpTips.style.display = "none";
    }
}

for (var i = 0; i < inp.length; i++) {
    inp[i].index = i;


    inp[i].onfocus = function () {
        this.className = "inp con";
        if (this.value != "") {
            this.setAttribute("placeholder", "");

        }
        this.onblur = function () {
            this.className = "inp";
            if (this.value == "") {
                this.setAttribute("placeholder", inpArr[this.index]);
                if (this.index == 0) {
                    first.style.display = "none";
                } else {
                    second.style.display = "none";
                }
            }
        }
        this.onchange = function () {
            if (this.index == 0) {
                if (this.value != "") {
                    first.style.display = "block";
                }
            } else {
                if (this.value != "") {
                    second.style.display = "block";
                }
            }
        }
        first.onclick = function () {
            inp[0].value = "";
            first.style.display = "none";
        }
        second.onclick = function () {
            inp[1].value = "";
            second.style.display = "none";
        }

    }
}
// 提交显示提示end

// QQ账号登录end
// QQ登录end

function onclickhide(onclickEvent, displayEvent) {
    onclickEvent.onclick = function () {
        displayEvent.style.display = "none";
    }
}
function onclickshow(onclickEvent, displayEvent) {
    onclickEvent.onclick = function () {
        displayEvent.style.display = "block";
    }
}

// 登录弹出框end
