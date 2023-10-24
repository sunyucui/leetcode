/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length <=1) return s.length; // 特殊情况
  let left = 0;
  let right = 1;
  let max = 0;
  while(right < s.length) {
    let str = s.slice(left, right);
    if(str.indexOf(s.charAt(right))>-1){ //重复 -1
      left++;
    }else{
      right++;
    }
    max = Math.max(max,(right-left));
  }
  return max;
};