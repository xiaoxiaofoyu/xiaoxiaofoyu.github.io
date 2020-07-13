
var {url,method} = require("./config.js");

module.exports = {
    footerIconData(success){
        wx.request({
          url: `${url}footerIcon`,
          method,
          success
        })
    }
}