/**
 * 深复制 
 * 要解决 对象的属性也是对象的问题
 * 1 JSON安全 obj先转成JSON字符串,在转换成JSON Obj 不能正确的处理循环引用
 * 2 html dom自带的API structuredClone(value,{transfer:[]}) 
 * 3 递归遍历-具体实现原理 weakMap解决循环引用
 * https://juejin.cn/post/7278103488096829500
 */
const deepClone = function(obj){
  return JSON.parse(JSON.stringify(obj))
}
const deepClone2 = function(obj) {
  return structuredClone(obj)
}

const deepClone3 = function(obj, map=new WeakMap()) {
  if(typeof obj === 'object'){
    const cloneTarget = Array.isArray(obj)? [] : {};

    if(map.get(obj)){
      return map.get(obj);
    } 
    // 要拷贝的值 记录到map结构中 防止循环引用进入死循环
    map.set(obj,cloneTarget)

    for(key in obj) {
      cloneTarget[key] = deepClone3(obj[key], map)
    }
    return cloneTarget;
  }else{
    return obj;
  }
}

const obj={
  user:'haha',
  age :18,
  children: {
    user:'haha2',
    age:19
  },
  // target: obj
}
// obj.target = obj
// let cloneObj = deepClone(obj);
// let cloneObj = deepClone2(obj);

let cloneObj = deepClone3(obj);

console.log('obj',obj);
console.log('cloneObj',cloneObj);
console.log('----change----')  

cloneObj.children.user = 'cloner'

console.log('obj',obj);
console.log('cloneObj',cloneObj);

/**
 * 小知识
 * Map 与 WeakMap
 * WeakMap键是弱引用 没有引用了会垃圾回收
 */