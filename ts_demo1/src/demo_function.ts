function RangeStartEnd(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


const nums = RangeStartEnd(5, 10);
console.log(nums.join(","));
