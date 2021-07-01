/*
    节流: 每300ms内。调用一次
    搜索框联想输入
    浏览器滚动事件
*/ 
function throttle(fn, n){
    let pre = new Date().getTime()
    return () => {
        let now = new Date().getTime()
        if(now - pre > n*1000) {
            fn()
            pre = now
        }
    }
}

// 防抖 触发后300ms后才执行， 如果300ms内再触发就再重新计时。
// 一直调用只执行一次

//resize
//搜索框搜索输入。只需用户最后一次输入完，再发送请求
//按钮提交
function debounce (fn, wait) {
    var timer = null;
    wait = wait*1000 || 300
    return function () {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout(fn, wait);
    }
}

let fn = debounce(() => {
    console.log('2')
}, 0.5)


// fn()

// setTimeout(() => {
//     fn()
// }, 3000) 
//防抖
window.onload = function() {
    let input = document.getElementById('input')
    input.addEventListener('input', function(e){
        fn()
    })
}
