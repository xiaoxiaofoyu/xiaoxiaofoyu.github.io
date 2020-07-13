var {url,method} = require("./config.js");

module.exports = {
    goodsListData(success){
        wx.request({
          url: `${url}goodsList`,
          method,
          success
        })
    },
    goodsListIdData(id,callback){
      wx.request({
        url:`${url}goodsList/${id}`,
        method,
        success(res){
          callback(res);
        }
      })
    }
}