console.log("# demo_tupple.ts");
console.log("\n ## タプルのデモ");

console.log("\n ## Tupleは配列の一種");
const tuple: [number, string, boolean] = [1, "two", true];
console.log(`tuple: ${tuple}`);
console.log(`tuple[0]: ${tuple[0]}, tuple[1]: ${tuple[1]}, tuple[2]: ${tuple[2]}`);

// console.log(`tuple[99]: ${tuple[99]}`); //undefined '3' のタプル型 '[number, string, boolean]' にインデックス '99' の要素がありません。ts(2493)


console.log("\n ## 配列の要素を展開する");
const [first, second, third] = tuple;
console.log(`first: ${first}, second: ${second}, third: ${third}`);

console.log("\n ## ラベル付きタプル : [uno: number, dos: string, tres: boolean]");
const tupleWithLabel: [uno: number, dos: string, tres: boolean] = [1, "two", true];
console.log(`tupleWithLabel: ${tupleWithLabel}`);
// console.log(`tupleWithLabel.uno: ${tupleWithLabel.uno}`); //compile error ラベル付きタプルはオブジェクトと同じようにアクセスできない

console.log("\n ## でもオブジェクトでも同じことができるから、だいたいオブジェクトを使う");
const objThree = {
    first: 1,
    second: "two",
    third: true,
};

console.log(`objThree: ${objThree.first}, ${objThree.second}, ${objThree.third}`);

console.log("\n ## 可変長タプル");
type LongHeadStringAndNumbers = [string, ...number[]];

let evenNumbers: LongHeadStringAndNumbers = ["偶数", 2, 4, 6];
console.log({ evenNumbers });

evenNumbers.push(8, 10);
console.log({ evenNumbers });

// 型 '[string, string, number, number, number]' を型 'LongHeadStringAndNumbers' に割り当てることはできません。
// ソースの位置 1 から 4 にある型は、ターゲットの位置 1 にある型と互換性がありません。
// 型 'string' を型 'number' に割り当てることはできません。ts(2322)
// let oddPrimeNumbers: LongHeadStringAndNumbers = ["奇数", "素数", 2, 3, 5];

// ...スプレッド構文の部分は無くてもOK
let zeroNumber: LongHeadStringAndNumbers = ["zero"];
console.log({ zeroNumber });

// スプレッド構文ではない部分は指定が必要
//型 '[]' を型 'LongHeadStringAndNumbers' に割り当てることはできません。
// ソースには 0 個の要素が含まれていますが、ターゲットには 1 個が必要です。ts(2322)
// let emptyNumber: LongHeadStringAndNumbers = [];
// console.log({ emptyNumber });

console.log("\n ## スプレッド構文は先頭でも中間でもOK");

type HeadSpread = [...string[], boolean];

let headSpread: HeadSpread = ["one", "two", true];
console.log({ headSpread });

type CenterSpread = [string, ...number[], boolean];

let centerSpread: CenterSpread = ["one", 2, 3, true];
console.log({ centerSpread });

// スプレッド構文は2つ以上使えない
//rest 要素を別の rest 要素の後に指定することはできません。ts(1265)
// type SideSpread = [...string[], boolean, ...number[]];

console.log("\n ## タプルをスプレッド構文で組み合わせて新しいタプルを作る");

type Weekday = ["Mon", "Tue", "Wed", "Thu", "Fri"];

type DayOfWeek = ["Sun", ...Weekday, "Sat",];

let day: DayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log({ day });
































