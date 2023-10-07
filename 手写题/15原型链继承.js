function superType() {
  this.color = ['red', 'green']
}
let superTypeInstance = new superType();

function a() {};

a.prototype = new superType()

let instance1 = new a();
instance1.color.push('blue')

let instance2 = new a();

console.log('instance1',instance1.color) // ['red','green','blue']
console.log('instance2',instance2.color) // ['red','green','blue']

console.log('-----prototype-----') //superType()
console.log('superType',superType) //superType()
console.log('superType.prototype',superType.prototype) //superType()
console.log('superTypeInstance._proto_',superTypeInstance.__proto__) //superType()
console.log('superTypeInstance.__proto__ == superType.prototype相等？',superTypeInstance.__proto__ == superType.prototype) //superType()
console.log('superType.prototype.constructor',superType.prototype.constructor) //superType()
console.log('superType == superType.prototype.constructor 相等？',superType == superType.prototype.constructor) //superType()


console.log('-----constructor-----') //superType()
console.log('superTypeInstance',superTypeInstance) 
console.log('superTypeInstance is object?',Object.prototype.toString.call(superTypeInstance)) 

/**
 * 原型链相关知识
 * 1 【得到对象】prototype (函数独有) 函数的原型对象 代表实例所共享的原型 prototype={constructor,[[Prototype]]} 
 * 2 【得到对象】__proto__ 或者[[Prototype]] (实例对象有) 实例的原型对象，构成原型链 ins.__proto__ = fn.prototype
 * 3 【得到函数】constructor (实例对象有) 构造函数
 * https://blog.csdn.net/cc18868876837/article/details/81211729
 */

/**3mn
 * superType 是构造函数
 * 1 跟prototype的关系
 * 2 跟__proto__的关系
 * 任何函数在创建的时候，其实会默认同时创建该函数的prototype对象 有constructor属性
 * fn.prototype.constructor = fn
 * constructor属性的终点就是Function这个函数。
 */

/**
 * superType.prototype = {constructor: f:superType, [[Prototype]]} 是superType实例的公共对象
 * (原型)superType.prototype = (实例) instance.__proto__
 */

/**
 * 实例 是一个对象 
 * {...属性, [[Prototype]]：{constructor,[[Prototype]]} }
 * ins.__proto__ = fn.prototype
 */

/**
 * new 构造函数得到实例 instance
 * 1.创建一个新对象 {}
 * 2.调用构造函数superType 内部的this指向新对象
 * 3.返回新对象的引用
 */