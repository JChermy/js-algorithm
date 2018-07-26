/**
 * 找出数组中重复出现过的元素的元素
 * @param {Array} arr 
 */
function repeateEle(arr) {
    return arr.filter((item,i) => {
       return  arr.indexOf(item) === i && arr.lastIndexOf(item) !==i;
    })
}

function repeateEle(arr) {
    var result = [];
    var map = {};
    arr.map(function (item) {
        if(map[item] === 1) {
            result.push(item);
        }
        map[item] = (map[item] || 0 )+1;
    })
    return result;
}

//自创写法~
function repeateEle(arr) {
    var map = new Map();
    var result = [];
    arr.map(function(item){
        map.set(item, map.has(item) ? map.get(item)+1 : 0);
        console.log(map);
        if(map.get(item) === 1) {
            result.push(item);
        }
    })
    return result;
}

var arr = [1, 2, 4, 4, 3, 3, 1, 3,5];
repeateEle(arr); //[1,4,3]