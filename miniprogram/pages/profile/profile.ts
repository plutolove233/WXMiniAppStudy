// pages/profile/profile.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listNum: 60,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取共享数据
    const app = getApp()
    const token = app.globalData.token
    // send http request
    
    // display userinfo to page
    this.setData({
      userInfo: {
        token: token,
        data: app.globalData.userInfo
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    setTimeout(()=>{
      wx.stopPullDownRefresh({
        success: (res)=>{
          this.setData({
            listNum: 30
          })
          console.log("stop pull down refresh success, res=", res)
        },
        fail: (err) => {
          console.log("stop pull down refresh failed, err=", err)
        }
      })
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({
      listNum: this.data.listNum + 30
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})