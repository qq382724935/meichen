/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:41:13
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-20 12:46:03
 * @Description:
 * @PageName:
 */
// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusList: [
      { text: "全部", key: "all" },
      { text: "待付款", key: "pending" },
      { text: "已付款", key: "paid" },
    ],
    indexKey: "all",
  },

  getStatusKey: function (event) {
    this.setData({ indexKey: event.target.dataset.key });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
