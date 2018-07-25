/**
 * 函数组合串联
 * @param {*} func 
 */
let compose = (func) => {
   return arg => func.reduceRight((composed, fn) => fn(composed), arg);
}

let fn1 = (a) => a + 1;
let fn2 = (b) => b + 2;
let fn3 = (c) => c + 3;

let funs = [fn1, fn2, fn3];

console.log(compose(funs)(100)); //106

