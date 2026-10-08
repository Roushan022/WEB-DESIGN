 let msg=document.createElement("p");
msg.textContent="Button Clicked";
    msg.style.display="none";

    let msgVisible=false;
    let timer=null;
    let count=document.querySelector(".count h3");
    let countUp=document.querySelector(".Button");
    // countUp.parentNode.insertAfter(msg,countUp);
    countUp.after(msg);
    countUp.addEventListener("click",()=>{
        count.textContent++;
        if(!msgVisible){
        msg.style.display="block";
        msgVisible=true;
        }
        clearTimeout(timer);
        timer=setTimeout(()=>{
            msg.style.display="none";
            msgVisible=false;
        },500);
    });
    const reset_btn=document.createElement("p");
    reset_btn.className="Reset";
    reset_btn.textContent="Reset";
    countUp.after(reset_btn);
    reset_btn.addEventListener("click",()=>{
        count.textContent=0;
    })