/**
 * 不用循环，怎么实现x长度，元素为y的数组
 * @param {*} x length
 * @param {*} y element
 */
 

 function createArr(x,y) {
     return Array.from({length:x}, ()=> y);
 }