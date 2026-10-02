// console.log("2"+"3"+2+2);
// console.log(2+3+4);
// a=10;
// b=20;
// if (a==b){
//     console.log("the value of a is equal to b");
// }else if (a>b){
//     console.log("A is greater then B");
// }else{
//     console.log("B is greater then A");
// }

// i=0
// while (i<=20){
//     process.stdout.write(i+" ");
//     i++;
// }
// console.log("\n")
// j=0
// do {
//     process.stdout.write(j+" ")
//     j++
// }while(j<=20){
// }
num=[20,30,40,50,"Rousan",true] 
console.log(num[5])
console.log(+true)
// console.log(true+)
const JsUser ={
    name:"Roushan Akhtar",
    repo_count:7,
    city:"Barharwa",
    pincodee:"816171"
}

for(let[key,value] of Object.entries(JsUser)){
    console.log(`${key} : ${value}`)
}
// console.log(JsUser.items())
// console.log(JsUser["name"])
// console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
let keys=Object.keys(JsUser)
for (let key of keys){
    process.stdout.write(key+" ");
}