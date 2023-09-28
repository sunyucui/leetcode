/**
 * 数组扁平化
 * [1,[2],[3,[4]]] ===> [1,2,3,4]
 * 1 es6的 flat方法
 * 2 递归的取出值
 */
const myFlat = function(arr){
  return arr.flat(Infinity);
}

const myFlat2 = function(arr){
  let res = [];
  
  const flat = function(arr){
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        flat(arr[i])
      }else{
        res.push(arr[i]);
      }
    }
  }
  flat(arr)
  return res;
}
let arr = [1,[2],[3,[4]]];
console.log('es6:',myFlat(arr))
console.log('递归:',myFlat2(arr))