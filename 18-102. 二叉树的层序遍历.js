var levelOrder = function(root) {
  const ret = [];
  if(!root) {
    return ret;
  }
  const queue = [];
  queue.push(root);
  while(queue.length){
    const currLevelSize = queue.length;
    ret.push([]);
    for(let i=0;i<currLevelSize;i++){
      const node = queue.shift();
      ret[ret.length-1].push(node.val);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right)
      }
    }
  }
  return ret;
};