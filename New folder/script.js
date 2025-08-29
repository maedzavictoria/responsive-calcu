let display = document.getElementById("display");

// Function to add characters to display
function append(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate result
function calculate() {
  try {
    // Replace percentage with /100 for calculation
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
} catch (error) {
    display.value = "Error";
  }
}

// Function to toggle positive/negative
function plusMinus() {
  if (display.value) {
    if (display.value.startsWith("-")) {
      display.value = display.value.substring(1);
    } else {
      display.value = "-" + display.value;
    }
  }
}




