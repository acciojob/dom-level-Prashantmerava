//your JS code here. If required.

let element = document.getElementById("level");
let level = 0;

while (element) {
    level++;
    if (element.tagName === "HTML") {
        break;
    }
    element = element.parentElement;
}

alert("The level of the element is: " + level);
