var maxPathSum = function(root) {
  var maxSum = Number.MIN_SAFE_INTEGER;
  var dfs = (root) => {
    if(root == null) return 0; 
    var left = Math.max(0,dfs(root.left)); //2
    var right = Math.max(0,dfs(root.right)); //3
    var temp = left + root.val + right; //6
    maxSum = Math.max(maxSum,temp) //6
    return root.val + Math.max(left,right); //3+1
  }
  dfs(root); // 4
  return maxSum
};