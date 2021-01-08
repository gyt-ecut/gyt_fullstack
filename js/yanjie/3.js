function duplicateCount(word){
    // es6里的定义的新的数据结构有哪些 Map
    let map = new Map(); // se6 提供的数据结构 HashMap
    // key=> valur for 0(n) 0(1) Redis ElasticSearch
    // 时间复杂度 
    for(let char of word){
    if(map.has(char)){
      map.set(char,map.get(char)+1);
    }
    else{
      map.set(char,1);
    }
  }
  return map
}
console.log(duplicateCount('aadsdjfwuhh'));