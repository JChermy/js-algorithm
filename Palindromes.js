/**
 * 判断字符串是否是回文
 * @param {String} str 
 */
function palindrome(str) {
    var lowerStr = str.toLowerCase().replace(/[\W_]/g, '');
    var reverseStr = lowerStr.split("").reverse().join("");
    return reverseStr === lowerStr;
}

function palindrome(str) {
    return str.replace(/\[W_]/g, '').toLowerCase() ===
              str.replace(/\[W_]/g, '').toLowerCase().split('').reverse().join('');
}
palindrome("race car"); //true
palindrome("not a palindrome"); //false
palindrome("0_0 (: /-\ :) 0–0"); //true