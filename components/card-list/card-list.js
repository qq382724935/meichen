/*
 * @Author: 刘利军
 * @Date: 2021-09-12 15:25:16
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-12 16:23:05
 * @Description:
 * @PageName:
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
    },
    status: {
      type: Number,
      vlaue: 10,
    },
    background: {
      type: String,
      value: "",
    },
  },

  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
