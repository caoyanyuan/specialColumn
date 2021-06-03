//数组 扁平化
let arr = [
    [1,3],8,9,
    [[1,2,[3,6]],44 ],
]

// 1.flat
//let temp = arr.flat(Infinity)

//2. 递归
function myFlat(arr, temp = []) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] instanceof Array) {
            myFlat(arr[i], temp)
        }else{
            temp.push(arr[i])
        }
    }
    return temp
}

//3. toString方法
//let temp = arr.toString().split(',')

//4 基于数组的some方法进行判断检测：验证数组中的某一项有没有符合函数中提供的规则的
while(arr.some(item => item instanceof Array)) {
    arr = [].concat(...arr)
}
console.log(arr)