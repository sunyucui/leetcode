
var lowerBound = function (nums, target) {
    let left = 0;
    let right = nums.length - 1; 
    while (left <= right) { 
        const mid = left + ((right - left) >> 1);
        if (nums[mid] < target)
            left = mid + 1; 
        else 
        //大于等于的时候右边变化，
        //相当于找到了target后 left是左边界就不动了 左边第一个等于target
            right = mid - 1; 
    }
    return left; 
}

var searchRange = function (nums, target) {
    const start = lowerBound(nums, target); 
    if (start === nums.length || nums[start] !== target)
        return [-1, -1];
    const end = lowerBound(nums, target + 1) - 1;
    return [start, end];
};
