
1 1 1 2 2 2
1 1 1 2 2 2
1 1 1 2 2 2
3 3 3 4 4 4
3 3 3 4 4 4
3 3 3 4 4 4
m[i][j] = m[len-j-1][i]

var rotate = function(matrix) {
  const len = matrix.length;
  for(let i=0;i<Math.floor(len/2);i++){
    for(let j=0;j<Math.floor((len+1)/2);j++){
      const temp = matrix[i][j];
      matrix[i][j] = matrix[len-j-1][i];
      matrix[len-j-1][i] = matrix[len-i-1][len-j-1];
      matrix[len-i-1][len-j-1] = matrix[j][len-i-1];
      matrix[j][len-i-1]=temp;
    }
  }
};