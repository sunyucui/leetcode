/**
 * 贪心
 * 
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]); //注意回调的函数体 {} 和没有{}
  let pre = intervals[0];
  let result = [];
  for(let i = 0;i<intervals.length;i++){
    let curr = intervals[i];
    if(curr[0] > pre[1]){
      result.push(pre);
      pre = curr;
    }else{
      pre[1] = Math.max(curr[1],pre[1]);
    }
  }
  result.push(pre);
  return result;
};