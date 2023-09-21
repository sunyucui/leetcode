/**
 * 节流
 * 闭包 定时器：一到时间立即执行 立即就有结果 执行一次的结果
 * ? 为什么开始的时候 timer没有赋值 对比debounce开始的时候就赋值了？
 */
const throttle = function (fn, delay) {
  let timer;
  return function () {
    if(timer) return; //执行过了 就不再执行
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    },delay)
  }
}
const fn = throttle(function(){
  console.log('hi')
}, 5000
)
document.getElementById('btn').addEventListener('click',fn)

/**
 * 反思 防抖和节流 都是多次任务执行一次 
 * 但是防抖是 等全部触发结束后 执行
 * 节流是 时间一到就立即执行 延迟执行
 */