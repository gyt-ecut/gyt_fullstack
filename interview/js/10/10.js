//有哪些情况会是undefined?
//console.log() 方法用于在控制台输出信息。
let a; //声明，没有赋值
//变量声明时，js类型由值来决定
console.log(typeof a); //undefined
//  ？ 函数没有返回值
const fnNoReturn = () => {}
console.log(fnNoReturn(), '2');
// 参数不传值
const fn = (b) => {
    // 一运行就会有的 this -> 指针对象 指向一个对象
    console.log(arguments)
    console.log(typeof b);
}
console.log(fn(1,2,3));

const o = {c: '1'};
console.log(o.d, '4'); // undefined
console.log(zr); // 语法错误
 console.log(null == undefined); //true
 console.log(null === undefined); //false

