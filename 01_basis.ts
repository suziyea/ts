/**   tips 语法
let 变量: 类型;

let 变量: 类型 = 值;

function fn (参数: 类型, 参数: 类型 ) : 类型(这里的类型是函数返回值的类型) {
    ...
}

*/



// 声明一个变量 a ，同时制定她的类型为number
let a : number;

// a 的类型设置为了number，在以后的使用过程中a的值只能为数字
a = 10;
a = 33;
// a = 'hello'; // 此行代码为报错，因为变量a的类型为number，不能赋值字符串。虽然这里错了，但是编译工具依然可以编译成css，可以根据配置进行设置，如果有错误就不让编译；

let b : string;
b = 'hello ts';

// ts 可以编译成其他版本的js


// 声明完成变量直接进行赋值
let c: boolean = true;

c = false; 

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let d  = false;
d = true;
d = 321; // 这里会爆红，因为定义的时候 是boolean



// JS 中的函数是不考虑参数的类型和个数的
function sum(a,b) {
    return a + b;
}

console.log(sum(123,456)); // 579

console.log(sum(123,'456')); // '123456'


function sum1(a: number,b:number) {
    return a + b;
}

console.log(sum1(123,456));
console.log(sum1(123,'456')); // 这里会出现红色波浪线，因为入参设置成了number，这里穿的是string
console.log(sum1(123,456,789)); // 这里会出现红色波浪线，因为入参需要两个参数，这里传了三个


// 函数返回值的类型 ，在函数括号的后面加个冒号：类型   ----  函数返回值类型为number
function sum2(a: number,b:number):number {
    return a + b;
}

let result = sum2(123,456);
