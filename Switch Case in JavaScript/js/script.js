// Switch Statement in JavaScript
var day = 8;
switch (day) {
    case 1:
        document.write("Monday");
        break;

    case 2:
        document.write("Tuesday");
        break;

    case 3:
        document.write("Wednesday");
        break;

    case 4:
        document.write("Thursday");
        break;

    case 5:
        document.write("Friday");
        break;

    case 6:
        document.write("Saturday");
        break;

    case 7:
        document.write("Sunday");
        break;

    default:
        document.write("Please Enter A Correct Day")
        document.write("<br><br>")
}

// Checking Switch Statement with Comparison Operator
var Age = 21;
switch (true) {
    case (Age >= 21 && Age <= 25):
        document.write("You can apply for this post! Congratulations");
        break;
    case (Age >= 30 && Age <= 40):
        document.write("You cannot apply for this post! Sorry");
        break;

    default:
        document.write("Please Enter A Correct Age");
}