/*
 * @Author: 刘利军
 * @Date: 2021-09-09 20:17:58
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-24 13:28:37
 * @Description:
 * @PageName:
 */
// components/digital-keyboard/digital-keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
    paymentText:{
      type:String,
      value:'付款'
    }
  },
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的初始数据
   */
  data: {
    mode: "number",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function (e) {
      this.triggerEvent("onchange", e.detail);
    },
    backspaceClick: function (e) {
      this.triggerEvent("backspace", e.detail);
    },
    confirmClick: function (e) {
      this.triggerEvent("confirm", e.detail);
    },
  },
});
