/*
 * @Author: 刘利军
 * @Date: 2021-09-22 20:24:56
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 18:43:01
 * @Description:
 * @PageName:
 */
// pages/personal/subordinate/subordinate.js

var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    child: [],
    roleName: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const data = JSON.parse(decodeURI(options.data));
    const self = this;
    this.setData({
      roleName: data.roleName,
      number: data.number,
    });
    wx.showLoading({ mask: true });
    request.get("/level/list", {
      data: { level_id: data.id },
      success: function (res) {
        const child = res.data.result.map((item) => {
          return {
            name: item.nickname,
            id: item.id,
            number: item.count,
            avatar: item.headimg,
            createDate: "20200",
          };
        });
        self.setData({ child });
      },
      complete: function () {
        wx.hideLoading();
      },
    });
  },
});
