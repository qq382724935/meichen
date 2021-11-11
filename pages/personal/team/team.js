/*
 * @Author: 刘利军
 * @Date: 2021-09-11 14:42:30
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-11-11 07:53:09
 * @Description:
 * @PageName:
 */
// pages/personal/team/team.js
var app = getApp();
var request = app.request;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        roleName: "游客",
        number: 60,
        id: 1,
        child: [
          {
            name: "路人甲",
            createDate: "2020-29-03",
            number: 20,
            id: 9,
          },
          {
            name: "路人甲",
            createDate: "2020-29-03",
            number: 40,
            id: 3,
          },
        ],
      },
      {
        roleName: "合伙人",
        number: 80,
        id: 2,
        child: [
          {
            name: "路人甲233",
            createDate: "2020-29-03",
            number: 50,
            id: 1,
          },
          {
            name: "路人甲242",
            createDate: "2020-29-03",
            number: 30,
            id: 2,
          },
        ],
      },
      {
        roleName: "经理",
        number: 44,
        id: 3,
        child: [
          {
            name: "路人甲233",
            createDate: "2020-29-03",
            number: 22,
            id: 1,
          },
          {
            name: "路人甲242",
            createDate: "2020-29-03",
            number: 22,
            id: 2,
          },
        ],
      },
      {
        roleName: "总监",
        number: 0,
        id: 4,
        child: [],
      },
      {
        roleName: "董事",
        number: 0,
        id: 5,
        child: [],
      },
    ],
  },
  onLoad: function () {
    request.get("/level/list", {
      success: function (res) {
        console.log("team", res);
      },
    });
  },
  goto: function (event) {
    wx.navigateTo({
      url: `/pages/personal/subordinate/subordinate?data=${encodeURI(
        JSON.stringify(event.target.dataset.item)
      )}`,
    });
  },
});
