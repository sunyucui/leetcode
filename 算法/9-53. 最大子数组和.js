var maxSubArray = function(nums) {
 let pre = 0;
 let maxAns = nums[0];
 nums.forEach(i => {
  pre = Math.max(pre+i, i);
  maxAns = Math.max(pre, maxAns);
 });
 return maxAns;
};