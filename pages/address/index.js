// pages/address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forms: [
      { title: '收货人', placeholder: '请输入收货人', value: '李XX' },
      { title: '联系方式', placeholder: '请输入联系方式', value: '132****6587' },
      { title: '收货地址', placeholder: '请输入详细地址（最多50字）', value: '成都市天府新区华阳' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('地址：' + options.id)
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
  
  }
})