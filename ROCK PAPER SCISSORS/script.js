 const rock= document.querySelector("#rock");
        const paper=document.querySelector("#paper");
        const secissor=document.querySelector("#secissor");
        let choose;
        document.querySelectorAll("button").forEach((button)=>{
            button.addEventListener("click",(event)=>{
            const options=["rock","paper","secissor"];
            let choose=(event.currentTarget.id);
            const randomValue=options[Math.floor(Math.random()*options.length)];
           let result;
        if(choose==randomValue){
            result="Draw!"
        }else if(choose=="rock"){
            if(randomValue=="paper"){
                result="You Win!"
            }else{
                result="Bot win"
            }
        }else if(choose=="paper"){
            if(randomValue=="rock"){
                result="You Win!"
            }else{
                result="Bot Won!"
            }
        }else if(choose=="secissor"){
            if(randomValue=="rock"){
                result="Bot Won!"
            }else{
                result="You Won!"
            }
        }
        document.querySelector("#res").textContent=(result);
        document.querySelector("#you").textContent=(`"You Choose ${choose}"`);
        document.querySelector("#comp").textContent=(`"Bot Choose ${randomValue}"`);
            });
        });