 const dob=document.querySelector("#dob");
        const submit=document.querySelector("#submit");
        const age=document.querySelector('#age')
        submit.addEventListener("click",()=>{
            const dobValue=dob.value
            if(dobValue==""){
                alert("Please enter your birthday")
            }else{
                const Value=getAge(dobValue);
                console.log(Value)
                age.textContent=Value;
                result.style.display="block";
              
            }
            
        });
        function getAge(dobValue){
            const currentDate=(new Date());
            const bod=new Date(dobValue);
            const year=(currentDate.getFullYear()-bod.getFullYear());
            if(bod.getMonth()>currentDate.getMonth()){
                curAge=(year-1)
            }else{
                curAge=year;
            }
            return curAge
        }