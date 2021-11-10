/*
 * @Author: 刘利军
 * @Date: 2021-09-12 14:28:58
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-20 19:49:03
 * @Description:
 * @PageName:
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardList: [
      { type: "满减券", time: "2021-08-31", money: 5, key: "1" },
      { type: "代金券", time: "2021-03-31", money: 3, key: "2" },
      { type: "满减券", time: "2021-05-31", money: 1, key: "3" },
    ],
    statusList: [
      { text: "已使用", key: "used", status: 30 },
      { text: "已过期", key: "expired", status: 99 },
    ],
    indexKey: "used",
  },
  getStatus: function (event) {
    this.setData({ indexKey: event.target.dataset.key });
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
