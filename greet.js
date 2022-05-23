// let userName = prompt("Enter your name:");
// alert("Good Morning " + userName + " :)");

var table = prompt("Enter a number");
var length = 10;
var i = 1;

document.write("Multiplication table: " + table);
for (i = 1; i <= length; i++)
    document.write("<br>" + i + " * " + table + " = " + (i * table));