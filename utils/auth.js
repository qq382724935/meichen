/*
 * @Author: 刘利军
 * @Date: 2021-09-23 20:07:56
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-10-17 16:39:28
 * @Description:
 * @PageName:
 */
var request = require("./request.js");
var setting = require("../setting");
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
                request.post("/user/session", {
                   data:{ code:login.code},
                  success: function (res) {
                    console.log(res)
                    if (res.data.code == 0) {
                      const resData = res.data.obj.data;
                      let userInfo = {};
                      if (resData.IS_MEMBER) {
                          userInfo = {
                              openId: resData.FOPEN_ID,
                              unionId: resData.FUNION_ID,
                              isMember: true,
                              phone: resData.FPHONE,
                              level: resData.FLEVEL,
                              memberId: resData.MEMBER_ID,
                              TY_LOTTERY_CODE_WX: resData.TY_LOTTERY_CODE_WX,
                              key: resData.KEY,
                              crmOpenId: resData.CRM_OPENID
                          }
                      } else {
                          userInfo = {
                              openId: resData.openId,
                              unionId: resData.unionId,
                              isMember: false
                          }
                      }
                      app.globalData.user = userInfo
                      resolve(userInfo);
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
              url: '/pages/login/login',
            })
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
