/*
 * @Author: 刘利军
 * @Date: 2021-09-11 11:08:51
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-14 13:30:44
 * @Description:
 * @PageName:
 */
// components/m-button/m-button.js
var app = getApp();

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
      if (!app.globalData.userData.tel) {
        wx.showModal({
          title: "温馨提示",
          content: "此功能需要先完成实名认证，是否前往",
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "/pages/personal/real-name-authentication/real-name-authentication",
              });
            }
          },
        });
        return;
      }
      if (this.data.type === "url" && this.data.url) {
        wx.navigateTo({
          url: this.data.url,
        });
      } else {
        this.triggerEvent("customevent");
      }
    },
  },
});
