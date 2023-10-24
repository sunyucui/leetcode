/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 双指针
 * 倒序 遍历--找到一个个不需要倒退的元素进行比较
 */
var backspaceCompare = function (s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let del_s = 0;
    let del_t = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] == '#') {
                del_s++;
                i--;
            } else if (del_s) {
                del_s--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (t[j] == '#') {
                del_t++;
                j--;
            } else if (del_t) {
                del_t--;
                j--;
            } else {
                break;
            }
        }
        if (s[i] != t[j]) return false;
        i--;
        j--;
    }
    return true; 
};