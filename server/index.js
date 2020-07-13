// 项目管理包
// $npm init -y 
// 后端内容node.js
// $cnpm i express -S

// 安装依赖包
// cnpm i

// 启动服务器
// $node index.js

var express = require("express");
var app = express();

// 创建静态目录./dist,默认访问index.html文件
app.use(express.static("./dist"));
app.use(express.static("./image"));


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// req 客户端向服务器数据响应
// res 服务器向客户端数据响应
// get() 数据请求get请求post请求
// post()
// "/" 路由操作
// http://127.0.0.1:3000/
app.get("/", function (req, res) {
    // 返回字符串 send()方法
    res.send("你好");
})

// 请求数据接口APi，获取数据
// http://127.0.0.1:3000/goodsApi
app.get("/goodsApi", function (req, res) {
    // 返回对象 json()方法
    res.json({ name: "商品名称", price: "22", num: 1 })
})
// 在服务器中定义变量，重启服务器会被初始化
var userList = [];//全局数据变量
// 先注册用户，在登陆用户

// 登陆接口
// http://127.0.0.1:3000/login
app.get("/login", function (req, res) {
    console.log(req.query);
    let { username, password } = req.query;
    if (username == "" && password == "") {
        return; //终止路由操作
    }

    // 1.通过前端传递登陆信息
    // 2.使用前台登陆用户名，在后台中userList匹配到相同用户名密码，找到为登陆成功，找不到登陆失败

    // 使用前台用户名找userlist对象数据，对比密码
    let data = userList.find(item => item.username == username);//返回对象
    console.log("返回对象", data);
    // 判断密码是否相同
    if (data && data.password == password) {
        res.send("200");
    } else {
        res.send("201");
    }

})

// 注册接口
// http://127.0.0.1:3000/register
// http://127.0.0.1:3000/register?username=zhangsan&password=123123&password2=123123
app.get("/register", function (req, res) {
    // req.query获取get请求传递数据
    console.log(req.query);
    // 判断数据
    let { username, password, password2 } = req.query;
    if (username != "" && password == password2 && password != "") {
        console.log("注册成功");
        userList.push({ username, password });
        res.send("200");
    } else {
        res.send("201");
    }
})
let result = [
    {
        id: 1,
        name: "小米10",
        price: '4699',
        content: "骁龙865处理器 / 1亿像素8K电影相机 / 双模5G / 新一代LPDDR5内存 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配Wi-Fi 6 / 超强VC液冷散热 / 30W极速闪充+30W无线闪充+10W无线反充 / 4780mAh大电量 / 多功能NFC",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1e76acbaeda88f7f3c0846b3cf1b49c.png",
        imgs: [
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494493.13637506.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494494.07981314.jpg",
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494497.07636691.jpg"
        ],
        categroyId: 0
    },
    {
        id: 2,
        name: "Redmi Note 8 Pro",
        price: '1099',
        content: "6400万四摄小金刚，超强解析力，超震撼 / 液冷游戏芯片，王者玩家的配置 / 4500mAh大电池，游戏9小时，2小时闪速满电*",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280",
        imgs: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3c0c44374bc34d3022894319531daf.jpeg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4582cdfa732e2bfb5bb9bede10da7d16.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cb62b49a519c321b7dbac7141ad63bc.jpg"
        ],
        categroyId:2
    },
    {
        id: 3,
        name: "Redmi Note 8",
        price: '899',
        content: "4800万全场景四摄，生活点滴记录，一部就够了 / 美学配色，2.5D玻璃机身，握在手里的盛世美颜 / 纳米防泼溅镀层，大电池，从容应对日常生活",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280",
        imgs: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/538f19801c5a501e0e307d98677d752d.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2d10fb82dcd525351085444dd21effe.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b17192d299e875fc2402badb7e4acf17.jpg"
        ],
        categroyId:3
    },
    {
        id: 4,
        name: "小米10",
        price: '3799',
        content: "骁龙865旗舰平台，双模5G，用久了也不卡 / 1亿像素8K电影相机 / 6.67英寸 AMOLED 双曲面屏幕，刷新屏幕新体验",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b3b7c52bffab0806c54652ee0872a64.jpg?thumb=1&w=344&h=280",
        imgs: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75a5356ddb367b1f9972574b877cef39.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e135b95d82f9e232953afc837dd9c68e.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5e8d464644b1b8ecaf38567b3a387605.jpg"
        ],
        categroyId:4
    },
    {
        id: 5,
        name: "Redmi K30 4G",
        price: '1399',
        content: "120Hz双倍流畅体验，信息仿佛在指尖流淌 / 索尼6400万前后六摄，每一拍都惊艳 / 多功能NFC，3.5mm 耳机孔，你想要的都没少",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ed6090953a4edca0ee6bc4b36cb4a9e.jpg?thumb=1&w=344&h=280",
        imgs: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19566b7da2dffb8ec89ffb937b72e343.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19566b7da2dffb8ec89ffb937b72e343.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee8d1a9ec1bf778864b00dfd37700d9.jpg"
        ],
        categroyId:5
    },
    {
        id: 6,
        name: "Redmi K30 5G",
        price: '1899',
        content: "双模5G，低功耗5G处理器，为你的手机提供澎湃动力 / 120Hz双倍流畅体验，信息仿佛在指尖流淌 / 索尼6400万前后六摄，每一拍都惊艳",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cf8c841ab5e52d443be110f6aa7e0d98.jpg?thumb=1&w=344&h=280",
        imgs: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/507b16e5d89b905ae6fccaec89a521b8.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/513d3dfd7e15f04eb22f44646dd66e20.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02dd15ffb217dd9e4d6b02d8577dd0a0.jpg"
        ],
        categroyId:6
    },
    {
        id: 7,
        name: "Redmi 8A",
        price: '599',
        content: "5000mAh，3天一充，充电宝级大电量* / 护眼全面屏，水波纹理，防滑防指纹 / 无线FM收音机，免插耳机，聆听世界",
        image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a122fd2ffcebcd861cc0979c9fe192f.jpg?w=456&h=420",
        imgs: [
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f1434128a96b68a9be89fbf333759561.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/393a8bff89b3470adc93187e073e19b9.jpg",
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b790652d87493a23043d78e4b651c154.jpg"
        ],
        categroyId:7
    }
];
// 商品数据接口
// http://127.0.0.1:3000/goodsList
app.get("/goodsList", (req, res) => {
    res.json({ code: 200, result });
})

