const height=document.querySelector("#ht_inp");
const weight=document.querySelector("#wt_inp");
const sub=document.querySelector("#sub");

sub.addEventListener("click",()=>{
    const h = Number(height.value);
    const w = Number(weight.value);
    const ans=/*Math.round(w/(h**2))*/(w/(h**2)).toFixed(2);
    document.querySelector(".result").style.display="block";
    document.querySelector("#wt_val").textContent=w;
    document.querySelector("#ht_val").textContent=h;
    document.querySelector("#bmi_val").textContent=ans;
});
