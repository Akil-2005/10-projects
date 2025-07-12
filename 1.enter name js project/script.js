const btnElement=document.querySelector('button');
const spanElement=document.getElementById('up');

btnElement.onclick=function(){
    const yourName=prompt("Enter your name");
    spanElement.textContent=yourName;
}