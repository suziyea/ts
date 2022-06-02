{
    /** 
 * 
 *  在定义函数或是类时，如果遇到类型不明确的就可以使用泛型
  */

 // 定义了T类型 ，后面参数里才能写
function fn<T>(a: T) : T {
    return a;
}

// 可以直接调用具有泛型的函数

// 根据调用的情况 才知道泛型的的类型，只有函数执行的时候才能知道这个类型是什么
let result = fn(10); // 不指定泛型，TS可以自动对类型进行推断

let result2 = fn<string>('hello'); // 指定泛型


// 泛型可以指定多个
function fn2<T,K>(a:T,b:K): T {
    console.log(b);
    return a;
}

fn2<number,string>(123,'hello')




interface Inter {
    length: number;
}

// 限制泛型选择的
function fn3<T extends Inter>(a:T): number {
    console.log(b);
    return a.length;
}

fn3<string>('123')
}
