// pages/detals/detals.js
var datas = require('../../listdata/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:{},
    index:0,
    isCollected:false
  },
  handleclick (){
    // 获取详情页下标
    var index = this.data.index
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })

    if(this.data.isCollected==true){
      wx.showToast({
        title: "收藏成功"
      })
    }else{
      wx.showToast({
        title: "取消成功"
      })
    }
    // 缓存设置
    // 获取已缓存对象
    wx.getStorage({
      key: 'isCollected',
      success: function(res) {
        // 缓存数据 res.data
        let collecteaObj = res.data
        collecteaObj[index] = isCollected
        wx.setStorage({
          key: 'isCollected',
          data: collecteaObj
        })
      },
      fail(){
        // 如果没有缓存数据
        let collecteaObj = {}
        collecteaObj[index] = isCollected
        wx.setStorage({
          key: 'isCollected',
          data: collecteaObj
        })
      }
    })
    
  },
  fenxian(){
    wx.showShareMenu({
      success(){
        console.log('ass')
      }
    })
  },
  // 分享按钮的点击事件
  btn(){
    wx.showShareMenu({
      withShareTicket:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(datas)
    var index = options.index
    // 获取详情页的数据
    var detailData =datas.list_data[index]
    this.setData({
      index,
      detailData
    })
    // 获取缓存数据，来判断是否被收藏
    // 使用同步获取
    var stordata = wx.getStorageSync('isCollected')
    if (stordata[index]==true){
      this.setData({
        isCollected:true
      })
    }else{
      this.setData({
        isCollected:false
      })
    }
  },
})