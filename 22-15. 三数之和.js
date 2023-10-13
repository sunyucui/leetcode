/**
 * 双指针
 * 先排序 得到递增数组
 * 
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) {
    return ans;
  }
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; //递增数组 第一个大于零 则三个数都是整数 必然不能和为0
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 第一个不重复的数开始， 从剩余的数组开始前后双指针
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        // 左右指针也要移动到 第一个不重复的数开始
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
      // 太小
      else if(sum < 0) {
        left++;
      }
      // 太大
      else if(sum>0) {
        right--;
      }
    }
  }
  return ans;
};