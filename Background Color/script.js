const blocks=document.querySelectorAll('.blocks');
blocks.forEach((block) => {
    block.addEventListener("click",()=>{
        if (block.id=="white"){
            document.body.style.backgroundColor="rgb(213, 205, 205)";
        }else if(block.id=="grey"){
            document.body.style.backgroundColor="rgb(112, 110, 110)";
        }else if(block.id=="blue"){
            document.body.style.backgroundColor="rgb(61, 61, 199)";
        }else{
            document.body.style.backgroundColor="black";
        }
    });
});
document.body.addEventListener("click",(e) =>{
    if(!e.target.classList.contains("blocks")){
        document.body.style.backgroundColor="black";
    }
});
   
