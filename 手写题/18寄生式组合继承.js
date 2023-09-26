function superType() {

}
function a() {
  // 构造函数继承
  superType.call(this, arguments);
}
// Object.create() 复制原型上的属性和方法
a.prototype = Object.create(superType.prototype);
superType.prototype.constructor = superType;
// 重写原型会让constructor丢失