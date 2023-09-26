/**
 * arr.reduce(fn(pre, curr, index, arr),init) 返回一个遍历完数组后计算的值
 */
Array.prototype.myReduce = function (fn, init) {
  let res = init || this[0];
  let i = init ? 0 : 1;
  if(typeof fn == 'function') {
    for(i; i < this.length; i++){
      res = fn(res, this[i], i, this);
    }
  }else {
    throw new Error('parameter1 is not a function')
  }
  return res;
}
 let arr=[1,2,3];
 console.log(arr.myReduce((pre,curr)=>pre+curr))
 console.log(arr.myReduce((pre,curr)=>pre+curr, 6))