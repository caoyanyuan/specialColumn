
Array.prototype.abc = "xxx"
arr = [1, '2', {a: 3}];


// for(let key in arr) {
//     console.log(key)
// }

// for(let value of arr) {
//     console.log(value)
// }
// js用的是
// let arrIt = arr[Symbol.iterator](); 
// console.log(arrIt.next())


// 迭代器的任务，是按某种次序遍历数据集中的元素。 数组的扩充 
// for in 取key值。遍历对象key 遍历数组是index 原型上的属性和自身属性都会被遍历。
// for of 可以遍历类数组



var array=[];
array[0] = 1;
array[5] = 5;
console.log('foreach-------')
array.forEach(function(v, i) {
  v = 11;
  console.log(v);
})
console.log('foreach-------');
for(var j in array) {
  console.log(array[j])
}

