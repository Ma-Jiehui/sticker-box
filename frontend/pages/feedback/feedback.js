// Pages/feedback/feedback.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarConfig: {
      iconType: "fa fa-chevron-left",
      title: "反馈",
      statusBarHeight: app.globalData.statusBarHeight
    },
  },

  //响应点击返回按钮返回上一页
  onTapTopLeftIcon: function () {
    wx.navigateBack({
      
    })  
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

  }
})