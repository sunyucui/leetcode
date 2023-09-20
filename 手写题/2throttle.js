/**
 * 节流
 * 闭包 定时器：一到时间立即执行
 * ? 为什么开始的时候 timer没有赋值 对比debounce开始的时候就赋值了？
 */
const throttle = function (fn, delay) {
  let timer;
  return function () {
    if(timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    },delay)
  }
}