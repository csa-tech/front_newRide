// pages/ride/ride.js
var app=getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    active: 0

  },
  onChange(event) {
    console.log(event.detail);
  },
  riderinfo: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  getback: function () {
    wx.navigateTo({
      url: '../index/index' // 返回键去index页面
    }

    )

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {


  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})