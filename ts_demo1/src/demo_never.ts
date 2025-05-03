console.log("# demo_never.ts");
console.log("\n ## never型のデモ");

// never型引数を持つ関数は呼び出すことができない。だからその引数は何にでも代入できるし、型安全も保てる
function cannotUseFunc(value: never) {
    const num: number = value;
    const str: string = value;
}

// 型 '123' の引数を型 'never' のパラメーターに割り当てることはできません。ts(2345)
// cannotUseFunc(123);
// 型 '"Hello"' の引数を型 'never' のパラメーターに割り当てることはできません。ts(2345)
// cannotUseFunc("Hello");


console.log("\n ## never型を使った、必ず例外がthrowされる関数");
// 必ず例外がthrowされる関数の返り値は never型にできる
function everyTimeThrowError(): never {
    throw new Error("ここでエラーが出る");
}

// never型の変数を作ることができるが、必ずエラーするので、実行時に値が入ることは無い
// Error: ここでエラーが出る
// const error: never
// const error = everyTimeThrowError();


console.log("\n ## never型を使った、switch文の網羅性チェック");

type Truth = "one" | "two";
// type Truth = "one" | "two" | "three";

function getTruth(truth: Truth) {
    switch (truth) {
        case "one":
            return "真実はいつも1つ!";
        case "two":
            return "やっぱり真実は2つぐらいある!";
        default:
            // Truthの型に値が増えると、ここで**コンパイルエラー**が出る
            // 型 '"three"' を型 'never' に割り当てることはできません。ts(2322)
            const _exhaustiveCheck: never = truth;
            console.log(_exhaustiveCheck);
    }
}

console.log(getTruth("one"));
console.log(getTruth("two"));
// console.log(getTruth("three"));





