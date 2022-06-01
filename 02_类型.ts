// 也可以直接使用字面量进行类型声明

let ab: 10;
ab = 10;
ab = 11; // 这里爆红因为上面定义了 等于10；


// 可以用 ｜ 来链接多个类型（或者）
let sexType: 'male' | 'female';

sexType = 'male';
sexType = 'female'; // 可以赋值在这个类型范围内 的 值


// any 表示的是任意类型，一个变量类型设置为any后相当于对该变量关闭了Ts的类型检测
// 使用TS是，不建议使用any类型；不到万不得已不使用any，
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let e: any;
e = 10;
e = 'hello';
e = true;


// unknown 表示未知类型的值
let i: unknown;
i = 10;
i = 'hello';
i = true;


// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let f;
f = 10;
f = 'hello';
f = false;


let s: string;
// f 的类型是any
// s = f; // f这个时候 为true，用了any之后 影响了别人，影响了原来s的类型；unknown 就不像any了

i = 'hello';
s = i; // 这里红色波浪线出来的原因是 i是 unknown类型的值，赋值给s，不行

// any是不仅祸害自己还祸害别人，unknown 是只祸害自己
// unknown 实际上就是一个类型安全的any
// unknown 类型的变量 不能直接赋值给其他变量

if (typeof i === 'string') {
    s  = i;
}


// 类型断言 可以告诉 解析器变量的实际类型（编译器不知道 但是我们知道这个值的类型，这个时候我们可以告诉 解析器类型）
s = i as string;