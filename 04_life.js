//IIFE Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB CONNECTED`)
})();

(function addtwo(n,m){
    console.log(n+m);
})(5,4);

// store in a variable
let result=(function subTwo(n,m){
    return n-m;
})(6,7);
console.log(result);

const nd_result= ((name) => {
    return name;
})("I am arrow bracket");
console.log(nd_result);
