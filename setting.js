/*
 * @Author: 刘利军
 * @Date: 2021-09-23 20:08:43
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-09-23 20:10:45
 * @Description:
 * @PageName:
 */
/**
 * 系统配置
 */
module.exports = {
  appName: "美辰小程序",
  versionCode: "1.0.0", //小程序软件版本
  appLogo: "", //建议24*24, 本地图片或网络图片
  // 转发按钮配置：https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#onshareappmessageoptions
  share: {
    title: "美辰小程序", //自定义转发标题
    imageUrl: "", //自定义转发图片215:168
  },

  // 正式环境
  // url: "https://upapp.pec.com.cn/api/index.php",

  // 测试环境
  url: "https://mynord.cn",
};
