/**
 * =======继承的方式 以及优缺点======
 * 1 原型链继承
 * 2 构造函数继承
 * 3 组合继承 原型链继承方法 构造函数继承属性
 * 4 寄生式组合继承
 * 5 class继承
 */

/**
 * 【1】原型链继承
 * 缺点
 * 1 所有实例共享原型上的属性和方法
 * 2 子类实例化的时候不能向父类构造函数传参
 */

/**
 * 【2】构造函数继承
 * 优点
 * 1 实例上属性和方法是单例的不共享
 * 2 可以向父类构造函数传递参数
 * 缺点
 * 1 子类访问不到父类的方法， 只能写到构造函数中才能访问
 */

/**
 * 【3】组合继承
 * 优点
 * 1 在构造函数继承的基础上， 子类可以继承父类上的方法
 * 缺点
 * 1 父类被调用了两次 call+1 new+1
 */

/**
 * 【4】寄生式组合继承
 * 最优的方法
 * 要注意重写原型会丢失constructor 要重新指定
 */

/**
 * 【5】class继承
 */