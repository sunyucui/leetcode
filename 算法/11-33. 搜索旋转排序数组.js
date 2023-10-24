/**
 * 二分法
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/solutions/996781/cong-ji-ben-de-er-fen-fa-shuo-qi-ru-he-a-hof5/
 */
var search = function(nums, target) {
  let left=0;
  let right = nums.length -1;
  while(left <= right) {
    let mid =Math.floor((left+right)/2);
    if(nums[mid] == target) {
      return mid;
    }
    if(nums[left] <= nums[mid]) { //有等于的可能性 忘记+1
      if(target < nums[left] || target > nums[mid] ){
        left = mid+1;
      }
      else {
        right = mid-1
      }
    }else {
      if(target>nums[right] || target <nums[mid]) {
        right = mid-1;
      }else {
        left = mid+1;
      }
    }
  }
  return -1
};
