/*
 * 输入一个正数N，输出所有和为N的连续正数序列
 * 例如：输入15
 * 结果：[[1,2,3,4,5],[4,5,6],[7,8]]
 * 
 */

var findContinuousSequence = function(n) {
    let mid = Math.ceil(n/2), ret = []
    for(let i=1; i <= mid; i++) {
        for(let j=2;;j++) {
            let total = (i+(i+j-1))*(j/2)
             if(i == 3) {
                 console.log(total, j)
             }
            if(total>n) {
                break
            }else if(total == n){
                ret.push(createArr(i, j))
                break
            }
        }
    }
    return ret
}

function createArr(i, j) {
    let ret = [], temp = 0
    while(temp < j) {
        ret.push(i+temp)
        temp++
    }
    return ret
}

// let mm = findContinuousSequence(9)
// console.log(mm)

/**
 * 1 1+1 1+2 1+3
 * 2 2+1 2+3 2+4
 */

 let left = 0, right = 0;

 /*
 while (right < s.size()) {`
     // 增大窗口
     window.add(s[right]);
     right++;
 
     while (window needs shrink) {
         // 缩小窗口
         window.remove(s[left]);
         left++;
     }
 }
 */

/**
 * @param {number} target
 * @return {number[][]}
 */
// 没有参照物数组 但是可以根据下标
// 滑动窗口（双指针）
var findContinuousSequence2 = function(target) {
    let l=1
    let r=2
    let sum = 3
    let res=[]
    // 滑动窗口框架
    while(l<r){
        if(sum===target){
            let ans =[]
            for(let k=l;k<=r;k++){
                ans[k-l]=k
            }
            res.push(ans)
            // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
             sum=sum-l
             l++
        } else if(sum>target){
            // 大于的条件 缩小窗口 sum已经加过了
            sum=sum-l
            l++
        } else {
            // 小于的情况 滑动窗口继续扩大
            r++
            sum=sum+r
        }
    }
    console.log(res)
    return res
};

findContinuousSequence2(15)

//
