var zigzagLevelOrder = function(root) {
 const ret = [];
 if(!root){
  return ret;
 }
 let queue = [];
 queue.push(root); //左
 let goLeft = true;
 while(queue.length){
  let currLevel = [];
  const currsize = queue.length;
  for(let i=0;i<currsize;i++){
    if(goLeft){
      currLevel.push()
    }
  }
  goLeft = !goLeft;
 }
};