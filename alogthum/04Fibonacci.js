// 斐波那契数列  1 1 2 3 5 8 13

//1. 形成n个元素的数组
function fibonacci(n) {
    let arr = [1,1]

    for(let i=2; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    console.log(arr)
}

//2. 递归
function fn(n) {
    if(n <= 2) {
        return 1
    }else{
        return fn(n-1) + fn(n - 2)
    }
}

function fn2(n, prev = 1, next = 1) {
    if(n == 2) {
        return next
    }else{
        return fn2(n - 1, next, prev+next)
    }
}
console.log(fn2(7))