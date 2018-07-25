/**
 * 数组展平
 * @param {Array} arr 
 */
function flattenArr(arr){
    return arr.reduce((prev, curr) => {
        prev.concat(Array.isArray(curr) ? flattenArr(curr) : curr);
    },[])
}

function flattenArr(arr) {
       return  [].concat(...arr);
}

var arr = [1, [2, [3, 4]]];
flatten(arr); //[1, 2, 3, 4]