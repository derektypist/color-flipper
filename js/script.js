// Set Up colors Array

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add Event Listener
btn.addEventListener('click', function() {
    // Get Random Number between 0 and 3
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// Function to get Random Number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}