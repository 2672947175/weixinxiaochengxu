var datas = require('../../../datas/datas.js')
// pages/shou/duanshi/duanshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dat0:[],
    index:0,
    arr:[]
  },
  shou(){
    wx.switchTab({
      url: '/pages/shou/index/index'
    })
  },
  xia(){
    wx.switchTab({
      url: '/pages/nload/nload'
    })
  },
  mi(){
    wx.switchTab({
      url: '/pages/ myself/ myself'
    })
  },
  click(envet) {
    var index = envet.currentTarget.dataset.index
    this.setData({
      index,
    })
    wx.navigateTo({
      url: '/pages/shou/gailan/gailan?index='+index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(datas.short_time_exer[0])
    const dat0 = datas.short_time_exer[0]
    this.setData({
      dat0,
    
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
    var dat = this.data.dat0
    var gailan = wx.getStorageSync('name')
    if (gailan == "") {
      return false
    }
    var arra = this.data.arr
    for (var i = 0; i < dat.length; i++) {
      arra[i] = true;
      if(gailan[i]==null){
        arra[i] = false
      }
    }
    this.setData({
      arr:arra
    })
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