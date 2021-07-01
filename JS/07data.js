//数据格式

// let set = new Set("Hello!!!");
// set.add({a: 'xxx'}); //add 12
// // set.add({a: 'xxx'}); //add 12
// console.log(set.has("!")); //check if value exists
// console.log(set.size);
// set.delete(12); //delete 12
// console.log(...set);
// set.clear(); //delete all values”
//output
//true
//6
//H e l o !

let weakset = new WeakSet();
(function(){ 
   let a = {}; 
   //weakset.add(1); //TypeError: Invalid value used in weak set
   weakset.add(a);
})();  //here 'a' is garbage collected from weakset
// console.log()
// console.log(weakset.size); //output "undefined"
// console.log(...weakset); //Exception is thrown
// weakset.clear(); //Exception, no such function


function curry(fn, args) {
    var length = fn.length;
    args =  args || [];
    return function () {
      var newArgs = args.concat(Array.prototype.slice.call(arguments));
      if (newArgs.length < length) {
        return curry.call(this, fn, newArgs);
      } else {
        return fn.apply(this, newArgs);
      }
    };
  }
  
  function test(a,b,c) {
    return a+b+c
  }
  console.log(test.length)
let fn = curry(test, [1])  
let x = curry(fn, [2])
console.log(fn(2))
console.log(x(3))

