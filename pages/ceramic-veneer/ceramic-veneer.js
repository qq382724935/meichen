/*
 * @Author: 刘利军
 * @Date: 2021-09-09 19:53:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 20:42:12
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
    exclusiveInterestList: [],
    skuIndexKey: "",
    number: 1,
    amount: 0,
  },
  onLoad: function () {
    const self = this;
    request.get("/goods/detail", {
      data: { code: 'G7363566215474237327' },
      success: function (res) {
        const exclusiveInterestList = res.data.result.data_specs.map((item) => {
          return {
            text: item.name,
            sku: item.sku,
            selling: Number.parseFloat(item.selling,2),
          };
        });
        self.setData({ exclusiveInterestList});
      },
    });
  },
  skuClick: function (event) {
    const id = event.target.dataset.id;
    let amount = this.clickItemAmount(id);
    this.setData({ skuIndexKey: id, amount, number: 1 });
  },
  clickItemAmount: function (id) {
    let value = 0;
    this.data.exclusiveInterestList.some((item) => {
      if (item.sku === id) {
        value = item.selling;
        return true;
      }
    });
    return value;
  },
  addNumber: function () {
    const { number, amount, skuIndexKey } = this.data;
    let itemAmount = this.clickItemAmount(skuIndexKey);
    this.setData({ number: number + 1, amount: amount + itemAmount });
  },
  removeNumber: function () {
    const { number, amount, skuIndexKey } = this.data;
    let itemAmount = this.clickItemAmount(skuIndexKey);
    if (number > 1) {
      this.setData({
        number: number - 1,
        amount: amount - itemAmount,
      });
    }
  },
  pay: function (event) {
    const { amount, number, skuIndexKey } = this.data;
    request.pay({
      data: {
        order_amount: amount,
        goods_sku: skuIndexKey,
        good_num: number,
      },
      success:function(res){
        const config = res.data.result.config;
        wx.requestOrderPayment({
          timeStamp:config.timestamp,
          nonceStr:config.nonceStr,
          signType:'MD5',
          paySign:config.paySign,
          package:config.package,
        });
      }
    });
  },
});
