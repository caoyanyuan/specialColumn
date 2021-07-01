/**
实现一个LazyMan，可以按照以下方式调用
LazyMan("Hank") 输出
Hi！This is Hank!

LazyMan("Hank").sleep(10).eat("dinner"); 输出
Hi! This is Hank!
// 等待10秒...
Wake up after 10
Eat dinner~

LazyMan("Hank").eat("dinner").eat("supper") 输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan("Hank").sleepFirst(5).eat("supper") 输出
// 等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

*/

function LazyMan2(name) {
    class _LazyMan{
        constructor(name) {
            this.queue = []
            let hello = () => {
                console.log(`hi, this is ${name}`)
            }
            this.queue.push(hello)
            setTimeout(() => {
                this.executor()
            })
        }
        sleep(n) {
            this.queue.push(() => {
                setTimeout(() => {
                    console.log('我睡饱了')
                    this.executor()
                }, n*10)
            })
            return this
        }
        eat(type) {
            this.queue.push(() => {
                console.log('eat '+type)
            })
            return this
        }
        executor() {
            //console.log(this.queue)
            let fn = this.queue.unshift()
            console.log(fn.constructor)
            
            fn && fn()
        }
    }
    
    return new _LazyMan(name)
}




var LazyMan = function(name){
    class _LazyMan{
        constructor(name){
            this.queue = [];
            let fn = () =>{
                console.log("Hi This is " + name + "!");
                this.excutor();
            }
            this.queue.push(fn);
            setTimeout(() => {
                this.excutor();
            })
        }

        excutor(){
            let fn = this.queue.pop();
            fn && fn();
        }

        sleep(time){
            let fn = () =>{
                setTimeout(() =>{
                    this.excutor();
                },time * 1000)
            }
            this.queue.push(fn);
            return this;
        }

        sleepFirst(time){
            let fn = () =>{
                setTimeout(() =>{
                    this.excutor();
                },time * 1000)
            }
            this.queue.unshift(fn);
            return this;
        }

        eat(name){
            let fn = () =>{
                console.log("Eat" + name + "~");
                this.excutor();
            }
            this.queue.push(fn);
            return this;
        }

    }

    return new _LazyMan(name); 
}


LazyMan2('tom').sleep(2).eat('dinner')







    
    


