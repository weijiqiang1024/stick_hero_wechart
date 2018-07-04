//game_manager
const Ston = require('./stone.js');

function GameManager() {

}

GameManager.prototype = {

  //初始化参数
  setup: function() {
    this.initCreatSton();
  },
  //初始化是石头数组
  initCreatSton: function() {
    //获取屏幕宽度
    let appWidth = wx.getSystemInfoSync().windowWidth;
    //生成石头对象
    let stonArr = [];
    let color = 'balck';
    let height = 20;
    let ston1 = new Ston(20, height, color, 0, 0);
    stonArr.push(ston1);
    let stonWidth = this.generatorStonWidth();
    let clinetX = this.generatorClinetX(ston1.width, appWidth);
    let ston2 = new Ston(stonWidth, height, color, clinetX, 0);
    stonArr.push(ston2);
    return stonArr;
  },

  /**
   * @preStonWidth:前一个石头的宽度
   * @ptrStonClientX:前一个石头X轴坐标
   * @appWidth:app宽度
   */
  generatorClinetX: function(preStonWidth, appWidth) {

    return parseInt(Math.random() * (appWidth - preStonWidth) + preStonWidth);

  },

  /**
   *@随机生成石头的宽度
   *  
   */
  generatorStonWidth: function() {

    return parseInt(Math.random() * 50);

  }

}

module.exports = GameManager;