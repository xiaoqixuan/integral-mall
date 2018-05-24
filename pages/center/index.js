// pages/center/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    links: [
      { name: '积分商城', icon: 'cart', url: '../index/index' },
      { name: '扫码积分', icon: 'points', url: '../index/index' },
      { name: '我的订单', icon: 'wap-nav', url: '../order/index'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 路径跳转
   */
  toPage: function (e) {
    const { item } = e.currentTarget.dataset;
    const { url } = item;
    if (item.icon == 'cart') {
      wx.redirectTo({
        url
      })
    } else {
      wx.navigateTo({
        url
      })
    }
  }
})