/**
 * 在一个数组中 如a、b两项, 要保证a和b两项的差 与 a和b两项索引的差 的相加后的结果max 是数组中其他两项max 中的最大值 
 * 找出符合条件两项a, b的值 (不可以排序 或改变数组位置)
 * @param {Array} arr 
 */
function findMax(arr) {
    // 思路：其实也就是找出数组中当前的每一项与自身索引相加后的和的最大值以及与索引相加后的最小值的和 找出符合条件的两项即可 
    //如 let result = (maxItem-minItem) + (maxIndex-minIndex) 等价于 (maxItem+maxIndex) - (minItem+minIndex)
    let minItem = arr[0];
    let maxItem = arr[0];
    let min = minItem;
    let max = maxItem;
    let minIndex = 0;
    let maxIndex = 0;
    for(let i=1;i<arr.length;i++) {
        let curr = arr[i] + i;
        curr < minItem ? (minItem = curr, min= arr[i], minIndex=i) : null;
        curr > maxItem ? (maxItem = curr, max= arr[i], maxIndex=i) : null;
    }
    console.log(maxItem, minItem); // 最大项与索引的和 最小项与索引的和
    console.log(max, min); // 最大项 最小项
    console.log(maxIndex, minIndex); 
}
findMax([2, 10, 9, 1, 8, 3, 4]);
// 12 2
// 8 2
// 4 0