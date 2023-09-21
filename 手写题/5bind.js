/**
 * bind 改变上下文（this指向） 不同的是返回一个新函数 新函数也可以传递参数
 * 实现原理处理改变this指向 还利用了apply来合并参数
 * 还有闭包的方法 能够保留上下文
 * 
 */
const obj = {
  name: 'Alice',
  greeting: function(city, country) {
    console.log(`Hello, my name is ${this.name} and I am from ${city}, ${country}`);
  }
};
const person = {
  name: 'sunsun'
}
// 原生方法  对象的方法 改变上下文使得一个对象可以使用另一个对象的方法
const say = obj.greeting.bind(person, '济南');
say('山东')

//手写实现
Function.prototype.myBind = function (context, args0) {
  const fn = this; //暂存this  obj
  return function (args1) {
    return fn.apply(context,[...[args0], ...[args1]]);
  }
}

const sayhi = obj.greeting.myBind(person, '宝山区');
sayhi('上海')
