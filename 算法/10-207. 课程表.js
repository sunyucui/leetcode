var canFinish = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0); //入度数组
  const map = {}; //邻接表 key value:key的后续课 {0:[],1:[],2:[],,,}

  for(let i=0;i < prerequisites.length; i++){
    inDegree[prerequisites[i][0]]++; //有先修课的 入度+1
    if(map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    }else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }

  let queue = []; //记录所有没有先前课的 即入度为0；
  for(let i=0;i<inDegree.length;i++) {
    if(inDegree[i] === 0) queue.push(i); //i是课号 indegree是入度
  }

  let count = 0;
  while(queue.length) {
    const selected = queue.shift();
    count++;
    const toEnQueue = map[selected]; //所有的后续课
    if(toEnQueue && toEnQueue.length) {
      for(let i=0;i<toEnQueue.length;i++){
        inDegree[toEnQueue[i]]--; //后续课上过了 入度减1
        if(inDegree[toEnQueue[i]]==0){
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count == numCourses;

};

console.log(canFinish(6,
  [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]))
