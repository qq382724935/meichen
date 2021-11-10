/*
 * @Author: 刘利军
 * @Date: 2021-09-09 16:42:23
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-23 20:38:22
 * @Description:
 * @PageName:
 */

//app.js
var setting = require("setting.js");
var request = require("./utils/request.js");
var auth = require("./utils/auth.js");
App({
  globalData: {
    // 测试
    url: 'https://mynord.cn',
    // 正式
    // url: 'https://upapp.pec.com.cn/api/index.php'
    setting: setting,
  },

  /** 全局请求对象，涉及业务的请求，请使用此接口 */
  request: request,
  auth: auth,
  onLaunch() {},
});
