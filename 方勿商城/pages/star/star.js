// pages/star/star.js
var { earthData } = require("../../Api/earth.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topswiperlist:[
            {
                img:"../../image/star_swiper_01.jpg",
                name:"Redmi9",
                tit:"新品讨论区"
            },
            {
                img:"../../image/star_swiper_02.jpg",
                name:"六月摄影大赛",
                tit:"城市烟火气"
            },
            {
                img:"../../image/star_swiper_03.jpg",
                name:"5G讨论组",
                tit:"关于5G的一切"
            },
            {
                img:"../../image/star_swiper_04.jpg",
                name:"小米10",
                tit:"小米10讨论区"
            },
            {
                img:"../../image/star_swiper_05.jpg",
                name:"学生部落",
                tit:"年轻就这样"
            },
            {
                img:"../../image/star_swiper_06.jpg",
                name:"极客少女",
                tit:"嘿，终于等到你"
            },
            {
                img:"../../image/star_swiper_07.jpg",
                name:"把世界看清",
                tit:"K 30 Pro"
            },
            {
                img:"../../image/star_swiper_08.jpg",
                name:"商城直播",
                tit:"小姐姐来了"
            },
            {
                img:"../../image/star_swiper_09.jpg",
                name:"K 30",
                tit:"K30讨论区"
            },
            {
                img:"../../image/star_swiper_10.jpg",
                name:"王一博",
                tit:"王一博粉丝集合"
            },
            {
                img:"../../image/star_swiper_11.jpg",
                name:"小米人的日常",
                tit:"走进小米员工"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            },
            {
                img:"../../image/star_swiper_12.jpg",
                name:"10X系列",
                tit:"全芯超越"
            }
        ]

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
        let _this = this;
        // 获取系统信息
        wx.getSystemInfo({
            success(res) {
                _this.setData({
                    windowWidth: res.windowWidth
                })
            }
        })
        // 获取星球信息
        earthData((res)=>{
            _this.setData({
                "topswiperlist":res.data.result
            })
            
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