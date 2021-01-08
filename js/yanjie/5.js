const dogs = new Map(); // 
const friends = new Map();
friends.set('黄志乾','华灯初上');
friends.set('何江涛','鸡毛');
// 遍历它 key value
// for(const person of friends){
//     console.log(person);
// }
// friends.forEach(function(value,key){
//     console.log(key,value);
//   })

 
// for(let item of friends.entries()){
//     console.log(item);
//   }

friends.forEach((val,key) => console.log(val,key))
for (const [key,val] of friends){
    // 解构
    console.log(key,val);
}

const [a,b]= [1,2];
const { } = {"a": 1, "b":2} //
console.log(a,b);