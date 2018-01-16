var article_data=require('../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      article_data:article_data.dataList
    })
console.log(this.data);
   
  },
  toArticleDetail:function(event){
    console.log(event);
    var articleId=event.currentTarget.dataset.articleid;
    wx.navigateTo({
      url: 'article-detail/article-detail?id='+articleId,
    })
  },
  refresh:function(){
    wx.showLoading({
      title: '刷新中',
      mask:"false"
    })
    setTimeout(function(){
      wx.hideLoading();
      wx.showToast({
        title: '刷新成功！',
      })
    },3000)
  }

  
})