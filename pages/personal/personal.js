/*
 * @Author: 刘利军
 * @Date: 2021-09-09 16:53:32
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 11:04:59
 * @Description:
 * @PageName:
 */

var app = getApp();

Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === "function" && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1,
        });
      }
      this.setData({userData:app.globalData.userData})
    },
  },
  data: {
    userData: {
      nickname: "",
      total_amount: "",
      balance: "",
      avatar: "",
      tel: "",
      level_id:''
    },
    wrapperList: [
      {
        text: "推广",
        key: "payment",
        img: "/static/home/member-gift-bag/extension.png",
        url: "/pages/personal/extension/extension",
      },
      {
        text: "我的卡券",
        key: "memberGiftBag",
        img: "/static/home/member-gift-bag/mycard.png",
        url: "/pages/personal/card-voucher/card-voucher",
      },
      {
        text: "我的订单",
        key: "ceramicVeneer",
        img: "/static/home/member-gift-bag/order.png",
        url: "/pages/personal/order/order",
      },
      {
        text: "我的团队",
        key: "team",
        img: "/static/home/member-gift-bag/team.png",
        url: "/pages/personal/team/team",
      },
    ],
    helps: [
      {
        text: "设置",
        key: "setting",
        img: "/static/home/member-gift-bag/team.png",
        url: "/pages/personal/setting/setting",
      },
    ],
  },
});
