// pages/detals/detals.js
var list = require('../../listdata/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    index:0
  },
  click(event){
    console.log(event)
    const index = event.currentTarget.dataset.index
    this.setData({
      index
    })
    wx.navigateTo({
      url: '/pages/detalstory/detalstory?index='+index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const listData = list.list_data
    this.setData({
      listData
    })

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