// 断网问题：断网之后。ws可以接收消息吗？
const url = "wss://www.hzhouse.vip/websocket/64"

var ws = new WebSocket(url)

ws.onopen = function(){
    ws.send("发送数据");
}

setTimeout(() => {
    ws.send(' {"msgId":"msg20210118","otherUserId":"64","msgType":"1","content":"hello 2 64","transType":"sendMsg"}')
}, 1000)

console.log(ws)