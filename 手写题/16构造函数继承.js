function superType(name) {
  this.color = ['red','green'];
  this.name = name;
  this.say = function(){
    console.log('hi '+name);
  }
}
superType.prototype.sayHi = function(){
  console.log('hi')
}
function a(name) {
  //构造函数继承 直接调用构造函数
  superType.call(this, name);
}

let instance1 = new a('lili');
instance1.color.push('lili white');
console.log(instance1.color,'lilli');
instance1.say();
instance1.sayHi(); //报错 不能访问父类中的方法

let instance2 = new a('mike');
instance2.color.push('mike yellow');
console.log(instance2.color,'mike');
instance2.say()