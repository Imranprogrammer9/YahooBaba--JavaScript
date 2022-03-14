// Logical Operators in JavaScript

// Logical Add in JavaScript
// Both Conditions Need To Be True
var age = 20;
if (age >= 17 && age <= 22) {
    console.log('You are Eligible');
}
else {
    console.log('You are not Eligible');
}

// Logical Or in JavaScript
// One Condition Need To Be True
var score = 10;
if (score >= 100 || score <= 5) {
    console.log('You are Eligible')
}
else {
    console.log('You are not Eligible');
}

// Logical Not in JavaScript
var weight = 1000;
if (!weight >= 5) {
    console.log('Add More Weight Please');
} else {
    console.log('Weight Added Successfully');
}