// Declare constants for the input slider elements and the page body
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const body = document.body;

// Function to update the background color based on the slider values
function updateBackgroundColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

// Event listeners for the sliders
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

// Initial call to set the background color on page load
updateBackgroundColor();