// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    show:true
  },
  // 重新加载页面
  getuser(data){
    if(data.detail.userInfo){
      this.onLoad()
    }
  },
  /**
   * 生命周期函数--监听页面加载 相当于vue里面的 mounted 
   */
  onLoad: function (options) {
   
    // 获取用户信息
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
    
        // res的authSetting 属性中scope.userInfo 属性值为true ，就表示授权
        // 反之，没有授权
        if(res.authSetting['scope.userInfo']){
          // 隐藏授权
          this.setData({
            show:false
          })
        }else{
          // 显示授权
          this.setData({
            show: true
          })
        }
      }
    })
  }
})