function printName(obj: {first:string,last?: string}) {
    
    console.log(obj.last?.toUpperCase()); // 可能传入的对象没有last属性，这里可能没有在属性后面加上一个 ?
}


printName({first: '问号操作符'})
printName({first: '问号操作符',last: '卷啊'})