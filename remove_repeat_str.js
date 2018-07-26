/**
 * 字符串去除相邻的重复项 如：'aabbccddeexxxxaa' => 'abcdexa'
 * @param {String} str 
 */
function removeRepeat(str) {
    return str.replace(/([a-zA-Z])(\1)+/g, '$1')
}

function removeRepeat(str) {
    var arr = str.split('');
    var newArr = [arr[0]];
    for(var i=0;i<arr.length;i++) {
        var curr = arr[i];
        if(curr !== newArr[newArr.length -1]) {
            newArr.push(curr);
        }
    }
    return newArr.join("");
}

var str = 'aabbccddeexxxxaa';
removeRepeat(str); //"abcdexa"
