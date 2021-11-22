/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:42:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 17:06:57
 * @Description:
 * @PageName:
 */
// pages/personal/team/team.js
var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    list: [],
  },
  onLoad: function () {
    const self = this;
    wx.showLoading({
      title: "加载中...",
      mask: true,
    });
    request.get("/level/group-list", {
      success: function (res) {
        let total = 0;
        const list = res.data.result.map((item) => {
          total += item.count;
          return {
            roleName: item.level_name,
            id: item.level_id,
            number: item.count,
          };
        });
        self.setData({ list, total });
      },
      complete: function () {
        wx.hideLoading();
      },
    });
  },
  goto: function (event) {
    wx.navigateTo({
      url: `/pages/personal/subordinate/subordinate?data=${encodeURI(
        JSON.stringify(event.target.dataset.item)
      )}`,
    });
  },
});
