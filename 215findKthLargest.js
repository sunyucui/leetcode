/**
 * 思路 
 * 1 堆排序
 */
var findKthLargest = function(nums, k) {
  let heap = [,];
  let i = 0;
  while(i < k){
    heap.push(nums[i++]); //！nums[i++]
  }
  buildSmallHeap(heap, k);
  for(let i = k; i < nums.length; i++) {
    if(nums[i] > heap[1]) {
      heap[1] = nums[i];
      heapify(heap, k, 1); // 1是要调整的位置
    }
  }
  return heap[1];
};
var buildSmallHeap = function(nums, k) {
  if(k===1) return;
  for(let i = Math.floor(k / 2); i >=1; i--){  // i--倒着来
    heapify(nums,k,i);
  }
}
var heapify = function(nums, k, i) {
  while(true) {
    let minIndex = i;
    if(2*i <= k && nums[2*i] < nums[i]){ //注意等号
      minIndex = 2*i;
    }
    if(2*i+1 <= k && nums[2*i+1] <nums[minIndex]){
      minIndex = 2*i+1;
    }
    if(minIndex!==i) {
      //交换和赋值 要写正确
      [nums[minIndex],nums[i],i,minIndex] = [nums[i],nums[minIndex],minIndex,i];
    }else {
      break;
    }
  }
}