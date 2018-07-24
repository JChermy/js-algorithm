/**
 * 获取数组中两者之和等于给定的值的下标
 * @param {Array} arr 
 * @param {Number} sum 
 */
function checkSum(arr, sum) {
    for(var i=0;i<arr.length;i++) {
        var diff = sum - arr[i];
        var diffIndex = arr.indexOf(diff);
        if(diffIndex !== -1) {
            return [i, diffIndex];
        }
    }
}
checkSum([-1,2,3,4,5],3); //[0,3]
checkSum([1,2,3,4,5],3); //[0,1]