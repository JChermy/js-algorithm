/**
 * 二分查找
 * @param {Array} arr 
 * @param {Number} dest 
 * @param {Number} start 
 * @param {Number} end 
 */
//递归查找
function binarySearch(arr, dest, start=0, end=arr.length-1) {
    if(start > end) {
        return -1;
    }
    let midIndex = Math.floor((start+end)/2);
    let mid = arr[midIndex];

    if(mid == dest) {
        return midIndex;
    }

    if(dest < mid) {
        return binarySearch(arr, dest, 0, midIndex-1);
    }
    if(dest > mid) {
        return binarySearch(arr, dest, midIndex+1, end);
    }

    return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch1(arr, 7, 3, 6)); // 6


 //非递归查找
function binarySearch(arr, dest){
    let max = arr.length-1;
    let min = 0;
    while(min<max) {
        let midIndex = Math.floor((max+min)/2);
        let  mid = arr[midIndex];
        if(mid == dest) {
            return midIndex;
        }else if (mid <= dest) {
            max = midIndex -1;
        }else if(mid > dest) {
            min = midIndex+1;
        }
    }
    return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
binarySearch(arr,4); //3

