var jiao= require("../../../datas/jiaolian.js")
// pages/shou/huoyin/huoyin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jiaolian:[]
  },
  jiao(e){
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/shou/jiaolian/jiaolian?index='+index
    })
  },



  shou() {
    wx.switchTab({
      url: '/pages/shou/index/index'
    })
  },
  xia() {
    wx.switchTab({
      url: '/pages/nload/nload'
    })
  },
  mi() {
    wx.switchTab({
      url: '/pages/ myself/ myself'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(jiao.jiaolian[0])
    var jiaolian = jiao.jiaolian[0]
    this.setData({
      jiaolian
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