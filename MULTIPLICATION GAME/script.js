const num1=document.querySelector("#num-1");
const num2=document.querySelector("#num-2");
const submit=document.querySelector("#submit")
const textInput=document.querySelector("#txt-input")
const score=document.querySelector("#score")
        let scoreVal=0;
        function greaterNumber(){
            FirstNumber=Math.floor(Math.random()*50);
            SecondNumber=Math.floor(Math.random()*50);
            num1.textContent=FirstNumber;
            num2.textContent=SecondNumber;
        }
       greaterNumber();
       
        const values=submit.addEventListener("click",()=>{
            const check=Number(textInput.value)
            const ans=FirstNumber*SecondNumber;
            console.log(ans);
            if (ans==check){
                scoreVal+=1
                document.querySelector('#Result').textContent="Correct";
            }else{
                scoreVal-=1
                document.querySelector("#Result").textContent="Wrong!"            }
            textInput.value="";
            greaterNumber();
            score.textContent=scoreVal;
        });