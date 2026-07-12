const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if(window.scrollY>60){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});

const menu=document.querySelector(".menu");
const links=document.querySelector(".nav-links");

menu.onclick=()=>{

links.classList.toggle("active");

};

const words=[
"Interactive Navigation",
"Responsive Design",
"Modern UI",
"Creative Web Experience"
];

let word=0;
let char=0;
let typing=document.getElementById("typing");

function type(){

if(char<words[word].length){

typing.innerHTML+=words[word].charAt(char);
char++;

setTimeout(type,90);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(char>0){

typing.innerHTML=words[word].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

word=(word+1)%words.length;

setTimeout(type,300);

}

}

type();