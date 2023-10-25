var totalFruit = function(fruits) {
    const n = fruits.length;
    const type = new Map();
    let left = 0;
    let res = 0;
    for(let right=0;right<n;right++){
        type.set(fruits[right],(type.get(fruits[right])||0)+1);
        while(type.size>2){
            type.set(fruits[left],type.get(fruits[left])-1);
            if(type.get(fruits[left])==0){
                type.delete(fruits[left])
            }
            left++;
        }
        res = Math.max(res, right-left+1)
    }
    return res;
};