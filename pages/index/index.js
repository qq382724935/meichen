/*
 * @Author: 刘利军
 * @Date: 2021-09-09 16:42:23
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-10-17 16:42:22
 * @Description:
 * @PageName:
 */

var app = getApp();
var request = app.request;
var auth = app.auth;

Component({
  data: {
    wrapperList: [
      {
        text: "付款",
        key: "payment",
        img: "/static/home/sacn.png",
        url: "/pages/payment/payment",
      },
      {
        text: "会员大礼包",
        key: "memberGiftBag",
        img: "/static/home/member-gift-bag.png",
        url: "/pages/member-gift-bag/member-gift-bag",
      },
      {
        text: "全瓷贴面",
        key: "ceramicVeneer",
        img: "/static/home/ceramic-veneer.png",
        url: "/pages/ceramic-veneer/ceramic-veneer",
      },
    ],
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === "function" && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0,
        });
      }
      const self = this;
      if (!auth.isLogin()) {
        wx.showLoading({
          mask: true,
        });
        auth
          .doLogin()
          .then((res) => {
            console.log("res123", res);
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else {
        wx.showLoading({
          mask: true,
        });
      }
    },
  },
});
