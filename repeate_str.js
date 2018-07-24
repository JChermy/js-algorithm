/**
 * 字符串repeat实现
 * @param {String} str 
 * @param {Number} n 
 */

 
'qq'.repeat(2); //'qqqq'
//方法一
String.prototype.repeat1 = function(n) {
    return Array(n).fill(this).join('');
}
//方法二
String.prototype.repeat2 = function(n) {
    return Array(n+1).join(this);
}