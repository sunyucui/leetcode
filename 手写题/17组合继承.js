function superType(name) {
  this.name = name;
}
// 方法写到父类原型
superType.prototype.sayHi = function() {
  console.log('hi: '+ this.name)
}

function a(name,age) {
  // 通过构造函数继承 传递参数 【调用一次父类】
  superType.call(this, name);
  this.age = age;
}
// 原型链继承 【调用一次父类】
a.prototype = new superType()

let instance1 = new a('lili',19);
instance1.sayHi();
let instance2 = new a('mike',18);
instance2.sayHi();

