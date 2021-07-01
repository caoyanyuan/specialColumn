const obj = {
    a: "111",
    b: '222',
    arr: [1,2,3],
    obj: {
        xxx: '11'
    },
    reg: /\{\{(.*)\}\}/
}

let ret = {}
function deepCopy(obj) {
    if (obj === null) return null;
    if (typeof obj !== "object") return obj;

    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    if (obj instanceof Date) {
        return new Date(obj);
    }

    let temp = new obj.constructor
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            temp[key] = deepCopy(obj[key])
        }
    }
    console.log(temp)
    return temp;
}

let temp = deepCopy(obj)