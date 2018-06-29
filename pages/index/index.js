//index.js
//获取应用实例
const app = getApp();
let timer;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    stickHight: 20,

  },
  //监听touch事件
  mytouchstart: function() {

    console.log(this.data.stickHight, 66666);
    this.stickIncrease();
  },
  mytouchend: function() {
    console.log(this.data.stickHight, 66666);
    //清除定时器
    clearInterval(timer);
  },
  stickIncrease: function() {
    timer = setInterval(() => {
      this.data.stickHight = this.data.stickHight+5;
      this.setData({
        stickHight: this.data.stickHight
      })
    }, 50);
  },
  //转发事件
  onShareAppMessage: function() {
    return {
      title: '英雄难过棍子关',
      path: '/page/user?id=123'
    }
  },
  //自定事件
  viewTap: function() {
    console.log('view tap')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})