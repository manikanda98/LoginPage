const btn=document.getElementsByClassName('handBurg')[0];
const nav=document.getElementsByClassName('con')[0];
btn.addEventListener('click',()=>{
nav.classList.toggle('active');
});