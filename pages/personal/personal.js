/*
 * @Author: 刘利军
 * @Date: 2021-09-09 16:53:32
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 11:04:59
 * @Description:
 * @PageName:
 */

var app = getApp();
var request = app.request;
var auth = app.auth;

Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === "function" && this.getTabBar()) {
        this.getTabBar().setData({selected: 1});
      }
      const self = this;
      if (!auth.isLogin()) {
        request.showLoading();
        auth
          .doLogin()
          .then(() => {
            self.init()
            wx.hideLoading();
          })
          .catch(() => {
            wx.hideLoading();
          });
      }else{
        self.init()
      }
    },
    
  },
  data: {
    isLogin:false,
    userData: {
      nickname: "",
      total_amount: "",
      balance: "",
      headimg: "",
      tel: "",
      level_id:''
    },
    total:0,
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
  methods:{
    init:function(){
      const userData= app.globalData.userData;
      if(userData){
        const total = Number.parseFloat(userData.balance_total-userData.balance_used,2);
        this.setData({userData,total,isLogin:true})
      }
    }
  }
});
