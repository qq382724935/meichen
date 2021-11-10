/*
 * @Author: 刘利军
 * @Date: 2021-09-09 20:39:35
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-24 13:39:00
 * @Description:
 * @PageName:
 */
// components/number-keyboard/number-keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    paymentText:{
      type:String,
      value:'付款'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dot: ".", // 点
    numList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    inputValue: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    keyboardClick: function (e) {
      const { id } = e.target.dataset;
      const { dot, inputValue } = this.data;
      if (inputValue.length >= 8) {
        return;
      }
      const dotIndexOf = inputValue.indexOf(dot);
      if (dotIndexOf > 0) {
        if (id === dot || inputValue.length - dotIndexOf > 2) {
          return;
        }
      }
      if (inputValue.length === 0 && dot === id) {
        return;
      }

      if (inputValue.length === 0 && dot === id) {
        return;
      }

      const values = [...inputValue, id];
      this.setData({ inputValue: values });
      this.triggerEvent("onchange", { value: values.join("") });
    },
    backspaceClick: function () {
      const { inputValue } = this.data;
      if (inputValue.length > 0) {
        const values = inputValue.concat();
        values.pop();
        this.setData({ inputValue: values });
        this.triggerEvent("onchange", { value: values.join("") });
      }
    },
    confirmClick: function () {
      this.triggerEvent("confirm", { value: this.lastDot() });
    },
    lastDot: function () {
      const { dot, inputValue } = this.data;
      let value = inputValue.join("");
      if (inputValue[inputValue.length - 1] === dot) {
        value += "00";
      }
      return value;
    },
  },
});
