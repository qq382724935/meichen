/*
 * @Author: 刘利军
 * @Date: 2021-09-09 19:53:02
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-22 19:02:27
 * @Description:
 * @PageName:
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    exclusiveInterestList: [
      {
        text: "全瓷超薄牙贴",
        img: "/static/home/member-gift-bag/card.png",
        id: "1",
        moeny: 83,
      },
      {
        text: "E-MAX超薄全瓷贴面",
        img: "/static/home/member-gift-bag/reception.png",
        id: "2",
        moeny: 823,
      },
      {
        text: "超薄进口全瓷贴面",
        img: "/static/home/member-gift-bag/vip.png",
        id: "3",
        moeny: 393,
      },
    ],
    skuIndexKey: "",
    number: 1,
    amount: 0,
  },
  skuClick: function (event) {
    const id = event.target.dataset.id;
    let amount = this.clickItemAmount(id);
    this.setData({ skuIndexKey: id, amount, number: 1 });
  },
  clickItemAmount: function (id) {
    let valur = 0;
    this.data.exclusiveInterestList.some((item) => {
      if (item.id === id) {
        valur = item.moeny;
        return true;
      }
    });
    return valur;
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
});
