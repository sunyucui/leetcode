/**
 * 手写new关键字
 * 返回一个对象实例
 * 特点: 
 * 1 对象实例继承构造函数的属性和方法
 * 2 new的时候 构造函数会执行
 * 3 如果执行 返回引用直接返回结果 否则就是创建的对象
 * https://juejin.cn/post/7036186545845600270
 */
const myNew = function(fn) {
  
   let obj  = Object.create(fn.prototype);
  
  /**
   * Object.create(fn.prototype)等价于：
   * 
   * let obj = {};
   * obj.__proto__ = fn.prototype;
   */
  // let obj = {};
  // obj._proto_ = fn.prototype;
  let res = fn.apply(obj, arguments);
  return res instanceof Object ? res : obj
}

function superType() {
  this.color = ['red', 'green']
}

const instance = myNew(superType);
console.log('instance',instance)
console.log('相等？',instance instanceof superType)