
var zigzagLevelOrder = function(root) {
  if(!root){
    return [];
  }

  const ans = [];
  const queue = [root];
  
  let isOrderLeft = true;

  while(queue.length){
    let levelList = [];
    const size = queue.length;
    for(let i = 0;i<size;i++){
      const node = queue.shift();

      if(isOrderLeft){
        levelList.push(node.val);
      }else {
        levelList.unshift(node.val);
      }

      if(!node.left){
        queue.push(node.left);
      }

      if(!node.right){
        queue.push(node.right);
      }
    }

    ans.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return ans;
};