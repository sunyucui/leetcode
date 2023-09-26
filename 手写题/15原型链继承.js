function superType() {
  this.color = ['red', 'green']
}
function a() {};

a.prototype = new superType()

let instance1 = new a();
instance1.color.push('blue')

let instance2 = new a();

console.log('instance1',instance1.color) // ['red','green','blue']
console.log('instance2',instance2.color) // ['red','green','blue']