alert("I'm working");

let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

const c =221;
let d = a - 5;
console.log(d, c);

// String
// const what = "Nicolas";
// console.log(what);

// Boolean
// const what = true;
// Number
// Float

// Array
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const daysOfWeek = ["Mon","Tue","Wed", 54, false]
console.log(daysOfWeek)


// Object
const info = {
    name :"Nico",
    age: 33,
    favMovies: ["A","B"],
    favFood :[
        {
            name:"K",
            fatty:false
        },
        {
            name:"C",
            fatty:true
        }]

}

console.log(info)


function sayHello(name, num){
    console.log("Hello!", name, "You have", num," years of age.");
   return (`Hello! ${name} You are ${num} years of age.`);
}


sayHello("Nicolas", 15);
console.log("HI!")

const greetNicolas = sayHello("Nicolas", 14)

console.log(greetNicolas)


const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(55 ,5);
console.log(plus)

const title= document.getElementById("title");
console.log(title)

title.innerHTML = "Hi! from JS";
title.style.color="red";
console.dir(title);
console.log(document);



const title = document.querySelector("#title");

function handleResize(event){
    console.log("resized", handleResize)
}

window.addEventListener("resize", handleResize);



// function handleClick(){
//     title.style.color="blue";
// }
// title.addEventListener("click", handleClick);

const age = prompt("How old are you?")
if (age > 18){
    console.log("can drink")
}else {
    console.log("cannot")
}

const BASE_COLOR = "white";
const OTHER_COLOR = "blue";
const CLICKED_CLASS="clicked"

function handleClick(){
    // const currentColor = title.style.color;
    // if (currentColor === BASE_COLOR){
    //     title.style.color = OTHER_COLOR;
    // } else {
    //     title.style.color = BASE_COLOR;
    // }

    // const currentClass = title.className;

    // if(currentClass !== CLICKED_CLASS){
        // title.className = CLICKED_CLASS;
    // } else {
    //     title.className="";
    // }

    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }

}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();




