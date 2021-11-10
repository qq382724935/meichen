/*
 * @Author: 刘利军
 * @Date: 2021-10-17 13:18:26
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-10-17 15:45:13
 * @Description:
 * @PageName:
 */
// pages/personal/withdrawal/withdrawal.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    keyboardVisible: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  cursorView: function () {
    this.setData({ keyboardVisible: true });
  },
  onChange: function (e) {
    this.setData({ markAmount: e.detail.value });
  },
  confirmClick: function (e) {
    this.setData({ keyboardVisible: false });
  },
  allWithdrawal: function () {},
  withdrawalRecord: function () {
    wx.navigateTo({
      url: '/pages/personal/withdrawal-record/withdrawal-record',
    })
  },
});
