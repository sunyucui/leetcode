
/**
 * es5: 过滤，按照下标 只返回 找到的第一个元素
 * 
 *  
 */
const unique = function(arr) {
  let res = arr.filter((item,index,arr)=>{
    return arr.indexOf(item) == index;
  })
  return res;
}

/**
 * es6 用Set结构的不重复性
 */
const uniqueSet = function(arr){
  return [...new Set(arr)]
}
let arr = [1,2,3,1,2,3,4];
console.log(unique(arr))
console.log(uniqueSet(arr))