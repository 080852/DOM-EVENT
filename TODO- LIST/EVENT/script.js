const parent = document.querySelector("parent");
const child = document.querySelector("child");
const abc = document.querySelector("abc");

abc.addEventListener("click" (){
    console.log(abc)
});

child.addEventListener("click" (){
    console.log(child)
});

parent.addEventListener("click" (){
    console.log(parent)
});