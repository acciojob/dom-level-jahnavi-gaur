//your JS code here. If required.
/ Get the element by id
let element = document.getElementById("level");

// Start counting from 1 (the element itself)
let level = 1;

// Traverse upwards through all parent elements until <html>
while (element.parentElement) {
    level++;
    element = element.parentElement;
}

// Display result
alert("The level of the element is: " + level);