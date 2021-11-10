/*
 * @Author: 刘利军
 * @Date: 2021-09-22 20:24:56
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-22 20:58:39
 * @Description:
 * @PageName:
 */
// pages/personal/subordinate/subordinate.js
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
    this.setData({
      roleName: data.roleName,
      number: data.number,
      child: data.child,
    });
  },

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
