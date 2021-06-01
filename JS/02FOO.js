
function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
getName()

var getName = function () {
    console.log(4);
};

function getName() {
    console.log(5);
}
Foo.getName(); 
getName(); 
Foo().getName(); 
getName();
new Foo.getName();
let xx = new Foo().getName();
new new Foo().getName();
console.log('xx', xx)

// 变量提升 v1被提升 是undefined
console.log(v1)
var v1 = 100;
function foo() {
    //函数内v1被提升 是undefined
    //函数内的变量。先找函数里有没有定义。函数里没有才找上下文的
    console.log(v1);
    //复制函数内的v1 和函数外的v1是两个变量
    var v1 = 200;
    console.log(v1);
}
foo();
console.log(v1);

// undefined 
// undefined 
// 200
// 100 

