/**
 * Object类型复制-浅拷贝
 * 引用复制是复制的栈中的对象指向 指向的是同一块内存空间
 * 
 * 浅拷贝只拷贝对象的第一层 在堆中开辟内存复制存储，
 * 栈中存引用，对象的属性是对象的话不会另外开辟空间复制存储 --- 浅复制
 * 
 * 1-遍历复制
 * 2-Object.assign()
 * 3-扩展运算符
 * 
 * typeof 基本类型判断 无法细分object（） 
 * arr instance Array  arr是Array
 */

const shallowClone = function(obj){
  const cloneTarget = Array.isArray(obj) ? [] : {};
  for(key in obj){
    cloneTarget[key] = obj[key];
  }
  return cloneTarget;
}
/**
 * es6 object.assign() 对象合并 也是浅复制
 * 只适合对象
 */

const shallowClone2 = (obj) =>  Object.assign({}, obj)

/**
 * 扩展运算符
 * */
const shallowClone3 = (obj) => {
  return Array.isArray(obj)? [...obj] : {...obj}
}



let arr = [1,2,3,4,5];
// let copyArr = shallowClone(arr);
// let copyArr = arr.slice();
let copyArr = arr.concat();
// let copyArr = shallowClone3(arr);
// let copyArr = arr; //直接复制的是引用 改变当前数组原数组也会改变

const obj={
  user:'haha',
  age :18,
  children: {
    user:'haha2',
    age:19
  }
}
// let copyObj = shallowClone(obj)
// let copyObj = shallowClone2(obj)
let copyObj = shallowClone3(obj)

// console.log('copyArr',copyArr) 
console.log('Arr',arr) 
console.log('copyArr',copyArr) 
copyArr[1] =100
console.log('----change----') 
console.log('Arr',arr) 
console.log('copyArr',copyArr) 



console.log('obj',obj) 
console.log('clone-obj',copyObj) 
console.log('----change----') 

copyObj.user = 'cloner';
copyObj.children.user = 'cloner2'

/**
 * 浅复制--所以cloneObj和Obj的children共享内存
 */
console.log('obj',obj) 
console.log('clone-obj',copyObj) 