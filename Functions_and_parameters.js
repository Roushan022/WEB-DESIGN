function add(a,b){
    console.log(a+b)
}

//rest opreator
function calculateCartPrince(...num1){
    return num1
}

function Value(User){
    return `My name is ${User.name} and I am studing in ${User.cource} ,${User.sem}rd Sem `
}

const Object_1={
    name:"Roushan Akhtar",
    cource:"BCA",
    sem:3,
    year:"2nd"
}
console.log(Value(Object_1))
let a=45
let b=34
add(a,b)
console.log(calculateCartPrince(200,400,560,500))