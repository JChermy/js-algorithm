/**
 * 冒泡排序
 */
function bubbleSort(arr) {
   var length = arr.length;
   for(var i=0;i<length-1;i++) {
    for(var j=0;j<length-1;j++) {
        if(arr[j] > arr[j+1]) {
            var temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
   }
   return arr;
}