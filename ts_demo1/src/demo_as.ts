console.log("# demo_as.ts");
console.log("\n ## as で型を変換");

function LogUpper(strOrNum: string | number) {
    console.log((strOrNum as string).toUpperCase());
}

LogUpper("Hello");

//実行時エラーが起きてしまう
//TypeError: strOrNum.toUpperCase is not a function
// LogUpper(123);


console.log("\n ## 正しい as の使い方");

function LogUpper2(strOrNums: (string | number)[]) {
    // 配列の中身がすべてstring型かどうかをチェックしているから、 `as string` をしても問題ない
    if (strOrNums.every(item => typeof item === "string")) {
        for (const str of strOrNums) {
            console.log((str as string).toUpperCase());
        }
    } else {
        for (const num of strOrNums) {
            console.log(num);
        }
    }
}

const allStrings = ["This", "is", "all", "strings"];
const strsAndNums = ["Strings", 1, "And", 2, "Numbers", 3];

console.log("### allStrings");
LogUpper2(allStrings);

console.log("\n ### strsAndNums");
LogUpper2(strsAndNums);

console.log("\n ## !でnullとundefinedを無視");

function GoHomeBy(car?: string, bike?: string): string {
    console.log({ car, bike });
    if (!car && !bike) {
        return "Go home by foot";
    }

    if (car) {
        return `Go home by ${car.toUpperCase()}`;
    }

    // 'bike' は 'undefined' の可能性があります。ts(18048)
    // 最初に bikeもcarもundefinedであるかもしれないということを確認しているから、bike!.toUpperCase() は問題ない
    return `Go home by ${bike!.toUpperCase()}`;
}

console.log(GoHomeBy());
console.log(GoHomeBy("Mazda"));
console.log(GoHomeBy(undefined, "pinarello"));
console.log(GoHomeBy("Audi", "cannondale"));

console.log("\n ## as const でstring配列をリテラルのタプルに変換");

// as constの作用
// 1. 配列リテラルをreadonlyのタプル型にする
// 2. オブジェクトリテラルのプロパティがreadonlyになる
// 3. string, number, BigInt, booleanのリテラルがwindingされなくなる
// 4. テンプレート文字列リテラルがstringではなくテンプレートリテラル型になる

// const carNames1: string[]
// 元はリテラルだがwindingしている。これは配列の中身が変わる可能性があるから
const carNames1 = ["BMW", "Alfa Romeo", "Tata"];
console.log(carNames1);

// const carNames2: readonly ["BMW", "Alfa Romeo", "Tata"]
// as const でリテラルのタプルを保つようになる
// これは配列の中身が変わる可能性がなく、要素数が増えることもないのでタプルになる
const carNames2 = ["BMW", "Alfa Romeo", "Tata"] as const;
console.log(carNames2);

console.log("\n ## as constとtypeofとLookupを組み合わせて値から型を作る");

const gears = ["Manual", "Automatic", "CVT"] as const;
type Gear = (typeof gears)[number];

// typeから定義しても同じだが、中身を列挙して定義する回数が余分に必要になる
// type Gear = "Manual" | "Automatic" | "CVT";
// const gears: Gear[] = ["Manual", "Automatic", "CVT"];

console.log({ gears });

type Car = {
    name: string;
    gear: Gear;
}

const bmwCar: Car = {
    name: "BMW m3",
    gear: "Manual",
}

const audiCar: Car = {
    name: "Audi A4",
    gear: "Automatic",
}

console.log(bmwCar);
console.log(audiCar);

