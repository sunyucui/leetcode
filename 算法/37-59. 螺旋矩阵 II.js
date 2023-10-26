
var generateMatrix = function(n) {
    let loop = Math.floor(n/2);
    let count = 1;
    let x=y=0
    let res = new Array(n).fill(0).map(i => new Array(n).fill(0))
    let offset = 1;
    
    while(loop--){
        let startX = x,startY=y
        for(startY;startY < n-offset;startY++){
            res[startX][startY]=count++;
        }
        for(startX;startX < n-offset;startX++){
            res[startX][startY]=count++;
        }
        for(startY;startY >= offset;startY--){
            res[startX][startY]=count++;
        }
        for(startX;startX >= offset;startX--){
            res[startX][startY]=count++;
        }
        x++;
        y++;
        offset++;
    }
    if(n%2){
        let mid = Math.floor(n/2);
        res[mid][mid] = count
    }
    return res;
};