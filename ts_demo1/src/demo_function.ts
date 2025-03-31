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
