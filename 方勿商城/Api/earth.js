var {url,method} = require("./config.js");

module.exports = {
    earthData(success){
        wx.request({
          url: `${url}earth`,
          method,
          success
        })
    }
}