var article_data = require('../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      },
    })
    this.setData({
      article_data: article_data.dataList
    })
    // console.log(this.data);
  },
  changeNav: function (event) {
    // console.log(event);
    if (this.data.currentTab == event.currentTarget.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: event.currentTarget.dataset.current
      })
    }
  },
  bindChange: function (event) {
    var that = this;
    that.setData({
      currentTab: event.detail.current
    })
    // console.log(event);
  }


})