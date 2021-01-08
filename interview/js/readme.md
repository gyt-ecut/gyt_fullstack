    # 把面试题当高考题
    1.  以题目来检验当前js之所学 推动之
        黄冈中学 出试卷
    2.  衡水一中 
        清北方法论

        打卡 课后做的任何事情
        2.  能力增长点
        js能力


    - null和undefined的区别是什么？
    object.prototype.__proto__ == null
    Undefined 意义是类型，当一个声明了一个变量未初始化时，得到的是undefined 
    1.  箭头函数和普通函数不一样
        es6时代的arguments 有用的
        不只是便利，也被干掉了arguments
        () ==> {} function () {}都可以省 arguments 但是es6里提供了...
        rest 运算符 
        function() {}
    2. Object的原型对象
    new Object()
    父 (原型) 对象
    Object(函数).prototype.__proto__
    为什么？到顶了 不该有原型
    null 此处没有对象
    珠穆朗玛之上再无山峰
    跟禅宗一样，充满着智慧

- 选择元素可以通过标签、id、选择器()、类名、子元素()，
  如何元素都有这些方法 不仅限document


    // 哪些情况会是undefined
    // 1. 变量声明时，没有定义
    let a;  //声明，没有赋值
    // 2. 函数没有返回值
    const Fn= () =>{}
    // 3. 参数不传值
    const fn = (b) =>{
        //  this 一运行就会有 -> 指针对象 指向一个对象
        console.log(typeof b);
    }
    console.log(typeof a);  //undefined
    // 4. 引用对象上不存在的属性
    const o = {c:'1'};
    console.log(o.d,'4')
    // 直接引用未定义的变量，且不是内置对象
    console.log(dd); //直接报错

// 1.找到所有的.box元素有什么方法？
            // 通过ID获取（getElementById）
            // 通过name属性（getElementsByName）
            // 通过标签名（getElementsByTagName）
            // 通过类名（getElementsByClassName）
           // 通过选择器获取一个元素（querySelector）
           // 通过选择器获取一组元素（querySelectorAll）
           // 获取html的方法（document.documentElement）
           // document.documentElement是专门获取html这个标签的
           // 获取body的方法（document.body）
           // // document.body是专门获取body这个标签的。
