/*
 * @Author: 刘利军
 * @Date: 2021-11-14 13:24:15
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-18 20:48:00
 * @Description:
 * @PageName: 实名认证
 */

var app = getApp();
var request = app.request;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    idNo: "",
    recommender: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},

  authentication: function (userInfo) {
    const { nickName, idNo, recommender } = this.data;
    if (userInfo.detail.errMsg === "getPhoneNumber:ok") {
      request.showLoading();
      const data = { real_name: nickName, id_no: idNo };
      if (recommender) {
        data.pid = recommender;
      }
      request.post("/user/join", {
        data: {
          iv: userInfo.detail.iv,
          encryptedData: userInfo.detail.encryptedData,
          ...data,
        },
        success: function (res) {
          if (res.data.code === 200) {
            wx.showToast({ title: "认证成功" });
            request.get("/user/info", {
              success: function (info) {
                const infoData = info.data.result;
                app.globalData.userData = infoData;
                wx.switchTab({
                  url: '/pages/index/index',
                })
              },
              fail:function(){
                wx.showToast({
                  title: "获取用户信息失败，请重新",
                });
              }
            });
          
          } else {
            wx.showToast({ title: "认证失败" });
          }
        },
        fail: function () {
          wx.showToast({ title: "认证失败" });
        },
        complete: function () {
          request.hideLoading();
        },
      });
    }
  },
  nickNameChange: function (e) {
    this.setData({ nickName: e.detail.value });
  },
  idNoChange: function (e) {
    this.setData({ idNo: e.detail.value });
  },
  recommenderChange: function (e) {
    this.setData({ recommender: e.detail.value });
  },
});
