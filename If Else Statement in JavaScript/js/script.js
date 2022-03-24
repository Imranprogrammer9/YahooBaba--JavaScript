// If Else Statement in JavaScript

// Case 1: Greator Than
var a = 1000;
var b = 100;
if (a > b) {
    document.write("a is greater than b");
    document.write("<br>");
    document.write("<br>");
}

// Case 2: Less Than
var c = 5;
var d = 6;
if (c < d) {
    document.write("c is less than d");
    document.write("<br>");
    document.write("<br>");
}

// Case 3: Equal
var e = 5;
var f = 5;
if (e == f) {
    document.write("Both Variable Values are Equal");
    document.write("<br>");
    document.write("<br>");
}

// Case 4: Equal and Data Type
var g = 100;
var h = "Hello World";
if (g === h) {
    document.write("Both Variable Values and Data Types are not");
}

// Real Life Example
var name = 'Imran';
var gender = 'Male';
// Concatenation is used here. When we want to write the value of two strings in one line, then we use the concatenation technique to display the result
if (gender == "Male") {
    document.write("Hello Mr. " + name);
}
else {
    document.write("Hello Ms." + name);
}