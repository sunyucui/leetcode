/**
 * 不看时间复杂度的就是 暴力解法
 * 要求时间复杂度 O(log(n+m)) --有log就是二分法
 * 
 */

var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  let mid = Math.floor(len/2);
  let left = getK(nums1,nums2,0,0,mid);
  if(len%2){
    return left;
  }else{
    let right = getK(nums1,nums2,0,0,mid+1);
    return (left+rigth)/2.0
  }
 };
var getK = function(nums1,nums2,start1,start2, k){
  // const len1 = nums1.length;
  // const len2 = nums2.length;
  // if(len1 = start1) return nums2[start2+k-1];
  // if(len2 = start2) return nums1[start1+k-1];
  // if(k == 1) return Math.min(nums[start1],nums2[start2]);

}

var findMedianSortedArrays = function(nums1, nums2) {
 let arr = [...nums1, ...nums2];
 arr.sort((a,b) => a-b);
 let len = arr.length;
 if(len%2) {
  return arr[Math.floor(len/2)]
 }else {
  return (arr[Math.floor(len/2)-1] + arr[Math.floor(len/2)])/2.0
 }
};

