// If Else If Statement Means Adding Multiple Conditions In A Single If Else Statement. If The First Two Conditions are False Then The Third Condition Will Be Executed.
var per = 0.1;

if (per >= 90 && per <= 100) {
    document.write("A+");
} else if (per >= 80 && per <= 90) {
    document.write("A");
} else if (per >= 70 && per <= 80) {
    document.write("B+");
} else if (per >= 60 && per <= 70) {
    document.write("B");
} else if (per >= 50 && per <= 60) {
    document.write("C+");
} else if (per >= 40 && per <= 50) {
    document.write("C");
} else if (per >= 30 && per <= 40) {
    document.write("D");
} else if (per < 33) {
    document.write("You Are Failed! Nikal Pehli Fursat Main!");
} else {
    document.write("Please Entered A Correct Percentage");
}