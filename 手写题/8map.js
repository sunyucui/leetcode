/**
 * arr.map(fn(item,index,arr),thisArg) 返回新数组
 * 跟forEach的逻辑一样 只是返回的是一个新数组
 * https://juejin.cn/post/7036506894449508365
 */
Array.prototype.myMap = function(fn) {
  let res=[];
  let context = argument[1] || window;
  if(typeof fn == 'function'){
    for(let i=0;i<this.length;i++){
      res.push(fn.call(context,this[i],i,this));
    }
  } else {
    throw new Error('parameter1 is not a function')
  }
  return res;
}