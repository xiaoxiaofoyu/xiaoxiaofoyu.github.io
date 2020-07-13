var {url,method} = require("./config.js");

module.exports = {
    solideData(success){
        wx.request({
          url: `${url}solide`,
          method,
          success
        })
    }
}