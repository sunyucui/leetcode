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
        // 两个整型相加 可能会有值溢出的情况 转换成值相减的形式
        // let middle = Math.floor((left + right) / 2);
        let middle = left + Math.floor((right - left) / 2);
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