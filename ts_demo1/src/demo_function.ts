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

// オブジェクトに関数を含める
const mathObj = {
    // 円周率
    pi: 3.14,
    calcAreaCircle: (radius: number): number => {
        return radius * radius * mathObj.pi;
    }
}

// デモ mathObj
const areaCircle = mathObj.calcAreaCircle(10);
console.log(`areaCircle is ${areaCircle}.`);
