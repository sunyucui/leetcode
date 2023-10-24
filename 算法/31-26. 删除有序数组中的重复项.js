/**双指针
 * 有序数组 快指针指向的不是等于就是大于，
 * slow指向新数组
 * fast记录与当前slow不重复的
 * nums  1 2 3 4
 * slow  0 1 2 3
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[slow]){
            nums[++slow] = nums[i];
        }
    }
    return slow+1;
};