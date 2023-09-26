/**
 * arr.filter(fn(item,index,arr),thisArg) 返回新数组--内容是符合条件的
 * https://juejin.cn/post/7037399569730109471
 */
Array.prototype.myFilter = function(fn) {
  let res = [];
  let context = arguments[1] || window;
  if(typeof fn == 'function') {
    for(let i=0; i<this.length; i++) {
      if(fn.call(context,this[i],i,this)){ //fn作为条件判断
        res.push(this[i]);
      }
    }
  } else {
    throw new Error('parameter1 is not a function');
  }
  return res;
}