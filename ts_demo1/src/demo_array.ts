// 配列 numbers: number[]
const numbers = [1, 2, 3];
console.log(`numbers: ${numbers}`);

//いろいろな型の配列  something: (string | number | boolean)[]
const something = [1, "two", true];

console.log(`something: ${something}`);

// 配列でもスプレッド構文が使える
const numbers2 = [...numbers, ...numbers, 100, 101];
console.log(`numbers2: ${numbers2}`);

console.log(`numbers[2]: ${numbers[2]}`);
console.log(`numbers["2"]: ${numbers["2"]}`); //compile errorするはずだが？

// 配列の要素を変更する
numbers[2] = 1000;
console.log(`numbers: ${numbers}`);
// numbers = [100, 101, 102]; //compile error

// Array<number> と number[] は同じ
const numbers3: Array<number> = [1, 2, 3];
console.log(`numbers3: ${numbers3}`);

// 読み取り専用の配列
const fixedNumbers: readonly number[] = [10, 20, 30];
// fixedNumbers[2] = 1000; //compile error

// push メソッド
numbers.push(4);
console.log(`numbers: ${numbers}`);

// pop メソッド
const lastNumber = numbers.pop();
console.log(`numbers: ${numbers}, lastNumber: ${lastNumber}`);

// includes メソッド
console.log(`numbers.includes(100): ${numbers.includes(100)}`);
console.log(`numbers.includes(2): ${numbers.includes(2)}`);

// fixedNumbers.push(40); //compile error 読み取り専用の配列にはpushメソッドがない
console.log(`fixedNumbers.includes(10): ${fixedNumbers.includes(10)}`);

// 配列の長さ
console.log(`numbers.length: ${numbers.length}`);

// indexOf メソッド
console.log(`numbers.indexOf(2): ${numbers.indexOf(2)}`);
console.log(`numbers2.indexOf(2): ${numbers2.indexOf(2)}`);

// 配列のコピー
const numbers4 = numbers.slice();
console.log(`numbers4: ${numbers4}`);

// for-of 文
for (const number of numbers) {
    console.log(`for-of: number: ${number}`);
}

// for-in 文
for (const index in numbers) {
    console.log(`for-in: index: ${index}, number: ${numbers[index]}`);
}

// forEach メソッド
numbers.forEach((number) => {
    console.log(`forEach: number: ${number}`);
});

// Tupleは配列の一種 : [number, string, boolean]
const tuple: [number, string, boolean] = [1, "two", true];
console.log(`tuple: ${tuple}`);
console.log(`tuple[0]: ${tuple[0]}, tuple[1]: ${tuple[1]}, tuple[2]: ${tuple[2]}`);

// console.log(`tuple[99]: ${tuple[99]}`); //undefined '3' のタプル型 '[number, string, boolean]' にインデックス '99' の要素がありません。ts(2493)


// 配列の要素を展開する
const [first, second, third] = tuple;
console.log(`first: ${first}, second: ${second}, third: ${third}`);

// ラベル付きタプル : [uno: number, dos: string, tres: boolean]
const tupleWithLabel: [uno: number, dos: string, tres: boolean] = [1, "two", true];
console.log(`tupleWithLabel: ${tupleWithLabel}`);
// console.log(`tupleWithLabel.uno: ${tupleWithLabel.uno}`); //compile error ラベル付きタプルはオブジェクトと同じようにアクセスできない

// オブジェクトでも同じことができるから、だいたいオブジェクトを使う
const objThree = {
    first: 1,
    second: "two",
    third: true,
};

console.log(`objThree: ${objThree.first}, ${objThree.second}, ${objThree.third}`);


