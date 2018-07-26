/**
 * 数组中按照数字重复出现的次数进行排序 
 * 如果次数相同 则按照值排序 比如  2, 2, 2和 1, 1, 1  应排序为 [1, 1, 1, 2, 2, 2]
 * @param {Array} arr 
 */
function sortArray(arr) {
    let obj ={};
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        let cur = arr[i];
        if(obj[cur]) {
            obj[cur].push(cur);
            continue;
        }
        obj[cur] = [cur];
    }
    for(let k in obj) {
        if(obj.hasOwnProperty(k)) {
            newArr.push(obj[k]);
        }
    }
    newArr.sort((a,b) => {
        if(a.length === b.length) {
            return a[0]-b[0];
        }
        return a.length - b.length;
    })

    newArr = newArr.reduce((prev,curr) => prev.concat(curr));
    return newArr;
}

sortArray([1,2,1,2,1,3,4,5,4,5,5,2,2] ); //[3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]
