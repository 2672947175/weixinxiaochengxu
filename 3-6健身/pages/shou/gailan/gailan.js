var dat = require('../../../datas/datas.js')
// pages/shou/gailan/gailan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dtas:[],
    index:0,
    off:false,
    offa:false
  },
  tianjia(){
    // 获取对应页面的下标
    var index = this.data.index;
    // 改变off
    var off = !this.data.off;
    this.setData({
      off
    });
    // 弹框提示
    if (this.data.off==true){
      wx.showToast({
        title: '收藏成功'
      })
    };
    // 获取设置对象
    var obj = {
      index:index,
      image: this.data.dtas.titleImg,
      name: this.data.dtas.title,
      off: off,
      offa:false
    }
    // 获取同步缓存
    var arr = wx.getStorageSync('name');
    if(arr ==''){
      arr=[]
    }
    arr[index]=obj;
    // 设置同步缓存
    wx.setStorageSync('name', arr)
  },
  chakan(){
    wx.switchTab({
      url: '/pages/ myself/ myself'
    })
  },
  // 分享给好友
  fengxian(){
   
  },
  // 删除
  chanchu(){
    //获取缓存
    var gailian = wx.getStorageSync('name')
    var index = this.data.index
    for (var i = 0; i < gailian.length;i++){
      if (gailian[i]!=null) {
        var idx = gailian[i].index;
        if (idx == index){
          gailian.splice(i,1)
          wx.removeStorageSync('name');
        }
      } 
    }
     // 设置同步缓存
    wx.setStorageSync('name', gailian)
    if (this.data.off == false) {
      wx.showToast({
        title: '删除成功'
      })
    };
    wx.switchTab({
      url: '/pages/ myself/ myself'
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.offa)
    const index = options.index;
    const offa = options.offa;
    const dtas = dat.short_time_exer[1][index]
   
    if (offa=="true"){
      this.setData({
        offa:true
      })
    }
    this.setData({
      index,
      dtas
    })
    // 使用同步获取
    var gailian = wx.getStorageSync('name')
    if (gailian[index]==null) {
      this.setData({
        off: false
      })
    } else {
      this.setData({
        off: true
      })
    }
    console.log(this.data.off)
  }
})