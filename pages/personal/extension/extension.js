/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:42:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-25 16:35:29
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
            width: "600rpx",
            height: "1056rpx",
            background: "/static/personal/extensionbkg.png",
            views: [
              {
                type: "image",
                url: userData?.headimg || "",
                css: {
                  bottom: "108rpx",
                  left: "98rpx",
                  width: "148rpx",
                  height: "148rpx",
                  borderRadius: "50%",
                },
              },
              {
                type: "text",
                text: userData?.nickname || "",
                css: {
                  bottom: "188rpx",
                  left: "268rpx",
                  fontSize: "30rpx",
                },
              },
              {
                type: "image",
                url: res.data.result.file,
                css: {
                  bottom: "108rpx",
                  right: "88rpx",
                  width: "88rpx",
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
