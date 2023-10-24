/**
 * 回溯+剪枝
 * 有左括号 可以选左括号
 * 右括号比左括号少 选左括号 保持左右相等
 *  
 */
var generateParenthesis = function(n) {
  let res = [];
  const dfs = function(left,right,str) {
    if(str.length == 2*n) {  //回溯结束 构建完成
      res.push(str);
      return;
    }
    if(left > 0) {
      dfs(left-1,right,str+'(')
    }
    if(left < right) {
      dfs(left,right-1,str+')')
    }
  }
  dfs(n,n,'')
  return res;
};