// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData:[],

  },
  handleclick(event){
    // 获取下标数
    var idx = event.currentTarget.dataset.index
    // 传值
    wx.navigateTo({
      url: '/pages/movieDetais/movieDetais?index='+idx,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      success:(res)=>{
        var movieData = res.data.subjects
        this.setData({
          movieData
        })
      }
    })
  }
})