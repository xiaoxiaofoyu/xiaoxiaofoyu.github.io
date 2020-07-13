// pages/details/details.js

let {
    goodsListIdData
} = require("../../Api/goodsList.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // imgs: [
        //     "../../image/phone_01.jpg",
        //     "../../image/phone_02.jpg",
        //     "../../image/phone_03.jpg",
        //     "../../image/phone_04.jpg"
        // ],
        // GoodsDataList: [{
        // id: 3,
        // imgs: [
        //     "../../image/phone_01.jpg",
        //     "../../image/phone_02.jpg",
        //     "../../image/phone_03.jpg",
        //     "../../image/phone_04.jpg"
        // ],
        // name: "bibi脸巾",
        // img: "../../image/imgs/computer/computer_1.jpg",
        // price: "1000",
        // oldprice: "2000",
        // }],
        num: 0
    },
    goCart() {
        wx.switchTab({
            url: '/pages/cart/cart'
        })
    },
    goIndex() {
        wx.switchTab({
            url: '/pages/index/index'
        })
    },
    goPay() {
        wx.switchTab({
            url: '/pages/cart/cart',
        })
    },
    addCart() {
        var CarData = {
            id: this.data.GoodsDataList[0].id,
            name: this.data.GoodsDataList[0].name,
            img: this.data.GoodsDataList[0].img,
            price: this.data.GoodsDataList[0].price,
            num: 1,
            type: 0
        }

        // 1.0 判断数据缓存中是否右数据
        var GoodsList = wx.getStorageSync('GoodsList');

        if (GoodsList) {
            var isGooodsData = true;

            // 1.1.1 有数据 数据相同
            for (var i = 0; i < GoodsList.length; i++) {
                if (GoodsList[i].id == this.data.GoodsDataList[0].id) {
                    GoodsList[i].num += 1;

                    isGooodsData = false;
                }
            }
            // 1.1.2 有数据 数据不同
            if (isGooodsData) {
                GoodsList.push(CarData);
                isGooodsData = true;
            }
            wx.setStorageSync('GoodsList', GoodsList);
        } else {
            // 1.2 没有数据 
            wx.setStorageSync('GoodsList', [CarData]);
        }
        this.setData({
            num: wx.getStorageSync('GoodsList').length
        })
    },
    addCollect() {
        var Collectlist = wx.getStorageSync('Collectlist');
        var [liekgoods] = this.data.GoodsDataList;

        console.log(liekgoods);

        if (Collectlist) {
            for (var i = 0; i < Collectlist.length; i++) {
                if (Collectlist[i].id == liekgoods.id) {
                    wx.showToast({
                        title: '您已收藏该商品'
                    })
                    return;
                }
            }
            Collectlist.push(liekgoods)
            wx.setStorageSync("Collectlist", Collectlist);
            wx.showToast({
                title: '收藏成功'
            })
        } else {
            wx.setStorageSync("Collectlist", [liekgoods]);
            wx.showToast({
                title: '收藏成功'
            })
        }

        console.log(Collectlist);




        // if (!Collectlist) {
        //     wx.setStorageSync('Collectlist', liekgoods);
        // } 



    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function ({
        id
    }) {
        let _this = this;
        goodsListIdData(id, function ({
            data: {
                result
            }
        }) {
            _this.setData({
                GoodsDataList: [{
                    id: result.id,
                    imgs: result.imgs,
                    name: result.name,
                    img: result.image,
                    price: result.price,
                    content: result.content,
                    oldprice: "2000",
                }],
            })
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

        console.log(wx.getStorageSync('GoodsList'));

        this.setData({
            num: wx.getStorageSync('GoodsList').length
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})