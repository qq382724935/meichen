/*
 * @Author: 刘利军
 * @Date: 2021-09-09 19:48:36
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 19:20:58
 * @Description:
 * @PageName:
 */
// pages/payment/payment.js

var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    keyboardVisible: true,
    markAmount: "",
  },
  cursorView: function () {
    this.setData({ keyboardVisible: true });
  },
  onChange: function (e) {
    this.setData({ markAmount: e.detail.value });
  },
  confirmClick: function (e) {
    request.post("/order/add", {
      data: {
        order_amount: "当面付",
        good_num: "1",
        order_amount: this.data.markAmount,
      },
      success: function (res) {
        console.log("res", res);
      },
      fail: function (fail) {
        console.log("fail", fail);
      },
    });
  },
});
