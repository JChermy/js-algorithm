/**
 * 延迟执行函数，收集参数，到了指定次数再执行
 * @param {Function} fn 
 * @param {Number} time 
 */
function delay(fn, time=1) {
    let params = [];
    return (...rest) => {
        params = [...params,...rest];
        if(--time === 0) {
            return fn.apply(this, params);
        }
    }
}

function print(...rest){
    console.log("Hi", rest);
}

var f = delay(print, 3);
f(1); //undefined
f(2); //undefined
f(3); // Hi [1,2,3]