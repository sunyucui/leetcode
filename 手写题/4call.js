/**
 * 【函数原型方法】手写 call 
 *  可以改变this的指向
 */
var age= 0;
var name = 'win';

var obj = {
  age: 25,
  name:'sun'
}

var say = function (a,b) {
  console.log(this);
  console.log(this.age);
  console.log(this.name);
  console.log(a);
  console.log(b);
}

// say(100,101); 
//window 0 win 100 101

/**
 *原生 call
 */
// say.call(obj, 'obj','obj2')
// obj 25 sun obj obj2
/**
 * 手写
 * 当前的问题 
 * 1-参数obj为空时 
 * 2-新创建的属性 不规范 要使用symbol
 */
// Function.prototype.myCall = function (obj, ...arg) {
//   obj.fn = this; 
//   let res = obj.fn(...arg);
//   delete obj.fn;
//   return res;
// }
// 优化 思路不变
Function.prototype.callx = function (context, ...args) {
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
}
/**
 * 以say为例 上述代码
 * 1 say调用myCall this指向say
 * 2 obj.fn = this  把say挂载到obj的方法上 这样调用say的this变成了obj 【改变了this指向】
 * 3 删除掉原来的方法 
 * https://blog.csdn.net/weixin_40920953/article/details/100655515
 */
say.callx(obj, 'obj1', 'obj2')
