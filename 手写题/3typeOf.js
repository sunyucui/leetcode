/**
 * 类型判断
 * 原型链
 */
const typeOf = function (item) {
  return Object.prototype.toString.call(item).slice(8,-1).toLowerCase()
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