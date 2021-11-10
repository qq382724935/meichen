Component({
  data: {
    selected: 0,
    color: "#999999",
    selectedColor: "#7BB8F1",
    list: [
      {
        text: "首页",
        pagePath: "/pages/index/index",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/selectedhome.png",
      },
      {
        text: "我的",
        pagePath: "/pages/personal/personal",
        iconPath: "/static/personal.png",
        selectedIconPath: "/static/selectedpersonal.png",
      },
    ],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        selected: data.index,
      });
    },
  },
});
