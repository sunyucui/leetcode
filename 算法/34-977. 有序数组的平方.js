/**
 * es6的方法
 * @param {*} nums 
 * @returns 
 */

var sortedSquares = function (nums) {
    return nums.map(item => item * item).sort((a, b) => a - b)
};
/**
 * 双指针做法
 * 有序数组，得到平方有序数组
 * 每次找到最大 尾部插入
 */

var sortedSquares = function (nums) {
   let res = [];
   let left = 0;
   let right = nums.length-1;
   while(left<=right){
       if(nums[left]*nums[left]>nums[right]*nums[right]){
           res.unshift(nums[left]*nums[left]);
           left++;
       }else{
           res.unshift(nums[right]*nums[right]);
           right--;
       }
   }
   return res;
};