// pages/collection/collection.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodslist: [],
    },

    Del(options){

        var index = options.target.dataset.id;
        console.log(options.target.dataset.id);

        this.data.goodslist.splice(index,1);
        console.log(this.data.goodslist);
        
        this.setData({
            goodslist:this.data.goodslist
        })

        wx.setStorageSync('Collectlist', this.data.goodslist);
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
        var goodslist = wx.getStorageSync('Collectlist');
        this.setData({
            goodslist
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