const input=document.querySelector("#input_num");
const submit=document.querySelector("#sub");
let Guess=document.querySelector("#guess_num");
let Remain=document.querySelector("#remain_guess");
let total_remian=10;
submit.addEventListener("click", ()=>{
    const Guess_num=Number(input.value);
    if (Number.isInteger(Guess_num) && Guess_num!=0 && Guess_num !=""){ 
        displayGuess(Guess_num);
        check();
        Guess.textContent=(Guess_num)
        input.value=("")
    }else{
        document.querySelector(".Result").textContent="Enter A number"
    }
});
actual_num=(Math.random()*100+1).toFixed(0);
function displayGuess(num){
    if (num==actual_num){
        document.querySelector(".Result").textContent="Your guess is correct!"
        submit.disabled="true";
    }else{
        document.querySelector(".Result").textContent="Wrong guess,Try again"
    };
};
function check(){
     total_remian--;
        Remain.textContent=total_remian;
        if (total_remian==0){
            submit.disabled="true";
            document.querySelector(".Result").textContent="All attempt used!"
        };
}
