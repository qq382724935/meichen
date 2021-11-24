/*
 * @Author: 刘利军
 * @Date: 2021-09-12 14:28:58
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-22 19:40:52
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
    statusList: [
      { text: "已使用", key: "used", status: 30 },
      { text: "已过期", key: "expired", status: 99 },
    ],
    indexKey: "used",
  },
  getStatus: function (event) {
    this.setData({ indexKey: event.target.dataset.key });
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
      data: { is_used: 1 },
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
