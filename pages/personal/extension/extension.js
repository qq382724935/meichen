/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:42:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 17:47:23
 * @Description:
 * @PageName:
 */
// pages/personal/extension/extension.js


var app = getApp();
var request = app.request;


Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({ mask: true });
    request.get("/user/promote-code", {
      success: function (res) {
      },
      complete: function () {
        wx.hideLoading();
      },
    });
  },
});