// 通过id获取商品
// http://127.0.0.1:3000/goodsList/1
app.get("/goodsList/:id", (req, res) => {
    let data = result.find(item => item.id == req.params.id);
    res.json({ code: 200, result: data });
})


// 分类接口
app.get("/category", (req, res) => {
    var result = [
        {
            id: 0,
            name: "手机",
            iconUrl: "http://127.0.0.1:3000/icon/icon-fujin.png",
            data: [
                {
                    img: "http://127.0.0.1:3000/phone/phone_1.jpg",
                    name: "手机1"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_2.jpg",
                    name: "手机2"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_3.jpg",
                    name: "手机3"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_4.jpg",
                    name: "手机4"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_5.jpg",
                    name: "手机5"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_6.jpg",
                    name: "手机6"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_7.jpg",
                    name: "手机7"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_8.jpg",
                    name: "手机8"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_9.jpg",
                    name: "手机9"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_10.jpg",
                    name: "手机10"
                },
                {
                    img: "http://127.0.0.1:3000/phone/phone_11.jpg",
                    name: "手机11"
                }
            ]
        },
        {
            id: 1,
            name: "电脑",
            iconUrl: "http://127.0.0.1:3000/icon/icon-fuli.png",
            data: [{
                img: "http://127.0.0.1:3000/computer/computer_1.jpg",
                name: "电脑1"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_2.jpg",
                name: "电脑2"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_3.jpg",
                name: "电脑3"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_4.jpg",
                name: "电脑4"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_5.jpg",
                name: "电脑5"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_6.jpg",
                name: "电脑6"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_7.jpg",
                name: "电脑7"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_8.jpg",
                name: "电脑8"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_9.jpg",
                name: "电脑9"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_10.jpg",
                name: "电脑10"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_11.jpg",
                name: "电脑11"
            },
            {
                img: "http://127.0.0.1:3000/computer/computer_12.png",
                name: "电脑12"
            }
            ]
        },
        {
            id: 2,
            name: "电视",
            iconUrl: "http://127.0.0.1:3000/icon/icon-muma.png",
            data: [{
                img: "http://127.0.0.1:3000/tv/tv1.jpg",
                name: "电视1"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv2.jpg",
                name: "电视2"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv3.jpg",
                name: "电视3"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv4.jpg",
                name: "电视4"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv5.jpg",
                name: "电视5"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv6.jpg",
                name: "电视6"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv7.jpg",
                name: "电视7"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv8.jpg",
                name: "电视8"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv9.jpg",
                name: "电视9"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv10.jpg",
                name: "电视10"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv11.jpg",
                name: "电视11"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv12.jpg",
                name: "电视12"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv13.jpg",
                name: "电视13"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv14.jpg",
                name: "电视14"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv15.jpg",
                name: "电视15"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv16.jpg",
                name: "电视16"
            },
            {
                img: "http://127.0.0.1:3000/tv/tv17.png",
                name: "电视17"
            }
            ]
        },
        {
            id: 3,
            name: "耳机",
            iconUrl: "http://127.0.0.1:3000/icon/icon-qiandao.png",
            data: [{
                img: "http://127.0.0.1:3000/headset/headset_1.jpg",
                name: "耳机1"
            },
            {
                img: "http://127.0.0.1:3000/headset/headset_2.jpg",
                name: "耳机2"
            },
            {
                img: "http://127.0.0.1:3000/headset/headset_3.jpg",
                name: "耳机3"
            },
            {
                img: "http://127.0.0.1:3000/headset/headset_4.jpg",
                name: "耳机4"
            },
            {
                img: "http://127.0.0.1:3000/headset/headset_5.png",
                name: "耳机5"
            },
            {
                img: "http://127.0.0.1:3000/headset/headset_6.jpg",
                name: "耳机6"
            }
            ]
        },
        {
            id: 4,
            name: "智能",
            iconUrl: "http://127.0.0.1:3000/icon/icon-qinzi.png",
            data: [{
                img: "http://127.0.0.1:3000/intelligence/intelligence_1.jpg",
                name: "智能1"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_2.jpg",
                name: "智能2"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_3.jpg",
                name: "智能3"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_4.jpg",
                name: "智能4"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_5.jpg",
                name: "智能5"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_6.jpg",
                name: "智能6"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_7.jpg",
                name: "智能7"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_8.jpg",
                name: "智能8"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_9.jpg",
                name: "智能9"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_10.jpg",
                name: "智能10"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_11.jpg",
                name: "智能11"
            },
            {
                img: "http://127.0.0.1:3000/intelligence/intelligence_12.jpg",
                name: "智能12"
            }
            ]
        },
        {
            id: 5,
            name: "家电",
            iconUrl: "http://127.0.0.1:3000/icon/icon-tiyu.png",
            data: [{
                img: "http://127.0.0.1:3000/homedian/homedian1.jpg",
                name: "家电1"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian2.jpg",
                name: "家电2"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian3.jpg",
                name: "家电3"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian4.jpg",
                name: "家电4"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian5.jpg",
                name: "家电5"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian6.jpg",
                name: "家电6"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian7.jpg",
                name: "家电7"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian8.jpg",
                name: "家电8"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian9.jpg",
                name: "家电9"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian10.jpg",
                name: "家电10"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian11.jpg",
                name: "家电11"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian12.jpg",
                name: "家电12"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian13.jpg",
                name: "家电13"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian14.jpg",
                name: "家电14"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian15.jpg",
                name: "家电15"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian16.jpg",
                name: "家电16"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian17.jpg",
                name: "家电17"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian18.jpg",
                name: "家电18"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian19.jpg",
                name: "家电19"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian20.jpg",
                name: "家电20"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian21.jpg",
                name: "家电21"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian22.jpg",
                name: "家电22"
            },
            {
                img: "http://127.0.0.1:3000/homedian/homedian23.jpg",
                name: "家电23"
            }
            ]
        },
        {
            id: 6,
            name: "配件",
            iconUrl: "http://127.0.0.1:3000/icon/icon-xingxing.png",
            data: [{
                img: "http://127.0.0.1:3000/parts/parts_1.jpg",
                name: "配件1"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_2.jpg",
                name: "配件2"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_3.jpg",
                name: "配件3"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_4.jpg",
                name: "配件4"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_5.jpg",
                name: "配件5"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_6.jpg",
                name: "配件6"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_7.jpg",
                name: "配件7"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_8.jpg",
                name: "配件8"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_9.jpg",
                name: "配件9"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_10.jpg",
                name: "配件10"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_11.jpg",
                name: "配件11"
            },
            {
                img: "http://127.0.0.1:3000/parts/parts_12.jpg",
                name: "配件12"
            }
            ]
        },
        {
            id: 7,
            name: "搭配",
            iconUrl: "http://127.0.0.1:3000/icon/icon-zhanhui.png",
            data: [{
                img: "http://127.0.0.1:3000/dapei/dapei1.jpg",
                name: "搭配1"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei2.jpg",
                name: "搭配2"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei3.jpg",
                name: "搭配3"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei4.jpg",
                name: "搭配4"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei5.jpg",
                name: "搭配5"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei6.jpg",
                name: "搭配6"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei7.jpg",
                name: "搭配7"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei8.jpg",
                name: "搭配8"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei9.jpg",
                name: "搭配9"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei10.jpg",
                name: "搭配10"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei11.jpg",
                name: "搭配11"
            },
            {
                img: "http://127.0.0.1:3000/dapei/dapei12.jpg",
                name: "搭配12"
            }
            ]
        },
        // {
        //     id: 8,
        //     name: "周边",
        //     icon: "http://127.0.0.1:3000/icon/icon-fujin.png",
        //     data: [{
        //         img: "http://127.0.0.1:3000/around/around1.jpg",
        //         name: "周边1"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around2.jpg",
        //         name: "周边2"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around3.jpg",
        //         name: "周边3"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around4.jpg",
        //         name: "周边4"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around5.jpg",
        //         name: "周边5"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around6.jpg",
        //         name: "周边6"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around7.jpg",
        //         name: "周边7"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around8.jpg",
        //         name: "周边8"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around9.jpg",
        //         name: "周边9"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around10.jpg",
        //         name: "周边10"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around11.jpg",
        //         name: "周边11"
        //     },
        //     {
        //         img: "http://127.0.0.1:3000/around/around12.jpg",
        //         name: "周边12"
        //     }
        //     ]
        // },
    ]
    res.json({ code: 200, result })
})

