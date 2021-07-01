let total

while(total = parseInt(readline())) {
    let line = readline()
    let len = parseInt(readline())
    let num = total - len
    let p = getLink(line)
    while(num--) {
        p = p.next
    }
    console.log(p.value || 0)
}

function ListNode(val) {
    this.value = val
    this.next = null
}


function getLink(line) {
    let ret, p;
    line.split(" ").forEach(item => {
        let node = new ListNode(item)
        if(!ret) {
            ret = node
        }else{
            p.next = node
        }
        p = node
    })
    return ret
}

//计算及字符串的距离
let str0;
while(str0 = readline()){
    let str1 = readline();
    console.log(listDis(str0,str1));
}
function listDis(src,dst){
    let dist = [];
    for(let i = 0;i <= src.length;i++){
        dist[i] = dist[i] || [];
        dist[i][0] = i;
    }
    for(let j = 0; j <= dst.length; j++){
        dist[0][j] = j;
    }
    for(let i = 1; i<=src.length;i++){
        for(let j = 1; j <= dst.length;j++){
            let flag = (src.charAt(i-1) == dst.charAt(j-1))? 0:1;
            dist[i][j] = Math.min(dist[i-1][j]+1,dist[i][j-1]+1,dist[i-1][j-1]+flag);
               
        }
    }
    return dist[src.length][dst.length];
}

//杨辉三角
function ger(n) {
    if(n == 1) {
        return [1]
    }else {
        let preArr = ger(n - 1)
        let arr = []
        let preLen = preArr.length
        for(let i=0; i<preLen+2; i++) {
            arr.push((preArr[i]||0) + (preArr[i-1]||0) + (preArr[i-2]||0))
        }
        return arr
    }
}
var n
while(n=parseInt(readline())) {
    if(n==1||n==2){
        console.log(-1)
    }
    let arr = ger(n)
    arr.find((item,i) => {
        if(item%2 === 0) {
            console.log(i+1)
            return true
        }
    }); 
}

//完全数
while (n = parseInt(readline())){
    if (n < 28){
        console.log(1);
    }else if (n < 496){
        console.log(2);
    }else if (n < 8128){
        console.log(3);
    }else if (n < 33550366){
        console.log(4);
    }else {
        console.log(5);
    }
}

let num = 15929
let sum = 0
let num1 = 0, num2 = 0
//取7
while(num > 0){
   if(num < 7) {
       break;
   }else{
       if(num % 7 === 0 || num % 10 === 7 || (num.toString().indexOf(7) > -1)) {
            sum++
       }
   }
   num--
}
console.log(sum)

// 高精度整数
let str1
while(str1 = readline()) {//双指针
    let str2 = readline()
    str1 = str1.trim()
    str2 = str2.trim()
    
    let str1Length = str1.length - 1,
        str2Length = str2.length - 1
    
    let res = '',
        num = 0
    while(str1Length >= 0 || str2Length >= 0) {
        let val = (+str1[str1Length] || 0) + (+str2[str2Length] || 0) + num
        res = val%10 + res 
        val >= 10 ? num = 1 : num = 0
        --str1Length
        --str2Length
    }
    num ? res = num + res : ''
    console.log(res) 
}

//最小k
while(line = readline()){
    let num = parseInt(line.split(' ')[1]);
    let array = readline().trim().split(' ');
     array.sort((a,b)=>a-b);
     console.log(array.splice(0,num).join(' '))
}

//字符串第一次出现的order
const str = "asdfasdfo"
let ret
while (str=readline()){
    let char="";
    let j=0;
    for (let i of str){
        let a=new RegExp(i,"g");
        if (str.match(a).length==1){
            char=i;
            j++;
            break;
        }
    }
    console.log(char==""?-1:char);
}

//查找组成一个偶数最接近的两个素数
while(line=readline()){
    var data=parseInt(line);
    for(var i=data/2;i<data;i++){
        var j=data-i;
        if(isPrime(i) && isPrime(j)){
            console.log(j+'\n'+i);
            break;
        }
    }
}
   
function isPrime(n){
    if(n>=2){
        for(var i=2;i<Math.ceil(n/2);i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

//放苹果
function fun(m,n){
    if(m==1 || n==1){
        return 1
    } else if(m < 0 || n<=0)
        return 0;
    return (fun(m-n,n) + fun(m,n-1))
}
while(str=readline()){
    let m=str.split(' ')[0];
    let n=str.split(' ')[1]
    console.log(fun(m,n))
}