/**
 * 【函数原型方法】手写 apply 
 *  可以改变this的指向 要判断 apply 参数可能是空数组的情况
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

say(100,101); 
//window 0 win 100 101

/**
 *原生 apply
 */
say.apply(obj, ['obj','obj2'])
// obj 25 sun obj obj2

/**
 * 手写
 * 1-参数obj为空时 
 * 2-新创建的属性 不规范 要使用symbol
 */
// Function.prototype.myApply = function (obj, args) {
//   obj.fn = this;
//   let res = args?.length ? obj.fn(...args) : obj.fn();
//   delete obj.fn;
//   return res;
// }
// 优化
Function.prototype.myApply = function (context, args) {
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  let res = args?.length ? context[fn](...args) : context[fn]();
  delete context[fn];
  return res;
}
say.myApply(obj,['hi','ss'])
say.myApply(obj)