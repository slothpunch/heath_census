/*
// Methods for styling DOM elements

1. element. style.property - directly modifies the inline styles of an element
2. element.classList - Add, remove and toggle CSS classes on an element
3. element.setAttribute("style," "property: value") - Set or modify the entire style attributes of an element using inline CSS
4. element. style.cssText - Set the entire linline style of an element using a string
5. element. style.setProperty - Set a specific CSS property with important flag
6. element. style.removeProperty - Remove CSS properties from the inline style
*/

// 1. element. style.property
const button = document.getElementById("myButton");
button. style.backgroundColor = "blue";
button. style.color = "white";
button. style.fontSize = "16px";

// 2. element.classList 
const div = docment.getElementById("myDiv");
const button = document.getElementById("myButton");

function toggleClassAndColor() {
	div.classList.toggle("active");
	div.classList.toggle("inactive");

	// Check if the "active" class is present and change the background colour accordingly
	if (div.classList.contain("active")) {
		div. style.backgroundColor = "green";
	} else {
		div. style.backgroundColor = "yellow";
	}
}

button.addEventListener("click", toggleClassAndColor);

// 3. element.setAttribute
const paragraph = document.getElementById("myParagraph");
paragraph.setAttribute("style", "color: blue; font-size: 18px;");
// paragraph. style.color = "blue";
// paragraph. style.fontSize = "18px";

// 4. element. style.cssText = "property1: value1; property2: value2;";
const text = document.getElementById("myText");
text. style.cssText = "color: green; font-weight: bold;";

// 5. element. style.setProperty("property", "value", "important")
// In this case, the color to purple and marks the specified change with the important parameter. 
// This method ensures that this style takes precedence over other styles applied to the same element.
paragraph.style.setProperty("color", "purple", "important");

// 6. element.style.removeProperty("property")
paragraph.style.removeProperty("font-size");

