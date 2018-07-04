//石头对象

function Ston(width, height, color, clientX, clinetY) {
  var obj = new Object();
  //石头宽高
  obj.height = height;
  obj.width = width;
  //颜色
  obj.color = color;
  //位置信息
  obj.clientX = clientX;
  obj.clinetY = clinetY;

  return obj;
}

Ston.prototype = {
  
}

module.exports = Ston;