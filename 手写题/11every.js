/**
 * arr.every(fn(item,index,arr),thisArg) 返回boolean 只要有一个不满足就false 全满足才true
 * https://juejin.cn/post/7038063486827495461
 */
Array.prototype.myEvery = function(fn) {
  let res = [];
  let context = arguments[1] || window;
  if(typeof fn == 'function') {
    for(let i = 0;i < this.length; i++) {
      if(!fn.call(context, this[i], i, this)) {
        return false;
      }
    }
    return true;
  }else {
    throw new Error('parameter1 is not a function');
  }
  return res;
}