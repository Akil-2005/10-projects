const gBtn=document.getElementById("generate");
const nBtn=document.getElementById("no");

gBtn.addEventListener("click",()=>{
    const rnBtn=Math.floor(Math.random()*100)+1;
    nBtn.textContent=rnBtn;
});   