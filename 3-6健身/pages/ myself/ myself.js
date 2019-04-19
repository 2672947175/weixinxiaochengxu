// pages/ myself/ myself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    userInfo: {},
    show: true,
    rumen:{},
    tfa:false,
    tfb: false,
    
  },
  btna(){
    wx.navigateTo({
      url: '/pages/myselfxianqing/myselfxianqing'
    })
  },
  btn(envet){
    console.log(envet.currentTarget.dataset.index)
    var idx = envet.currentTarget.dataset.index
    var index = this.data.arr[idx].index
    var offa = true
    wx.navigateTo({
      url: '/pages/shou/gailan/gailan?index=' + index+'&offa='+offa,
    })

  },

  // 重新加载页面
  getuser(data) {
    if (data.detail.userInfo) {
      this.onLoad()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    wx.getUserInfo({
      success: (data) => {
        var userInfo = data.userInfo;
        this.setData({
          userInfo
        })
      }
    })
    // 获取用户是否授权的状态
    wx.getSetting({
      success: (res) => {
        // 判断是否授权
        if (res.authSetting['scope.userInfo']) {
          // 隐藏授权
          this.setData({
            show: false
          })
        } else {
          // 显示授权
          this.setData({
            show: true
          })
        }
      }
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
    // 获取入门同步获取缓存数据
    var rumen = wx.getStorageSync('rumen')
    var tfa=false
    if (rumen!=''){
      tfa=true
    }
    this.setData({
      rumen,
      tfa
    })
    // 获取短时同步获取缓存数据
    var arr = wx.getStorageSync('name')
    var arr1 = []
    this.setData({
      arr: []
    })
    if (arr == "") {
      return false;
    }
    var tfb = false
    if (arr != '') {
      tfb = true
    }
    this.setData({
      tfb
    })
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != null) {
        arr1.push(arr[i])
        this.setData({
          arr: arr1
        })
      }
    }

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