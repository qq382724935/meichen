/*
 * @Author: 刘利军
 * @Date: 2021-09-09 20:00:13
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-20 19:58:22
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
      { text: "洗牙券-5张", key: "3" },
      { text: "洗牙券-5张", key: "4" },
      { text: "洗牙券-5张", key: "5" },
      { text: "洗牙券-5张", key: "6" },
      { text: "洗牙券-5张", key: "7" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
