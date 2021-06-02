// var a = {
//     i: 1,
//     toString() {
//         return this.i++
//     }
// };
var a = [1,2,3]
a.toString = () => a.shift()

//第三种 Object.defineProperty
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}

