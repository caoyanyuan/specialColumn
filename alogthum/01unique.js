/**
 * 数组去重
 * 若数组全是数组可以用js中indexOf， includes， 
 */

let arr = [ 1,2,3,4,5,6,2, true, "true"]

//1. 循环法+js方法唯一判断
function unique(arr) {
    for(let i=0; i<arr.length - 1; i++) {
        if(arr.slice(i+1).indexOf(arr[i]) >= 0) {
            arr[i] = arr[arr.length - 1]
            arr.length--
            i--
        }
    }
}

//双循环法
function unique2(arr) {
    let ret = [arr[0]]
    for(let i=1; i < arr.length; i++) {
        let isRepeat = false
        for(let j=0; j < ret.length; j++) {
            if(ret[j] === arr[i]) {
                isRepeat = true
            }
        }
        if(!isRepeat) {
            ret.push(arr[i])
        }
    }
}

// sort+相邻比较法
// 注意 [ 1,2,3,4,5,6,2, true, "true"]   发生了强类型转换
// sort之后=》[1, true, 2, 2, 3, 4, 5, 6, "true"]
function unique3(arr) {
    arr.sort((a, b) => a-b)
    let ret = [arr[0]]
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i+1] !== arr[i]) {
            ret.push(arr[i+1])
        }
    }
}

//set法
function unique4(arr) {
    let temp = new Set()
    arr.forEach(element => {
        temp.add(element)
    });
    console.log(temp)
}

unique4(arr)