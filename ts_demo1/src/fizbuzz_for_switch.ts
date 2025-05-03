console.log("# fizbuzz_for_switch.ts");
console.log("\n ## for文とswitch文でFizzBuzzを実装");

for (let i = 1; i <= 100; i++) {

    const isFive = i % 5 === 0 ? 10 : 0;
    const isThree = i % 3 === 0 ? 1 : 0;

    switch (isFive + isThree) {
        case (1):
            console.log("Fizz");
            break;
        case (10):
            console.log("Buzz");
            break;
        case (11):
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
    }
}
