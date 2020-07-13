// pages/paylist/paylist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        state: [{
                type: 0,
                name: "待付款",
                btn: "立即支付"
            },
            {
                type: 1,
                name: "待收货",
                btn: "确认收货"

            },
            {
                type: 2,
                name: "待评价",
                btn: "立即评价"
            }
        ],
        payListData: []
    },
    nowpay(options) {
        let index = this.data.payListData.findIndex(item => {
            return item.id == options.target.dataset.id;
        })
        this.data.payListData[index].type = 1;
        this.setData({
            payListData: this.data.payListData
        })
        wx.setStorageSync('PayList', this.data.payListData);
    },
    nowget(options) {
        let index = this.data.payListData.findIndex(item => {
            return item.id == options.target.dataset.id;
        })
        this.data.payListData[index].type = 2;
        this.setData({
            payListData: this.data.payListData
        })
        wx.setStorageSync('PayList', this.data.payListData);
    },
    nowsay(options) {
        let index = this.data.payListData.findIndex(item => {
            return item.id == options.target.dataset.id;
        })
        this.data.payListData[index].type = 3;
        this.setData({
            payListData: this.data.payListData
        })
        wx.setStorageSync('PayList', this.data.payListData);
    },
    nowdel(options) {
        let index = this.data.payListData.findIndex(item => {
            return item.id == options.target.dataset.id;
        })
        this.data.payListData.splice(index, 1);
        this.setData({
            payListData: this.data.payListData
        })
        wx.setStorageSync('PayList', this.data.payListData);
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
        var _this = this;
        var payList = wx.getStorageSync('PayList');
        _this.setData({
            payListData: payList
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