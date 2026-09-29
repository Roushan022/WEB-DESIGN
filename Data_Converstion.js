"use strict"; // treat al JS code as new verison
//alert(3+3) // we are using node js , not browser
console.log(3+3)
console.log("hitesh")
let score="33"
let NumberScore=Number(score)
console.log(typeof(score))
let isLoggedIn=null // 1 or any number except 0 => True 
                    // "", null,0 => False
let booleanLoggedIn=Boolean(isLoggedIn)
console.log(booleanLoggedIn)
let someNumber=33
let stringNUmber=String(someNumber)
console.table([NumberScore,score,isLoggedIn,booleanLoggedIn,stringNUmber])
