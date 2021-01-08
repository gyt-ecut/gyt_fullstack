function duplicateCount(text){
    var str =text.toLowerCase().split('').sort().join('')
    // 请得到所有的数字
    var word='123-4560-666';
    // /\+d/ 正则 字符串是否符合规则
    // console.log(/\d+/.test(word))
    // console.log(word.match(/\d+/g)); / /是正则 /\d+/ 是数字 /\d+/g 是全部数字 
    // [a-z] 取值范围
    // 之前匹配的第几个小组
   //  ([a-z])\1 相同的字符
   // 相邻的字符是一样的
    var arr=str.match(/([a-z])\1+/g);

    //console.log(arr)
    return arr.length
}
duplicateCount('aaadsdjfwuhh')