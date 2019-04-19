var data = require("../../../datas/datas.js");
var shou = require("../../../datas/shou.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sho:[]
  },
  show0(){
    wx.navigateTo({
      url: '/pages/shou/rumen/rumen'
    })
  },
  show1() {
    wx.navigateTo({
      url: '/pages/shou/duanshi/duanshi'
    })
  },
  show2() {
    wx.navigateTo({
      url: '/pages/shou/huoyin/huoyin'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const sho=shou.shou
    this.setData({
      sho
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
    // console.log(datas1)
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