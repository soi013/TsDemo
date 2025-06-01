import { readFile } from 'fs/promises';
import { performance } from 'perf_hooks';

console.log("# demo_promise_chain.ts");

// promiseのチェーン
console.log("\n ## promiseのチェーン");

const startTime = performance.now();
const targetFilePath = 'demo_source/fs_target_text.txt';

console.log(`1. start__: read file promise ${(performance.now() - startTime).toFixed(2)}ms`);

const promise1 = readFile(targetFilePath, 'utf-8');

console.log(`2. started: read file promise ${(performance.now() - startTime).toFixed(2)}ms`);

const promise2 = promise1.then((readedText) => {
    console.log(`4. progrs_: read file promise ${(performance.now() - startTime).toFixed(2)}ms`);
    return readedText.slice(0, 10);
});

promise2.then((headText) => {
    console.log(`5. end____: then promise headText: ${headText} ${(performance.now() - startTime).toFixed(2)}ms`);
});

console.log(`3. started: all promise ${(performance.now() - startTime).toFixed(2)}ms`);

await promise2;


// Chainでエラーが発生した場合の処理
console.log("\n ## Chainでエラーが発生した場合の処理");

const notExistFilePath = 'demo_source/not_exist_file.txt';

const startTime2 = performance.now();

const promise3 = readFile(notExistFilePath, 'utf-8')
    .catch((error: unknown) => {
        console.log(`3. progrs_: read error promise ${(performance.now() - startTime2).toFixed(2)}ms`);
        return 'error';
    })
    .then((readedText) => {
        console.log(`3. progrs_: read success promise ${(performance.now() - startTime2).toFixed(2)}ms`);
        return readedText.slice(0, 10);
    });

console.log(`1. started: read file promise ${(performance.now() - startTime2).toFixed(2)}ms`);

promise3.then((headText) => {
    console.log(`4. end____: then promise headText: ${headText} ${(performance.now() - startTime2).toFixed(2)}ms`);
});

console.log(`2. started: all promise ${(performance.now() - startTime2).toFixed(2)}ms`);

await promise3;

// 一定時間ごとに連続した処理を実行する
console.log("\n ## 一定時間ごとに連続した処理を実行する");

const startTime3 = performance.now();

console.log(`1. started: read file promise ${(performance.now() - startTime3).toFixed(2)}ms`);

const promise4 = readFile(targetFilePath, 'utf-8')

const promise5 = promise4.then((text) => {
    console.log(`3. progrs_: read file promise ${(performance.now() - startTime3).toFixed(2)}ms`);

    return repeatDelay(text, 5);
})

promise5.then((headText) => {
    console.log(`4. end____: then promise headText: ${headText} ${(performance.now() - startTime3).toFixed(2)}ms`);
});

console.log(`2. started: all promise ${(performance.now() - startTime3).toFixed(2)}ms`);

await promise5;


function repeatDelay(text: string, repeatCount: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.slice(0, 10));
        }, 1000);
    });
}

