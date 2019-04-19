// pages/shou/rmshezhe/rmshezhe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    arra0:false,
    aa0:' ',
    tu0:false,
    arrb0:[],
    texta0:"",
    arra1: false,
    aa1: ' ',
    tu1: false,
    arrb1: [],
    texta1: "",
    arra2: false,
    aa2: ' ',
    tu2: false,
    arrb2: ' ',
    texta2: "",
    zd:false,
    date: '2019-03-07',
    arr0:[
      {texta: '2-3天' },
      {texta: '3-4天' },
      {texta: '4-5天' },
      {texta: '5-6天' }
    ],
    arr1:[
      { texta: '每周0-1小时' },
      { texta: '每周2-4小时' },
      { texta: '每周5-8小时' },
      { texta: '每周9+小时' }
    ]
  },
  // 第一个点击
  btna0(){
        if (this.data.tu0== false) {
          var tu0 = true
          this.setData({
            tu0,
          })
          if (this.data.tu1 == true) {
            var tu1 = false;
            this.setData({
              tu1
            })
          }
          if (this.data.tu2 == true) {
            var tu2 = false;
            this.setData({
              tu2
            })
          }
        }
        else {
          var tu0 = false
          this.setData({
            tu0
          })
        }   
  },
  click0(event){
    var idx0 = event.currentTarget.dataset.index0
    var tu0 = this.data.tu0
    var aa0 = this.data.aa0
    var arra0 = this.data.arra0
    var arr0 = this.data.arr0
    var arrb0 = this.data.arrb0
    var texta0 = this.data.texta0
    var zd = this.data.zd
    for (var i = 0; i < arr0.length; i++) {
      arrb0[i] = ' '
      if (idx0 == i) {
        arrb0[i] = 'bbc'
        aa0 ='jia'
        texta0 = ":" +arr0[i].texta
      }
    }
    if (tu0== true) {
      tu0 = false
    }
    if (arra0 == false) {
      arra0 = true
    }
    if (this.data.arra0 == false && this.data.arra1 == true && this.data.arra2==true){
      zd = true
    }
    this.setData({
      tu0,
      aa0,
      arrb0,
      arra0,
      texta0,
      zd
    })
  },
  // 第二个点击
  btna1() {
    if (this.data.tu1 == false) {
      var tu1 = true
      this.setData({
        tu1,
      })
      if (this.data.tu1 == true) {
        var tu0 = false;
        this.setData({
          tu0
        })
      }
      if (this.data.tu2 == true) {
        var tu2 = false;
        this.setData({
          tu2
        })
      }
    }
    else {
      var tu1 = false
      this.setData({
        tu1
      })
    }
  },
  click1(event) {
    var idx1 = event.currentTarget.dataset.index1
    var tu1 = this.data.tu1
    var aa1 = this.data.aa1
    var arra1 = this.data.arra1
    var arr1 = this.data.arr1
    var arrb1 = this.data.arrb1
    var texta1 = this.data.texta1
    var zd = this.data.zd
    for (var i = 0; i < arr1.length; i++) {
      arrb1[i] = ' '
      if (idx1 == i) {
        arrb1[i] = 'bbc'
        aa1 = 'jia'
        texta1 = ":"+arr1[i].texta
      }
    }
    if (tu1 == true) {
      tu1 = false
    }
    if (arra1 == false) {
      arra1 = true
    }
    if (this.data.arra0 == true && this.data.arra1 == false && this.data.arra2 == true) {
      zd = true
    }
    this.setData({
      tu1,
      aa1,
      arrb1,
      arra1,
      texta1,
      zd
    })
  },
  // 第三个点击
  btna2() {
    if (this.data.tu2 == false) {
      var tu2 = true
      this.setData({
        tu2,
      })
      if (this.data.tu0 == true) {
        var tu0 = false;
        this.setData({
          tu0
        })
      }
      if (this.data.tu1 == true) {
        var tu1 = false;
        this.setData({
          tu1
        })
      }
    }
    else {
      var tu2 = false
      this.setData({
        tu2
      })
    }
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  btna(){
    var aa2 = this.data.aar
    var arrb2 = this.data.arrb2
    var arra2 = this.data.arra2
    var zd = this.data.zd
    arra2=true
    arrb2 = 'bbc'
    aa2 = 'jia'
    var texta2 = ":"+this.data.date
    if (this.data.arra0 == true && this.data.arra1 == true && this.data.arra2 == false) {
      zd = true
    }
    this.setData({
      texta2,
      arrb2,
      arra2,
      aa2,
      zd
    })
    
    if (this.data.tu2 == true) {
      var tu2 = false;
      this.setData({
        tu2
      })
    }
  },
  // 设置按钮
  btnan(){
    var obj ={
      img:'/images/jibenranzhi/bigImg.jpg',
      text:'入门计划',
    }
    wx.setStorage({
      key: 'rumen',
      data: obj,
    })
    wx.switchTab({
      url: '/pages/ myself/ myself',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let a = new Data
    console.log(a)
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