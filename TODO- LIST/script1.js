// const btn = document.querySelector('#btn');
// const inp = document.querySelector('#inp');

// btn.addEventListener('click',()=>{
//     imp.value='';

// })

// const SecB = document.querySelectoror(*.sec-B*);
// SecB.addEventListner("click",(e)=>{
//     console.log(e.target.getAttribute('class'));

//     if(e.target.getAttribute('class')=='checkbox'){

//     }
// })

if(x[i]==e.target.parentElement.previousElementSibling.children[1].innerText){
    x.splice(i,1);
    console.log(x);
    localStorage.setItem('todo',JSON.stringify(x));
}


currTask.remove();

else if(taskclass==='up-arrow'){
const currTask=e.target.parentElement.parentElement;
const prevTask=currTask.previousElementSibling;
prevTask.before(currTask);
}
else if(taskclass==='down-arrow'){
const currTask=e.target.parentElement.parentElement;
const nextTask=currTask.nextElementSibling;
nextTask.after(currTask);
}
else if(taskclass === 'checkbox'){
e.target.nextElementSibling.classList.toggle('checked');

let x= JSON.parse(localStorage.getItem('todo'));
for(let i=0;i<x.length;i++){

if(x[i]==e.target.nextElementSibling.innerText){
    x.splice(i,1);
    x.push(e.target.nextElementSibling.innerText)
    localStorage.setItem('todo',JSON.stringify(x));
}
}
}
})