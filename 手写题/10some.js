/**
 * arr.some(fn(item,index,arr),thisArg) 返回boolean 1存在一个元素满足条件true 2都不满足返回false
 * https://juejin.cn/post/7038063486827495461
 */

Array.prototype.mySome = function (fn) {
  let res =false;
  let context = arguments[1] || window;
  if(typeof fn == 'function') {
    for(let i=0;i < this.length; i++) {
      if(fn.call(context, this[i], i, this)) {
        return true; //只要有一个满足就true
      }
    }
    return false;
  }else {
    throw new Error('parameter1 is not a function');
  }
  return res;
}