/**
 * 两个指针做 一个for完成两个for的效果
 * for 里是终止为止
 * 起始位置动态变化--大于等于target可以更新窗口
 * @param {*} target 
 * @param {*} nums 
 * @returns 
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let res = Infinity;
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
        while(sum>=target){
            res = Math.min(res, i-left+1);
            sum -= nums[left++];
        }
    }
    return res==Infinity ? 0 : res;
};