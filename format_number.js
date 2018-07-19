/**
 * 问题： 将数字转为千位符的形式
 * formatNumber(1234567.111); //1,234,567.111
 */

//方法一
function formatNumber(num) {
    num = parseFloat(num.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return integer + '.' +(decimal? decimal : '');
}

//方法二
var number = 1234567.111;
number.toLocaleString('en-us');
