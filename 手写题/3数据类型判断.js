/**
 * 类型判断
 * 1 typeof
 * 2 instanceof
 * 3 constructor
 * 4 Object.prototype.toString().call(this)
 * https://juejin.cn/post/7275551289965084724
 */
const typeOf = function (item) {
  return Object.prototype.toString.call(item).slice(8,-1).toLowerCase()
}

const instanceOf = function (obj, constructor){
  if(typeof constructor !== 'function') {
    throw new TypeError('Right-hand side of instanceof is not a function');
  }
  if(obj == null || typeof obj !== 'object'&& typeof obj!=='function'){
    return false;
  }
  let proto = Object.getPrototypeOf(obj);
  // 顺着原型链上找
  //原型链的最顶端是null
  while(proto){
    if(proto == constructor.prototype){
      return true;
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false;
}
/**
 * 如果不切割的话
[object Array]
[object Object]
[object Date]
 */
console.log(typeOf([])) //array
console.log(typeOf({})) //object
console.log(typeOf(new Date())) //date

/**
 * 知识点
 * 1 typeof
 *   判断基本类型，无法细分Object引用类型（Array,Object Function,Date）
 * 2 instanceof
 *   前提是要有构造函数 不能判断基本类型和null undefined（没有构造函数）
 * 3 constructor
 *   可以判断基本类型（隐式转换成包装对象）和引用类型， 不能判断undefined null
 * 4 Object.prototype.toString().call(this)
 *   官方给出的最准确方法
 */