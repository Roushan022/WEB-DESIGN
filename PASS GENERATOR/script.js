const NewPass=document.querySelector("#value");
        const  passOutput=document.querySelector("#pass");
        const copyBtn=document.querySelector("#copyBtn");

        const alphabet="@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
        
        let ranodmLetter="";
        NewPass.addEventListener("click",function passgen(){
          while (ranodmLetter.length<10){
            let ranodmIndex=Math.floor(Math.random()*alphabet.length);
            ranodmLetter+=alphabet[ranodmIndex];
        };
        let hasUppre=/[A_Z]/.test(ranodmLetter);
        let hasLower=/[-z]/.test(ranodmLetter);
        let hasNumber=/[0-9]/.test(ranodmLetter);
        let hasSpecial=/[^A-Za-z0-9]/.test(ranodmLetter);
        if(hasLower && hasUppre && hasNumber && hasSpecial){
        passOutput.value=ranodmLetter;
        ranodmLetter="";

        }else{
            ranodmLetter="";
            passgen();
        }
        copyBtn.innerHTML = '<img src="copy_new.webp" alt="Copy">';
        });
        copyBtn.addEventListener("click", async () => {
        await navigator.clipboard.writeText(passOutput.value);
         copyBtn.textContent = "Copied!";
        });