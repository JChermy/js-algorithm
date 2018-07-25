/**
 * 请实现函数CodingMan,此函数可以按照以下方式调用
 * CodingMan('peter')
 * 输出：Hi!This is perter!
 * 
 * CodingMan('peter').sleep(3).eat('dinner')
 * 输出：Hi!This is perter!
 * //等待三秒...
 * Wake up after 3
 * Eat dinner~
 * 
 * CodingMan('peter').eat('dinner').eat('supper')
 * 输出:Hi!This is perter!
 * Eat dinner~
 * Eat supper~
 * 
 * CodingMan('peter').sleepFirst(5).eat('supper')
 * //等待5秒...
 * 输出:
 * Wake up after 5
 * Hi!This is perter!
 * Eat supper~
 */


 function CodingMan(name) {
     function Man(name) {
         setTimeout(() => {
             console.log(`Hi!This is ${name}!`);
         }, 0);
     }

     Man.prototype.sleep = function(time) {
         let curTime = new Date();
         let delay = time*1000;
         setTimeout(()=> {
            while(new Date() - curTime < delay) {} //阻塞当前主线程
            console.log(`Wake up after ${time}`);
         },0);
         return this;
     }


     Man.prototype.sleepFirst = function(time) {
         let curTime = new Date();
         let delay = time*1000;
         while(new Date() - curTime < delay) {} //阻塞当前主线程
         console.log(`Wake up after ${time}`);
         return this;
     }

     Man.prototype.eat = function(food) {
         setTimeout(() => {
            console.log(`Eat ${food}!`)
         }, 0);
         return this;
     }
     return new Man(name);
 }