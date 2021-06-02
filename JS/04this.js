var x=2;
var y={
    x:3,
    //一次自执行  this => window
    z:(function(x){
        this.x*=x;     // window.x = 4
        x+=2;          // 闭包 x = 4

        return function(n){  //  m(4)          y.z(5)
            this.x*=n;       // window.x=16    y.x=3*5=15  
            x+=3;            // 闭包 x=4+3     闭包x=7+3
            console.log(x)
        }
    })(x)
};
var m=y.z;
//谁调用this 指向谁  这里指向window
m(4);

//这里指向y
y.z(5);
console.log(x, y.x)

// 7 
// 10
// 16 15

var x=0,
    y=1;
function fn(){
    x+=2;
    fn=function(y){
        console.log(y + (--x));
    };
    console.log(x, y);
}
fn(3);
fn(4);
console.log(x, y);

// 2 1
// 5 
// 1 1