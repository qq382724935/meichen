/*
 * @Author: 刘利军
 * @Date: 2021-11-07 16:10:58
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-10 17:47:49
 * @Description:
 * @PageName:
 */
// pages/login/login.js

var request = require("../../utils/request.js");
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  wxLogin: function (res) {
    const openid = app.globalData.userInfo.openid;
    wx.getUserProfile({
      desc: "获取你的昵称、头像",
      success: function (userInfo) {
        request.post("/user/login", {
          data: {
            encrypted_data: userInfo.encryptedData,
            iv: userInfo.iv,
            open_id: openid,
          },
          success: (res) => {
            app.globalData.userInfo.token = res.data.result.token;
            wx.switchTab({
              url: '/pages/index/index',
            })
          },
          fail: () => {
            console.log("fail", res);
          },
        });
      },
      fail: function (fail) {
        console.log("fail", fail);
      },
    });
  }
});
