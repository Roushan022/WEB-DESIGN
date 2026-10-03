if (true){
    let a=10;
    const b=20;
    var c=0;
}
//console.log(a)
//console.log(b)
console.log(c)
function one(){
    const username="Roushan"
    function two(){
        var website="Youtube"
        console.log(username);
    }
    // console.log(website)
    two();
}
one();

const user={
    username:"Roushan",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this)
    }
}
// user.welcomeMessage();
// user.username="Sham";
// user.welcomeMessage();
console.log(this)
function chai(){
    let username="ROushan";
    console.log(this.username)
}
chai()
const details=() => {
    let username="Roushan"
    console.log(this)
}
details()