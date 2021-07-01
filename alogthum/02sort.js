// 数组排序 

let arr = [1,2,3,4,2,4,6]

//冒泡排序
function bubbleSort(arr) {
    let temp;
    for(let i=0; i < arr.length; i++) {
        for(let j=i; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
}

// 插入排序 类似于抓扑克牌
function insertSort(arr) {
    let handle = [ arr[0] ]
    for(let i=1; i<arr.length; i++) {
        for(let j = handle.length-1; j>=0 ; j--) {
            if(arr[i] > handle[j]) {
                handle.splice(j+1, 0, arr[i])
                break
            }
            if(j === 0) {
                handle.unshift(arr[i])
            }
        }
    }
}
//快速排序
function quickSort(arr) {
    if(arr.length <= 1) return arr

    let middleIndex = parseInt(arr.length / 2)
    let middleValue = arr.splice(middleIndex, 1)
    let left = []
    let right = []
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] < middleValue) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
  
    return quickSort(left).concat(middleValue, quickSort(right))
}


console.log(quickSort(arr))