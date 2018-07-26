/**
 * 寻找相邻两项相加最大的和
 * @param {Array} arr 
 */
function findMax(arr) {
    var sumArr = [];
    var prev = arr[0];
    for(var i=1;i<arr.length;i++) {
        var curr = arr[i];
        sumArr.push(prev+curr);
        prev = curr;
    }
    return Math.max(...sumArr);
}
var arr = [-1, 3, 1, -5, 2]; 
findMax(arr); //4