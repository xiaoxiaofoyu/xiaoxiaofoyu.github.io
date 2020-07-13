// pages/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalPrice: 0
    },
    // 计算总价格
    allprice() {
        if (this.data.orderlist) {
            var totalPrice = this.data.orderlist.reduce(function (total, data) {
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
    toPay() {
        var paylist = wx.getStorageSync('PayList');
        if (paylist) {
            paylist.forEach(item => {
                this.data.orderlist.push(item);
            })
        }
        wx.setStorageSync('PayList', this.data.orderlist);
        wx.removeStorageSync('GoodsList');
        this.allprice();

        // console.log(this.data.orderlist);
        wx.reLaunch({
          url: '../paylist/paylist',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        var goodlist = wx.getStorageSync('GoodsList');
        this.setData({
            orderlist: goodlist
        })
        this.allprice();
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