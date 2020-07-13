// pages/category/category.js
var {
    goodsListData
} = require("../../Api/goodsList.js");
const {
    categoryData
} = require("../../Api/category.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: 0, // 默认选中左侧
    },
    // 点击获取下标
    cateleftclick(event) {
        var id = event.target.dataset.id;
        this.setData({
            id
        });
        // console.log(event);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        // 分类接口
        categoryData(function (res) {

            console.log(res);
            
            _this.setData({
                "cateleftlist": res.data.result
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
        var CategoryId = wx.getStorageSync('CategoryId');
        CategoryId = CategoryId ? CategoryId : 0;
        let _this = this;
        // 获取系统信息
        wx.getSystemInfo({
            success(res) {
                _this.setData({
                    windowHeight: res.windowHeight,
                    id:CategoryId
                })
            }
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