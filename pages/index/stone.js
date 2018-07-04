//石头对象

function Ston(width, height, color, clinetX, clinetY) {
  var obj = new Object();
  //石头宽高
  obj.height = height;
  obj.width = width;
  //颜色
  obj.color = color;
  //位置信息
  obj.clinetX = clinetX;
  obj.clinetY = clinetY;

  return obj;
}

Ston.prototype = {
  
}

module.exports = Ston;