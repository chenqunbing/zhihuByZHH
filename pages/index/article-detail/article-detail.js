var datas=require('../../../data/data.js');
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
    var articleId=options.id;
    // console.log(articleId);
   var per_article_data=datas.dataList[articleId];
   this.setData({
     per_article_data:per_article_data,
     articleId:articleId
   })
  //  console.log(this.data);
   var focused=wx.getStorageSync('focused');
   if(focused){
    var focusedValue=focused[articleId];
    this.setData({
      focusedValue:focusedValue
    })
   }else{
     var focusedValue={};
     focusedValue[articleId]=false;
     wx.setStorageSync('focused', focusedValue);
   }
  },
  // var focused={
  //   1:"true",
  //   2:"false",
  //   3:"true"
  // };

  focusedTap:function(){
    var focused=wx.getStorageSync('focused');
    var per_focused=focused[this.data.articleId];
    per_focused=!per_focused;
    focused[this.data.articleId] = per_focused;
    wx.setStorageSync("focused",focused);
    this.setData({
      focusedValue:per_focused
    })
    wx.showToast({
      title: this.data.focusedValue?"关注成功":"取消成功",
      duration:300,
      icon:'success'
    })
  }

 
})