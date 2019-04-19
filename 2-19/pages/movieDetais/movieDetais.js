// pages/movieDetais/movieDetais.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDatas:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取对应的下标
    var idx = options.index
    // 获取远程电影数据
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      success:(res)=>{
        var movieMsg = res.data.subjects
        // 设置获取对应的下标数据
        var movieDatas = movieMsg[idx]
        this.setData({
          movieDatas
        })
      }
    })
  }
})