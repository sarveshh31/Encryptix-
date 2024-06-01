// Function to clear the display
function clearDisplay() {
    document.calculator.display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    let currentDisplay = document.calculator.display.value;
    document.calculator.display.value = currentDisplay.slice(0, -1);
}

// Function to append a character to the display
function appendCharacter(character) {
    document.calculator.display.value += character;
}

// Function to calculate and display the result
function calculateResult() {
    try {
        let result = eval(document.calculator.display.value);
        document.calculator.display.value = result;
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}
