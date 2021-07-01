var res = function(arr) {
    let len = arr.length - 1, 
        minArr = [], ret = [],
        min = arr[len]
    for(let i=len; i >= 0; i--) {
        if(arr[i] < min) {
            min = arr[i]
        }
        minArr[i] = min
    }
    for(let i=0; i<len; i++) {
        if(arr[i] > minArr[i-1] && arr[i] < minArr[i+1]) {
            ret.push(arr[i])
        }
    }
}
let arr = [1,3,2,6,9,10]
res(arr)
