/*
 * @Author: 刘利军
 * @Date: 2021-09-09 20:00:13
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-22 18:25:04
 * @Description:
 * @PageName:
 */

var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    exclusiveInterestList: [
      {
        text: "无门槛卡券",
        img: "/static/home/member-gift-bag/card.png",
        key: "1",
      },
      {
        text: "优先接待",
        img: "/static/home/member-gift-bag/reception.png",
        key: "2",
      },
      {
        text: "一对一服务",
        img: "/static/home/member-gift-bag/vip.png",
        key: "3",
      },
    ],
    cards: [
      { text: "满减券-5张", key: "1" },
      { text: "代金券-5张", key: "2" },
    ],
    money: 0,
    skuIndexKey: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const self = this;
    request.get("/goods/detail", {
      data: { code: "G7368675464923748084" },
      success: function (res) {
        const data = res.data.result.data_specs[0];
        let cards = [];
        if (res.data.result.coupon && res.data.result.coupon.length > 0) {
          cards = res.data.result.coupon.map((item) => {
            return { text: item.name, key: item.id };
          });
        }
        const money = Number.parseFloat(data.selling, 2);
        self.setData({ money, skuIndexKey: data.sku });
      },
    });
  },
  pay: function () {
    const { money, skuIndexKey } = this.data;
    request.pay({
      data: {
        order_amount: money,
        goods_sku: skuIndexKey,
        good_num: 1,
      },
      success: function (res) {
        const config = res.data.result.config;
        wx.requestOrderPayment({
          timeStamp: config.timestamp,
          nonceStr: config.nonceStr,
          signType: "MD5",
          paySign: config.paySign,
          package: config.package,
        });
      },
    });
  },
});
