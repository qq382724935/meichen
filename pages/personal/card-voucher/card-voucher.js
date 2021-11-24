/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:40:24
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-22 19:41:19
 * @Description:
 * @PageName:
 */

var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getList();
  },
  getList: function () {
    const self = this;
    request.showLoading();
    request.get("/coupon/list", {
      data: { is_used: 0 },
      success: function (res) {
        const cardList = res?.data?.result.map((item) => ({
          type: item.name,
          money: item.amount,
          time: item.end_date,
        }));
        self.setData({ cardList });
      },
      complete: function () {
        request.hideLoading();
      },
    });
  },
});
