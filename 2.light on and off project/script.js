const swichBtn=document.querySelector(".switch") ;
const body=document.body;

swichBtn.addEventListener("click",()=>{
    body.classList.toggle("on");
});