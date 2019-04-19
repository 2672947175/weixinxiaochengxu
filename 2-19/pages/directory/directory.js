// pages/directory/directory.js
var datas = require('../../listdata/list-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    index:0
  },
  click(event){
    console.log(event)
    // 获取wxml 中提价的数据
    var index = event.currentTarget.dataset.index
    this.setData({
      index
    })
    // 进行页面跳转 并且传递下标
    wx.navigateTo({
      url: '/pages/detals/detals?index=' + index
    })
  },
  aud(){
    wx.navigateTo({
      url: '/pages/vdo/vdo',
    })
  },
  vdo(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    console.log(datas)
    this.setData({
      arr:datas.list_data
    })
  }
})