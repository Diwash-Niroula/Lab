// Step 1: Initialize variables for the sliders and display elements
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');
const body = document.body;
// Step 2: Function to update the background color
function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Update the body background color
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Update displayed values
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}
// Step 3: Add event listeners to the sliders
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);