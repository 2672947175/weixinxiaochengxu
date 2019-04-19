// pages/vdo/vdo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audios:{},
    a:false,
    da:0,
    urla:'/images/music/kaishi.png',
    timer:null
  },
  play(){
   if(this.data.a == false){
     clearInterval(timer)
     this.data.audios.play()
     var dat
     var da
     var timer = setInterval(() => {
       console.log(1)
       dat = this.data.audios.currentTime / this.data.audios.duration * 100
       da = dat.toFixed(1)
       
       this.setData({
        da
       })
     }, 1000)
     this.setData({
       a: true,
       urla: '/images/music/music-stop.png',
       timer
     })
   }
   else{
     this.data.audios.pause()
     console.log(this.data.timer)
     clearInterval(this.data.timer)
     this.setData({
       a: false,
       urla: '/images/music/kaishi.png'
     })
   }
  },
  fna(){
   console.log('aaa')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建音频
    var audios = wx.createInnerAudioContext()
    console.log(audios)
    audios.src ='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'

    audios.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    this.setData({
      audios
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