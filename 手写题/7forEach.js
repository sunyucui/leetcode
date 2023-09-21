/**
 * 手写数组原型方法 forEach
 * 原生 arr.forEach(function(item,index,arr),thisArg)\
 * 两个参数 1-函数(每一项，下标，数组本身)2-上下文
 * 
 * arguments是内置的参数列表
 */
Array.prototype.myForEach = function (fn) {
  let context = arguments[1] || window; //处理第二个参数
  // 数组调用这个方法 当前this必然是数组本身
  if(typeof fn === 'function') {
    for(let i = 0; i < this.length; i++) {
      fn.call(context, this[i], i, this)
    }
  }else {
    // 确保第一个参数是个函数
    throw new Error('parameter1 is not a function')
  }
}

let arr = [1,2,3];
arr.myForEach((item,index,arr)=>{
  console.log('item: ',item,'index: ',index, 'arr is: ',arr)
})