// Set Up colors Array

const colors = ["green", "red", "yellow", "pink", "rgba(133,122,200,0.9)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add Event Listener
btn.addEventListener("click", function() {
    // Get Random Number between 0 and 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// Function to get Random Number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}