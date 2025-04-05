// 引数があって、返り値もある関数
function RangeStartEnd(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// デモ RangeStartEnd
const nums = RangeStartEnd(5, 10);
console.log(nums.join(","));

// 引数があって、返り値がない関数
function ThreeTimesPrint(text: string): void {
    for (let i = 0; i < 3; i++) {
        console.log(text);
    }
}

// デモ ThreeTimesPrint
ThreeTimesPrint("HEY");

// 引数がなくて、返り値がない関数
function Hello(): void {
    console.log("Hello");
}

// デモ Hello
Hello();

// 関数式
const calcBmi = function (height: number, weight: number): number {
    return weight / (height ** 2);
}

// デモ calcBmi
const bmi = calcBmi(1.75, 75);
console.log(`BMI is ${bmi}.`);

// 基本的に関数式よりアロー式の方が人気
// アロー関数
const calcAreaTriangle = (width: number, height: number): number => {
    return width * height / 2;
}

// デモ calcAreaTriangle
const areaTriangle = calcAreaTriangle(10, 5);
console.log(`areaTriangle is ${areaTriangle}.`);

// アロー関数の省略記法
const calcAreaTrapezoid = (upper: number, lower: number, height: number): number =>
    (upper + lower) * height / 2;


// デモ calcAreaTrapezoid
const areaTrapezoid = calcAreaTrapezoid(6, 4, 3);
console.log(`areaTrapezoid is ${areaTrapezoid}.`);


type SmartPhone = {
    name: string;
    price: number;
    os: string;
}

// オブジェクトを返すアロー式は（）で囲む
const createSmartPhone = (name: string, price: number): SmartPhone => ({
    name,
    price,
    os: name.startsWith("iPhone") ? "iOS" : "Android"
});

// デモ createSmartPhone
const iphone = createSmartPhone("iPhone 15", 100_000);
const android = createSmartPhone("Pixel 8", 60_000);

console.log(`iphone :${iphone.name} ${iphone.price} ${iphone.os}`);
console.log(`android :${android.name} ${android.price} ${android.os}`);


// オブジェクトに関数を含める
const mathObj = {
    // 円周率
    pi: 3.14,
    // メソッド記法
    calcAreaCircle: (radius: number): number => {
        return radius * radius * mathObj.pi;
    }
}

// デモ mathObj
const areaCircle = mathObj.calcAreaCircle(10);
console.log(`areaCircle is ${areaCircle}.`);


// 可変長引数のアロー式
const allConcat = (separator: string, ...inputs: string[]): string => {
    let result = inputs[0];
    for (const input of inputs.slice(1)) {
        result += separator + input;
    }
    return result;
}

// デモ allConcat
const result123 = allConcat("+", "1", "2", "3");
console.log(result123);

const resultABC = allConcat("->", "A", "B", "C", "D");
console.log(resultABC);


// スプレッド構文で配列を展開して渡す
const inputValues = ["hoge", "fuga", "piyo"];
const resultHogeFugaPiyo = allConcat("~", ...inputValues);
console.log(resultHogeFugaPiyo);

const createSmartPhone2 = (name: string, price: number, os: string = "iOS"): SmartPhone => ({
    name,
    price,
    os
});

// デモ createSmartPhone2
const iphone2 = createSmartPhone2("iPhone 15", 100_000);
const android2 = createSmartPhone2("Pixel 8", 60_000, "Android");

console.log(`iphone2 :${iphone2.name} ${iphone2.price} ${iphone2.os}`);
console.log(`android2 :${android2.name} ${android2.price} ${android2.os}`);

// コールバック関数
inputValues
    .map(value => value.toUpperCase())
    .forEach(value => console.log(value));


// 関数型の別名
type FuncInputString = (input: number) => void;

// 関数型typeに関数を代入
const homuRepeat: FuncInputString = (input: number) => {
    let homus = "homu";
    for (let i = 1; i < input; i++) {
        homus += "_homu";
    }
    console.log(homus);
}

homuRepeat(3);

// 関数型typeに関数を代入。引数の名称は関数型typeと同じでなくてもよい
const fugaRepeat: FuncInputString = (count: number) => {
    let fugas = "fuga";
    for (let i = 1; i < count; i++) {
        fugas += "_fuga";
    }
    console.log(fugas);
}

fugaRepeat(3);

// 関数型typeに関数を代入。引数の型は省略してもいい
const powRepeat: FuncInputString = (count) => {
    let pow = "pow";
    for (let i = 1; i < count; i++) {
        pow += "_pow";
    }
    console.log(pow);
}

powRepeat(3);

// コンパイルエラー パラメーター 'num' の型は暗黙的に 'any' になります。ts(7006)
// const badFunc = (num) => num * 2;

// 型注釈をつけるればよい
const goodFunc = (num: number) => num * 2;

// 関数型とコールシグネチャ。普通は関数型を使う
type FuncInNumberOutString = (num: number) => string;
type CallSigInputNumberOutString = { (num: number): string };

const funcInNumberOutString: FuncInNumberOutString = (num) => num.toString();
const callSigInputNumberOutString: CallSigInputNumberOutString = (num) => num.toString();

console.log(funcInNumberOutString(99));
console.log(callSigInputNumberOutString(999));








