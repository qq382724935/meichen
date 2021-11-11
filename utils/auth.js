/*
 * @Author: 刘利军
 * @Date: 2021-09-23 20:07:56
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-10 16:32:25
 * @Description:
 * @PageName:
 */
var request = require("./request.js");
/** 登录授权逻辑模块,不要在app.js使用 */
module.exports = {
  app: function () {
    return getApp();
  },
  doLogin: function () {
    return new Promise((resolve, reject) => {
      const app = this.app();
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.login({
              complete: (login) => {
                request.get("/user/session", {
                  data: { code: login.code },
                  success: function (res) {
                    const resData = res.data.result;
                    console.log(resData)
                    if (res.data.code == 200) {
                      app.globalData.userInfo = resData;
                      request.get("/user/info", {
                        success:function(res){
                          console.log(res)
                        }
                      });
                      resolve(resData);
                    } else if (res.data.code == -1) {
                      app.globalData.userInfo = resData;
                      wx.redirectTo({
                        url: "/pages/login/login",
                      });
                    } else {
                      reject(false);
                    }
                  },
                  fail: function () {
                    reject(false);
                  },
                });
              },
            });
          } else {
            wx.redirectTo({
              url: "/pages/login/login",
            });
          }
        },
      });
    });
  },

  /** 是否已授权 */
  isLogin: function () {
    return this.app().globalData.user ? true : false;
  },
};
