import { readFile } from 'fs/promises';
import { performance } from 'perf_hooks';

console.log("# demo_promise_new.ts");

//Promiseの生成
console.log("\n ## Promiseの生成");

const startTime1 = performance.now();

console.log(`1. started: Promise 1 ${performance.now() - startTime1}ms`);

const promise3 = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(2000);
    }, 2000);
});

promise3.then((data) => {
    console.log(`3. end____: Promise Result: ${data} ${performance.now() - startTime1}ms`);
});

console.log(`2. started: Promise 1 ${performance.now() - startTime1}ms`);
