/**
 * 将两个有序数组合并为一个排好序的大数组
 * @param {Array} left 
 * @param {Array} right 
 */
function mergeArr(left, right){
    const result =[];
    while(left.length > 0 && right.length > 0) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return result.concat(left, right);
}