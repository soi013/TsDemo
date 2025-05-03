console.log("# fizbuzz_oneline.ts");
console.log("\n ## 一行FizzBuzzを実装");

let message = "";

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        message += ' FizzBuzz';
    } else if (i % 3 === 0) {
        message += ' Fizz';
    } else if (i % 5 === 0) {
        message += ' Buzz';
    } else {
        message += ` ${i}`;
    }
}

console.log(message);
