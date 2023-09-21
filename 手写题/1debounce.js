/**
 * 防抖
 * 闭包 计时器：没到时间刷新计时器 用户全部活动结束后才开始执行 且执行一次
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
const fn = debounce(function(){
  console.log('hi')
}, 1000
)
document.getElementById('btn').addEventListener('click',fn)
