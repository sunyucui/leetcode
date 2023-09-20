/**
 * 防抖
 * 闭包 计时器：没到时间刷新计时器
 */
const debounce = function (fn, delay) {
  let timer = null;
  return function () {
    if(timer){
      clearInterval(timer);
    }
    timer = setTimeout(()=>{fn.apply(this, arguments)},delay)
  }
}