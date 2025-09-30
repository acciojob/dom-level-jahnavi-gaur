//your JS code here. If required.
let element = document.getElementById("level");

if (element) {
    let level = 1;
    while (element.parentElement) {
        level++;
        element = element.parentElement;
    }
    alert("The level of the element is: " + level);
} else {
    alert("Element not found!");
}