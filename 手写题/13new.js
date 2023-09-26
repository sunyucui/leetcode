/**
 * 手写new关键字
 * 返回一个对象实例
 * 特点: 
 * 1 对象实例继承构造函数的属性和方法
 * 2 new的时候 构造函数会执行
 * 3 如果执行 返回引用直接返回结果 否则就是创建的对象
 * https://juejin.cn/post/7036186545845600270
 */
Function.prototype.myNew = function() {
  let obj  = Object.create(this.prototype);
  let res = this.apply(obj, arguments);
  return res instanceof Object ? res : obj
}
