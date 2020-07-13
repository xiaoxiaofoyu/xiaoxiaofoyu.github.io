var {
  goodsListData
} = require("../../Api/goodsList.js");

const {
  categoryData
} = require("../../Api/category.js");
const {
  solideData
} = require("../../Api/solide.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectIds: [],
    collectFlag: true,
    collectFlagid: null
  },
  // 收藏
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 分类接口
    categoryData(function (res) {
      _this.setData({
        "iconArray": res.data.result
      })
      // console.log(res)
    })
    // 商品列表
    goodsListData(function (res) {

      console.log(res);

      var data = res.data.result;
      var arr = [];
      data.forEach((item) => {
        arr.push({
          id: item.id,
          img: item.image,
          name: item.name,
          address: "广州",
          price: item.price,
          content: item.content
        })
      })
      _this.setData({
        "goodlist": arr
      })
    })
    // 轮播图
    solideData(function (res) {
      // console.log(res);
      _this.setData({
        "solideUrl": res.data.result
      })

    })

  },
  // 分类跳转
  getCategory(options) {
    var id = options.target.dataset.id;
    wx.setStorageSync('CategoryId', id);
    wx.switchTab({
      url: '/pages/category/category',
    })

  },
  addCollect(options) {
    var Collectlist = wx.getStorageSync('Collectlist');
    var liekgoods = this.data.goodlist[options.target.dataset.id];

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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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