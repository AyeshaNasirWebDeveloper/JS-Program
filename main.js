// Get use to input a number using prompt ("Enter a number"). Check if the number is a multiplier of 5 or not

let num = prompt("Enter a Number");

if (num % 5 === 0) {
    console.log(num, "is multiple of 5");
} else {
    console.log(num, "is not a multiple of 5");
}