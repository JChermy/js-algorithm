//归并排序
function sortTwoArr(arr1, arr2) {
      const result = [];
      while(arr1.length && arr2.length) {
          result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
      }
      while(arr1.length) {
          result.push(arr1.shift());
      }
      while(arr2.length) {
          result.push(arr2.shift());
      }
      return result;
}
sortTwoArr([1,3,5,7],[2,9,88,4,2]);
 //[1, 2, 3, 5, 7, 9, 88, 4, 2]