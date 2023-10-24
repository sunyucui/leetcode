/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0;
    let right = num/2 + 1;
    while (left <= right) {
        //Math.floor((right - left) / 2);很重要
        let middle = left + Math.floor((right - left) / 2);
        if(middle*middle == num) {
            return true;
        }
        if (middle*middle > num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return false;
};