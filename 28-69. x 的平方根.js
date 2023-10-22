var mySqrt = function (x) {
    let left = 0
    let right = x
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (mid * mid > x) {
            right = mid - 1
            //右边第一个等于target
        } else {
            left = mid + 1
        }
    }
    return right
};
