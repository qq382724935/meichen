// pages/payment/payment.js
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
    console.log("e.detail.value", e.detail.value);
  },
});
