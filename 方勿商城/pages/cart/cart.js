// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodslist: [
            //     {
            //         img: "../../image/imgs/computer/computer_1.jpg",
            //         name: "华为电脑",
            //         address: "深圳",
            //         price: "5000.00",
            //         num: 1
            //     },
            //     {
            //         img: "../../image/imgs/computer/computer_1.jpg",
            //         name: "华为电脑",
            //         address: "深圳",
            //         price: "5000.00",
            //         num: 1
            //     },
            //     {
            //         img: "../../image/imgs/computer/computer_1.jpg",
            //         name: "华为电脑",
            //         address: "深圳",
            //         price: "5000.00",
            //         num: 1
            //     },
            //     {
            //         img: "../../image/imgs/computer/computer_1.jpg",
            //         name: "华为电脑",
            //         address: "深圳",
            //         price: "5000.00",
            //         num: 1
            //     }
        ],
        totalPrice: 0
    },
    // 添加数据
    Add(options) {
        var index = options.target.dataset.id;
        var num = this.data.goodslist[index].num + 1;
        console.log(index);
        var key = "goodslist[" + index + "].num";
        var obj = {};
        obj[key] = num;
        this.setData(obj);

        this.allprice();
    },
    // 减少数量
    down(options) {
        var index = options.target.dataset.id;
        var num = this.data.goodslist[index].num;
        var key = "goodslist[" + index + "].num";
        var obj = {};
        if (num <= 1) {
            num = 1;
        } else {
            num--;
        }
        obj[key] = num;
        this.setData(obj);

        this.allprice();
    },
    // 删除数据
    Del(options) {
        var index = options.target.dataset.id;
        this.data.goodslist.splice(index, 1);
        this.setData({
            goodslist: this.data.goodslist
        })
        this.allprice();
    },
    // 支付
    toPay() {
        if (this.data.goodslist) {
            wx.navigateTo({
                url: '../pay/pay',
            })
        } else {
            wx.showToast({
                title: '请加购商品',
            })
        }
    },
    // 计算总价格
    allprice() {

        if (this.data.goodslist) {
            var totalPrice = this.data.goodslist.reduce(function (total, data) {
                return total + data.num * data.price;
            }, 0);
            this.setData({
                totalPrice
            })
        } else {
            this.setData({
                totalPrice: 0
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

        var goodslist = wx.getStorageSync('GoodsList');
        this.setData({
            goodslist: goodslist
        })

        this.allprice();
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        wx.setStorageSync('GoodsList', this.data.goodslist);
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