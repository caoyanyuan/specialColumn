// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');
console.time('x')
setTimeout(() => {
    console.log(1);
    console.timeEnd('x')
}, 20);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 10);
console.log(4);

console.time('AA');
for (let i = 0; i < 90000000; i++) {
    // do soming
}
console.timeEnd('AA'); //=>AA: 79ms 左右
console.log(5);
setTimeout(() => {
    console.log(6);
}, 18);
console.log(7);
setTimeout(() => {
    console.log(8);
}, 15);
console.log(9);

// 2 4 5 7 9 6 3 8 1
// 2 4 5 7 9 3 1 6 8





