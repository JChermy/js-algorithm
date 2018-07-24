/**
 * 不用循环，怎么实现x长度，元素为y的数组
 * @param {*} x length
 * @param {*} y element
 */
 
//方法一
 function createArr(x,y) {
     return Array.from({length:x}, ()=> y);
 }

//方法二
function createArr(x,y) {
    return new Array(x).fill(y);
}