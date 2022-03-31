// Syntax of Conditional Ternary Operator
// (Condition)? True Statement : False Statement
// You cannot add multiple statements in it.

// Example 1
var imran = "Shopify Expert";
var isTrue;
// Condition Ternary Operator
(imran == "Shopify Expert") ? isTrue = "True" : "False";
document.write(isTrue);

// Example 2
var a = 100;
var b;
// Condition Ternary Operator
(a > 10) ? b = "True" : b = "False";
document.write("<br><br>");
document.write(b);
// When you are using Condition Ternar Operator On a Number Then, You have to write the var before the else/ifesle statement.