// 首页轮播图
app.get("/solide",(req,res)=>{
    var result = [
        "http://127.0.0.1:3000/solide/phone_01.jpg",
        "http://127.0.0.1:3000/solide/phone_02.jpg",
        "http://127.0.0.1:3000/solide/phone_03.jpg",
        "http://127.0.0.1:3000/solide/phone_04.jpg"
    ]
    res.json({code: 200,result});
})

// 星球
app.get("/earth",(req,res)=>{
    var result = [
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_01.jpg",
            name:"Redmi9",
            tit:"新品讨论区"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_02.jpg",
            name:"六月摄影大赛",
            tit:"城市烟火气"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_03.jpg",
            name:"5G讨论组",
            tit:"关于5G的一切"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_04.jpg",
            name:"小米10",
            tit:"小米10讨论区"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_05.jpg",
            name:"学生部落",
            tit:"年轻就这样"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_06.jpg",
            name:"极客少女",
            tit:"嘿，终于等到你"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_07.jpg",
            name:"把世界看清",
            tit:"K 30 Pro"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_08.jpg",
            name:"商城直播",
            tit:"小姐姐来了"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_09.jpg",
            name:"K 30",
            tit:"K30讨论区"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_10.jpg",
            name:"王一博",
            tit:"王一博粉丝集合"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_11.jpg",
            name:"小米人的日常",
            tit:"走进小米员工"
        },
        {
            img:"http://127.0.0.1:3000/earth/star_swiper_12.jpg",
            name:"10X系列",
            tit:"全芯超越"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccdbce7d5c702b5874db1bd493c9844a.jpg",
            name:"车行天下",
            tit:"享受出发"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/33c46a92898cca7b5bd61140b9f4bdb0.png",
            name:"米10青春版",
            tit:"轻薄5G手机"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/117f6c6f05e57440dc52c29082437e55.jpg",
            name:"意见反馈",
            tit:"收集您的建议"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3d40746be6f87b88841e80a9b00292.png",
            name:"10X系列",
            tit:"全芯超越"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eccaea6eb3a680593538307f6e5a2b4.jpg",
            name:"耳机发烧友",
            tit:"听·见不同"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b31cb0d7316fdeee965c8130304dae5.jpg",
            name:"萌宝俱乐部",
            tit:"育儿伊甸园"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b25a30c3ea9c391e881c33f56268240f.jpg",
            name:"游戏玩家",
            tit:"集结游戏党"
        },
        {
            img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d5e2e00f58b72b98ca0af3336c275fe7.jpg",
            name:"MIUI11",
            tit:"升级刷机一点通"
        },
    ]
    res.json({code:200,result});
})


// 底部导航栏图标
app.get("/footerIcon",(req,res)=>{
    var result = [
         {
             name:"购物车",
             first:"http://127.0.0.1:3000/icon_cart_01.png",
             second:"http://127.0.0.1:3000/icon_cart_02.png"
         },
         {
             name:"分类",
             first:"http://127.0.0.1:3000/icon_category_01.png",
             second:"http://127.0.0.1:3000/icon_category_02.png"
         },
         {
             name:"首页",
             first:"http://127.0.0.1:3000/icon_home_01.png",
             second:"http://127.0.0.1:3000/icon_home_02.png"
         },
         {
             name:"星球",
             first:"http://127.0.0.1:3000/icon_star_01.png",
             second:"http://127.0.0.1:3000/icon_star_02.png"
         },
         {
             name:"我的",
             first:"http://127.0.0.1:3000/icon_user_01.png",
             second:"http://127.0.0.1:3000/icon_user_02.png"
         },
    ]
    res.json({code:200,result});
})





app.listen(3000, () => {
    console.log("请访问:http://127.0.0.1:3000");
})