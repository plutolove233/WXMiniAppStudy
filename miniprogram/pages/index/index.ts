// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    pages: [
		{name: "注册", path: "/pages/register/register"},
		{name: "订单(组件学习)", path: "/pages/containers/containerDemo"},
		{name: "wxml学习", path: "/pages/wxmlDemo/demo"},
		{name: "event学习", path: "/pages/eventDemo/demo"},
		{name: "组件化学习", path: "/pages/component/index"},
		{name: "api学习", path: "../apiDemo/demo"}
	]
  },
  navigationButtonClick(event: any){
	  wx.navigateTo({
			url: event.target.dataset.navigation.path
		})
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
})
