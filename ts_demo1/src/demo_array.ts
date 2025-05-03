console.log("# demo_array.ts");
console.log("\n ## 配列のデモ");

// 配列 numbers: number[]
const numbers = [1, 2, 3];
console.log(`numbers: ${numbers}`);

console.log("\n ## いろいろな型の配列");
const something = [1, "two", true];

console.log(`something: ${something}`);

// 配列でもスプレッド構文が使える
console.log("\n ## 配列でもスプレッド構文が使える");
const numbers2 = [...numbers, ...numbers, 100, 101];
console.log(`numbers2: ${numbers2}`);

console.log(`numbers[2]: ${numbers[2]}`);
console.log(`numbers["2"]: ${numbers["2"]}`); //compile errorするはずだが？

// 配列の要素を変更する
numbers[2] = 1000;
console.log(`numbers: ${numbers}`);
// numbers = [100, 101, 102]; //compile error

console.log("\n ## Array<number> と number[] は同じ");
const numbers3: Array<number> = [1, 2, 3];
console.log(`numbers3: ${numbers3}`);

console.log("\n ## 読み取り専用の配列");
const fixedNumbers: readonly number[] = [10, 20, 30];
// fixedNumbers[2] = 1000; //compile error

console.log("\n ## push メソッド");
numbers.push(4);
console.log(`numbers: ${numbers}`);

console.log("\n ## pop メソッド");
const lastNumber = numbers.pop();
console.log(`numbers: ${numbers}, lastNumber: ${lastNumber}`);

console.log("\n ## includes メソッド");
console.log(`numbers.includes(100): ${numbers.includes(100)}`);
console.log(`numbers.includes(2): ${numbers.includes(2)}`);

// fixedNumbers.push(40); //compile error 読み取り専用の配列にはpushメソッドがない
console.log(`fixedNumbers.includes(10): ${fixedNumbers.includes(10)}`);

console.log("\n ## 配列の長さ");
console.log(`numbers.length: ${numbers.length}`);

console.log("\n ## indexOf メソッド");
console.log(`numbers.indexOf(2): ${numbers.indexOf(2)}`);
console.log(`numbers2.indexOf(2): ${numbers2.indexOf(2)}`);

console.log("\n ## 配列のコピー");
const numbers4 = numbers.slice();
console.log(`numbers4: ${numbers4}`);

console.log("\n ## for-of 文");
for (const number of numbers) {
    console.log(`for-of: number: ${number}`);
}

console.log("\n ## for-in 文");
for (const index in numbers) {
    console.log(`for-in: index: ${index}, number: ${numbers[index]}`);
}

console.log("\n ## forEach メソッド");
numbers.forEach((number) => {
    console.log(`forEach: number: ${number}`);
});
