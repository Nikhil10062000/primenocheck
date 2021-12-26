//check prime number or not


const n = parseInt(prompt("Enter a positive number: "));
var prime = true;


if (n === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (n > 1) {


    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        alert(" number is a prime number");
    } else {
        alert(" number is not a prime number");
    }
}   