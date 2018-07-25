//简易版本
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function() {
        var _args = args.slice(0);
        console.log(_args);
        for(var i=0;i<arguments.length;i++) {
            _args.push(arguments[i]);
        }
        if(_args.length<length) {
            return curry.call(this, fn, _args);
        }else {
            return fn.apply(this, _args);
        }
    }
}

var add = function(a,b) {
    return a+b;
}
var addCurry = curry(add);
addCurry(3,4); //7
addCurry(3)(4); //7

//ES6版本
const curry = (fn,arr=[]) =>{
    return (...args) => {
        if([...arr, ...args].length === fn.length) {
            return fn(...arr, ...args);
        }else {
            return curry(fn, [...arr, ...args]);
        }
    }
}

var add = function(a,b,c,d){
    return a+b+c+d;
 }
var addCurry = curry(add);
addCurry(1,2,3,4); //10
addCurry(1)(2)(3)(4); //10


//curry部分求值

const curry = (fn, arr=[]) => {
     return  (...args) => {
        if([...args].length === 0) {
            return fn(...arr,...args);
        }else {
            return curry(fn, [...arr, ...args]);
        }

   }
}
let curryPlus = curry((...rest)=>rest.reduce((a,b)=>a+b))


curryPlus(1)(2)(); //3
curryPlus(1)(2)(3)(); //6
curryPlus(1)(2)(3)(4)(); //10
