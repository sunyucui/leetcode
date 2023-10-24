/**
 * 双指针 
 * 快慢指针，
 * 快指针去找不是val的值，slow在当前数组里记录新数组
 *  1 2 3 4 3
 *  0 1 2 
 *  1 2 4
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[slow++] = nums[i];
        }
    }
    // 上面有一个后++ slow指向的是数组下一个位置 也就是数组大小
    return slow;
};