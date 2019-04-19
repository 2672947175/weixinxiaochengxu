// pages/shou/rumen/rumen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xunl: [{ textb: '训练级别', textc: '初级和中级' }, { textb: '适合人群', textc:'刚开始训练或者只想保持健康的人群'}],
    tf:false
  },
  btn(){
    wx.navigateTo({
      url: "/pages/shou/rmshezhe/rmshezhe"
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
     var rm = wx.getStorageSync('rumen');
     if(rm!=''){
       var tf = true;
       this.setData({
         tf
       })
     }

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