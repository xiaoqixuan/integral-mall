//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    score: 500,
    array: [
      { id: 1,name: '狗粮 单身狗的专属食粮,专属的哦', num: 200, isConversion: false },
      { id: 2,name: '猫粮 喵咪的最爱', num: 200, isConversion: true },
      { id: 3,name: '狗粮 单身狗的专属食粮', num: 200, isConversion: true },
      { id: 4,name: '猫粮 喵咪的最爱', num: 200, isConversion: false },
      { id: 5,name: '狗粮 单身狗的专属食粮', num: 200, isConversion: false }
    ]
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
