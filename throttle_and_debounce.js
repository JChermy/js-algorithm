/**
*函数去抖
* @param fn {Function}   实际要执行的函数
* @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
*
* @return {Function}     返回一个“去弹跳”了的函数
*/
function debounce(fn ,delay) {
    var timer;
    
    //返回一个函数，这个函数会在一个时间区间结束后的delay毫秒时执行fn函数
    return function() {
        // 保存函数调用时的上下文和参数，传递给 fn
        var context = this;
        var args = arguments;
        
        // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
        clearTimeout(timer);

        // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
        // 再过 delay 毫秒就执行 fn
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay)
    }
}

//使用
function ajax_lookup( event ) {
  // 对输入的内容$(this).val()执行 Ajax 查询
};

// 字符输入的频率比你预想的要快，Ajax 请求来不及回复。
$('input:text').keyup( ajax_lookup );

// 当用户停顿250毫秒以后才开始查找
$('input:text').keyup( debounce( ajax_lookup,250 ) );


/**
* 函数节流
* @param fn {Function}   实际要执行的函数
* @param delay {Number}  执行间隔，单位是毫秒（ms）
*
* @return {Function}     返回一个“节流”函数
*/
function throttle(fn, threshold = 250) {
    //记录上次执行的时间
    var last;

    //定时器
    var timer;

    // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
    return function() {
        var context = this;
        var args = arguments;

        var now = +new Date();

        // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃执行 fn，并重新计时
        if(last && now < last+threshold) {
            clearTimeout(timer);
            // 保证在当前时间区间结束后，再执行一次 fn
            timer = setTimeout(function(){
                last = now;
                fn.apply(context, args);
            }, threshold);
            // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
        }else {
            last = now;
            fn.apply(context, args);
        }
    }

}

let throttle = (fn, delay = 50) => {
    let starttime = 0;
    return function(...args) {
        let curTime = new Date();
        if(curTime - starttime >= delay) {
            fn.apply(this, args);
            starttime = curTime;
        }
    }
}


//使用
function log( event ) {
  console.log( $(window).scrollTop(), event.timeStamp );
};

// 控制台记录窗口滚动事件，触发频率比你想象的要快
$(window).scroll( log );

// 控制台记录窗口滚动事件，每250ms最多触发一次
$(window).scroll( throttle( log, 250 ) );
  