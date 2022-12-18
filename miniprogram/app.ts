// app.ts
App({
  globalData: {// 非响应式数据，通常保存一些固定的数据
    token: "",
    userInfo: {},
  },
  onLaunch(options) {
    console.log(options)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const token = wx.getStorageSync("token")
    const userInfo = wx.getStorageSync("userInfo")
    if (!token || !userInfo){
      console.log("login in...")
      // 登录
      wx.login({
        success: res => {
          console.log(res.code)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        },
      })
      wx.setStorageSync("token", "inner token")
      wx.setStorageSync("userInfo", {nickname: "shyhao", level: 10})
    }
    this.globalData.token = token
    this.globalData.userInfo = userInfo
  },
  onShow(){
    console.log("on show")
  },
  onHide(){
    console.log("on hide")
  }
})