/**
 * 1-转换成数组
 * 2-数组翻转
 * 3-拼接成字符串
 * 
 */
var reverseWords = function(s) {
  let sArr = s.split(' ');
  sArr = sArr.reverse().filter(i => i.trim());
  return sArr.join(' ')
};