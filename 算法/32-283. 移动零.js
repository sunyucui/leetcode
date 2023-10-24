
/**
 * 双指针
 * fast
 * slow
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[slow++] = nums[i];
        }
    }
    // 剩余位置全部设置0
    while(slow<nums.length){
      nums[slow++]=0;
    }
    return nums;
};