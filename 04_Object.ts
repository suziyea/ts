// Object 表示一个js 对象,不实用，因为js中对象太多了，一切皆对象，通常限制对象，是限制对象里的属性

{
    let a: object;
    a = {};
    a = function () {};

    // 在属性名后边加上?,表示属性是可选的
    let b: {name: string};

    b = {} //  出现红色波浪线，是说对象里要包含上面定义的属性
    b = {name: '小明'}; // 要上上面一样，多也不行，少也不行。



    // [propNmae: string] :any 表示任意类型的属性;
    let c: {name:string,[propName:string]:any};
    c = {name: '猪八戒',age: 22,gender: '男'}


    /**
     * 
     *  数组的类型声明： （两种表达方式）
     *   
     *      1、类型[];
     *      2、Array<类型>
     */


    // string[] 表示字符串数组，里面的元素都是字符串
    let e: string[];

    // number[] 表示数值类型的，里面的元素都是number
    let f: number[];

    let g: Array<number>; // 这样的写法等同于 f




    /** 
     * 
     *  元组，元组就是固定长度的数组
     * 
     *      语法: [类型，类型，类型]
     * 
     */
    let h: [string,string];
    h = ['hello','o dear']





    /** 
     *  enum 枚举
     *  枚举，
     * 
     *      语法:  
     * 
     */
    
    enum Gender {
        Male = 0,
        Female = 1
    }

    let i: {name: string,gender:Gender}
    i = {
        name: '孙悟空',
        gender: Gender.Male // 'male'
    }

    console.log(i.gender === Gender.Male)



    let j: string | number;

    // & 表示同时,要都满足
    let k: {name: string} & {age: number}
    k = {name: '哈喽',age: 26}



    // 类型的别名
    type myType = 1 | 2 | 3 | 4 | 5;
    let o: 1 | 2 | 3 | 4 | 5;
    let l: myType;

}