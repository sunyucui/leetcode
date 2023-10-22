/**
 * 注意 区间左闭右闭
 * left <= right
 * right = middle - 1;
 * lef = middle + 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left  = 0;
    let right = nums.length - 1;
    while( left <= right) {
        let middle = Math.floor((left + right) / 2);
        if(nums[middle] == target) {
            return middle;
        }
        if(nums[middle] > target) {
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    return -1;
};