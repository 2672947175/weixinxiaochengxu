// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idxif:true,
    userInfo:{}
  },
  
  getuser(data) {
    if (data.detail.userInfo) {
      this.onLoad()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success:(data)=>{
        var userInfo = data.userInfo;
        this.setData({
          userInfo
        })
      }
    })
    // 获取用户是否授权的状态
    wx.getSetting({
      success:(res)=>{
        if(res.authSetting['scope.userInfo']){
          this.setData({
            idxif:false
          })
        }else{
          this.setData({
            idxif: true
          })
        }
      }
    })
  }
})