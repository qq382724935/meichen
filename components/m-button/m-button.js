/*
 * @Author: 刘利军
 * @Date: 2021-09-11 11:08:51
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-29 18:09:58
 * @Description:
 * @PageName:
 */
// components/m-button/m-button.js
var app = getApp();
var request = require("../../utils/request.js");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: Number,
      value: 100,
    },
    type: {
      type: String,
      value: "url",
    },
    url: {
      type: String,
      value: "",
    },
    goType: { type: String, value: "" },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onMyButtonTap: function () {
      if (!app.globalData.userData) {
        this.wxLogin();
        return;
      }
      if (!app.globalData.userData.phone) {
        this.realName();
        return;
      }
      if (this.data.type === "url" && this.data.url) {
        wx.navigateTo({ url: this.data.url });
      } else {
        this.triggerEvent("customevent");
      }
    },
    wxLogin: function () {
      const openid = app.globalData.userInfo.openid;
      const {goType} =this.data;
      wx.getUserProfile({
        desc: "获取你的昵称、头像",
        success: function (userInfo) {
          wx.showLoading({
            title: "登录中...",
          });
          request.post("/user/login", {
            data: {
              encrypted_data: userInfo.encryptedData,
              iv: userInfo.iv,
              open_id: openid,
            },
            success: (res) => {
              app.globalData.userInfo.token = res.data.result.token;
              request.get("/user/info", {
                success: function (info) {
                  const infoData = info.data.result;
                  app.globalData.userData = infoData;
                  // self.realName('未实名认证是否前往');
                  if (goType === "home") {
                    const page = getCurrentPages().pop();
                    if (page.options.scene) {
                      const pid = decodeURIComponent(page.options.scene);
                      request.get("/user/bind", {
                        data: {
                          pid: pid.split("=")[1],
                        },
                        complete:function(){
                          wx.switchTab({
                            url: "/pages/index/index",
                          });
                        }
                      });
                    }else{
                      wx.switchTab({
                        url: "/pages/index/index",
                      });
                    }
                  }
                },
                fail: function () {
                  wx.showToast({
                    title: "获取用户信息失败，请重新",
                  });
                },
              });
              wx.hideLoading();
            },
            fail: () => {
              wx.showToast({
                title: "登录失败，请尝试",
              });
              wx.hideLoading();
            },
          });
        },
        fail: function (fail) {},
      });
    },
    realName: function (contnet = "此功能需要先完成实名认证，是否前往") {
      const { goType } = this.data;
      if (app.globalData.userData && !app.globalData.userData.phone) {
        wx.showModal({
          title: "温馨提示",
          content: contnet,
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "/pages/personal/real-name-authentication/real-name-authentication",
              });
            }
            if (res.cancel && goType === "home") {
              wx.switchTab({
                url: "/pages/index/index",
              });
            }
          },
        });
      }
    },
  },
});
