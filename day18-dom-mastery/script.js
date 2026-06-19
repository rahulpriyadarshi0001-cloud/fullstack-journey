const mainTitle = document.querySelector('#main-title');
const blueBox = document.querySelector('#box');
const textBtn = document.querySelector('#text-btn');
const colorBtn = document.querySelector('#color-btn');
const nameInput = document.querySelector('#name-input');

// mainTitle.innerText = "I've been hackeed by javascript!";
// blueBox.style.backgroundColor = "red";

// console.log("DOM element grabbed and modified!");

textBtn.addEventListener('click',() => {
  mainTitle.innerText = "Button Clicked! The DOM id alive!";
  mainTitle.style.color = "#00E5FF"
});


colorBtn.addEventListener('click',() =>{
  blueBox.classList.toggle('bg-red-500');
  blueBox.classList.toggle('bg-blue-500');
});

nameInput.addEventListener('input', () =>{
  mainTitle.innerText =`Hello ${nameInput.value}`;
});