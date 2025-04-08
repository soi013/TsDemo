for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}

function getFizzBuzzString(i: number) {

    const isFive = i % 5 === 0 ? 10 : 0;
    const isThree = i % 3 === 0 ? 1 : 0;

    switch (isFive + isThree) {
        case (1):
            return "Fizz";
        case (10):
            return "Buzz";
        case (11):
            return "FizzBuzz";
        default:
            return i.toString();
    }
}

function sequence(start: number, end: number) {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}