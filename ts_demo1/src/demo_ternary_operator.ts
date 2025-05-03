console.log("# demo_ternary_operator.ts");
console.log("\n ## 三項演算子のデモ");

// const message1: string = "123";
const message1 = null;

console.log("null message is ↓");
console.log(message1);

const message2: string = message1 ?? "456";

console.log("number message is ↓");
console.log(message2);

const value1 = 9;

let message3 = value1 > 10 ? "大" : value1;

console.log("let number|string message is ↓");
console.log(message3);


let message4 = value1 < 10 ? "大" : value1;

console.log("let number|string message is ↓");
console.log(message4);

