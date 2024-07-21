const head = document.querySelector('h1');
head.addEventListener('click',(e)=>{
    console.log(e.target);

})

const para = document.querySelectorAll('p')[1];

head.addEventListener('copy',(e)=>{
    e.target.innerText = "";
    window.alert('cheating karta hain')

})