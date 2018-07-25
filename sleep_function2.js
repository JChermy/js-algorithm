function CodingMan(name) {
    function fe() {
        fe.flag = true;
        console.log(`Hi! This is ${name}`);
    }
    fe.flag = false;
    fe.timer = setTimeout(()=> {
        clearTimeout(fe.timer);
        if(!fe.flag) fe();
    }, 0)
    return fe;
}

Function.prototype.sleep = function(delay) {
    this(); //?
    this.await(delay);
    return this;
}

Function.prototype.sleepFirst =function(delay) {
    this.await(delay);
    this();
    return this;
}

Function.prototype.eat = function(dinner) {
    setTimeout(()=>{
        console.log(`Eat ${dinner}~`);
    });
    return this;
}

Function.prototype.await = function(delay) {
    delay = isNaN(delay) ? 0 : delay;
    let startTime = new Date();
    let delayTime = delay*1000;
    while(new Date() - startTime <= delayTime) {}
    console.log(`Wake up after ${delay}`);
}

