/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:41:13
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-12 16:33:46
 * @Description:
 * @PageName:
 */
// pages/order/order.js

var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusList: [
      { text: "全部", key: "all" },
      { text: "待付款", key: "0" },
      { text: "已付款", key: "1" },
    ],
    orderList: [],
    indexKey: "all",
  },

  getStatusKey: function (event) {
    this.setData({ indexKey: event.target.dataset.key });
    this.getOrderList();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getOrderList();
  },
  getOrderList: function () {
    const self = this;
    request.showLoading();
    const data =
      this.data.indexKey === "all" ? {} : { pay_status: this.data.indexKey };
    request.get("/order/get-list", {
      data,
      success: function (res) {
        self.setData({ orderList: res?.data?.result || [] });
      },
      complete: function () {
        request.hideLoading();
      },
    });
  },
});
