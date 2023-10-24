/**
 * 思路：循环网格，
 * 深度优先遍历每个坐标的四周，
 * 注意坐标不要越界，遇到陆地加1，
 * 并沉没四周的陆地，这样就不会重复计算
复杂度：时间复杂度O(mn), m和n是行数和列数。
空间复杂度是O(mn),最坏的情况下所有网格都需要递归，递归栈深度达到m * n

 * @param {*} grid 
 * @returns 
 */
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                count++;
                turnZero(i, j, grid);
            }
        }
    }
    return count;
};
function turnZero(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length
        || grid[i][j] == '0') {
        return
    }
    grid[i][j] = '0';
    turnZero(i+1,j,grid)
    turnZero(i-1,j,grid)
    turnZero(i,j+1,grid)
    turnZero(i,j-1,grid)
}