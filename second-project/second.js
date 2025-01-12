console.log(" hello world");

let button= document.querySelector(".btn");
let body= document.querySelector("body");


// button.addEventListener("click", function () {
//     // Define an array of colors
//     const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

//     // Pick a random color from the array
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];

//     // Change the body's background color
//     body.style.backgroundColor = randomColor;

//     // Log the action
//     console.log(`Button clicked. Background color changed to ${randomColor}`);
// });

button.addEventListener("click", function(){
    const colors = ["red", "blue", "yellow","grey","pink", "violet","brown","white",""];
    const randomColor= colors[Math.floor(Math.random()*colors.length)];
    body.style.backgroundColor= randomColor;
    console.log(`button was clicked, and the color is ${randomColor}`)

})