/** 
 * 
 * 接口是一种规范
 *  接口用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法，同时接口也可以当成类型声明去使用
 * 
 * 
  */
 interface myInterface {
     name: string;
     age: number;
 }

 interface myInterface {
     gender: string;
 }

 const obj: myInterface = {
     name: 'hello',
     age: 26,
     gender: '男'
 }



 /** 
  * 
  * 接口可以在定义类的时候去限制类的结构
  * 
  *     接口中的所有的属性都不能有实际的值
  *     接口只定义对象的结构，而不考虑实际值
  *     在接口中所有的方法都是抽象方法
 */

 interface myInter {
     name: string;
     sayHello():void;
 }

