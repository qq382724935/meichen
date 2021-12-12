/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:42:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-12 12:26:54
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
  data: { imgDraw: {} },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const self = this;
    wx.showLoading({ mask: true });
    const userData = app.globalData.userData;
    request.get("/user/promote-code", {
      success: function (res) {
        self.setData({
          imgDraw: {
            width: "720rpx",
            height: "1156rpx",
            background: "/static/personal/extensionbkg.png",
            views: [
              {
                type: "image",
                url: "/static/personal/extensionbkg2.png",
                css: {
                  top: "344rpx",
                  left: "88rpx",
                  right: "88rpx",
                  width: "528rpx",
                },
              },
              {
                type: "text",
                text: "推广有理",
                css: {
                  top: "122rpx",
                  left: "168rpx",
                  fontWight: "bold",
                  fontSize: "96rpx",
                  color: "#82C4FF",
                },
              },
              {
                type: "image",
                url: userData?.headimg || "",
                css: {
                  top: "288rpx",
                  left: "298rpx",
                  width: "148rpx",
                  height: "148rpx",
                  borderRadius: "50%",
                },
              },
              {
                type: "image",
                url: res.data.result.file,
                css: {
                  top: "588rpx",
                  left: "238rpx",
                  width: "288rpx",
                },
              },
            ],
          },
        });
      },
      complete: function () {
        wx.hideLoading();
      },
    });
  },
});
