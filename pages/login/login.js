/*
 * @Author: 刘利军
 * @Date: 2021-11-07 16:10:58
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-07 16:21:05
 * @Description: 
 * @PageName: 
 */
// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  wxLogin: function (res) {
    console.log(res)
  },
  phoneLogin: function () {
    console.log('手机登录')
  },
});
