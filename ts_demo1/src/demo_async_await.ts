export { };

console.log("# demo_async_await.ts");

// asyncをつけた関数はPromiseを返す
console.log("\n ## asyncをつけた関数はPromiseを返す");

// asyncを付けると結果がPromise<返り値の型>になる
async function justReturn9(): Promise<number> {
    console.log(`2. called_: justReturn9 ${(performance.now() - startTime).toFixed(2)}ms`);
    return 9;
}

const startTime = performance.now();

console.log(`1. start__: justReturn9 ${(performance.now() - startTime).toFixed(2)}ms`);

// const result: Promise<number>
const result = justReturn9();

console.log(`3. started: justReturn9 ${(performance.now() - startTime).toFixed(2)}ms`);

result.then((result) => {
    console.log(`5. fined__: justReturn9 ${(performance.now() - startTime).toFixed(2)}ms`);
});

await result;

console.log(`4. end____: justReturn9 ${(performance.now() - startTime).toFixed(2)}ms`);

//awaitをつけるとPromiseの結果を待つ
console.log("\n ## await");

const startTime2 = performance.now();
console.log(`0. start__: ${performance.now() - startTime2}`);

function sleep(durationMs: number) {
    console.log(`2/5. sleep_start: ${durationMs}ms ${performance.now() - startTime2}`);
    return new Promise((resolve) => setTimeout(resolve, durationMs));
}

async function delayReturnNum(num: number) {
    console.log(`1/4. delayReturnNum_start: ${performance.now() - startTime2}`);
    await sleep(1000);
    console.log(`7/9. delayReturnNum_end: ${performance.now() - startTime2}`);
    return num;
}

const p999 = delayReturnNum(999);
console.log(`3. satrted: p999 ${performance.now() - startTime2}`);
const p123 = delayReturnNum(123);
console.log(`6. satrted: p123 ${performance.now() - startTime2}`);

p123.then((result) => {
    console.log(`10. fined__: p123 ${performance.now() - startTime2}`);
});
p999.then((result) => {
    console.log(`8. fined__: p999 ${performance.now() - startTime2}`);
});


console.log(`p123: ${p123}`);
console.log(`p999: ${p999}`);

// awaitの順番が変わっても実行される順はstart順
await p123;
await p999;

console.log(`11. end____: ${performance.now() - startTime2}`);

// async function
console.log("\n ## async function");

const startTime3 = performance.now();

const delayFuncReturnNum = async function (num: number) {
    console.log(`delayReturnNum_start: ${performance.now() - startTime3}`);
    await sleep(1000);
    console.log(`delayReturnNum_end: ${performance.now() - startTime3}`);
    return num;
}

const result3 = delayFuncReturnNum(999);
console.log(`delayFuncReturnNum_started: ${performance.now() - startTime3}`);
await result3;
console.log(`delayFuncReturnNum_end: ${performance.now() - startTime3}`);

// async arrow関数式
console.log("\n ## async arrow関数式");

const startTime4 = performance.now();
const delayArrowFuncReturnNum = async (num: number) => {
    console.log(`delayArrowFuncReturnNum_start: ${performance.now() - startTime4}`);
    await sleep(1000);
    console.log(`delayArrowFuncReturnNum_end: ${performance.now() - startTime4}`);
    return num;
}

const result4 = delayArrowFuncReturnNum(666);
console.log(`delayArrowFuncReturnNum_started: ${performance.now() - startTime4}`);
await result4;
console.log(`delayArrowFuncReturnNum_end: ${performance.now() - startTime4}`);