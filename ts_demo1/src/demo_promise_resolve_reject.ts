import { readFile } from 'fs/promises';
import { performance } from 'perf_hooks';

console.log("# demo_promise_resolve_reject.ts");

//即完了するPromise
console.log("\n ## 即完了するPromise");

const startTime1 = performance.now();

console.log(`1. start__: Promise 1 ${performance.now() - startTime1}ms`);

const promise1 = Promise.resolve(99);

promise1.then((data) => {
    console.log(`3. end____: Promise 1 Result: ${data} ${performance.now() - startTime1}ms`);
});

//即完了するものであっても、非同期なので、先にこちらが実行される
console.log(`2. started: Promise 1 ${performance.now() - startTime1}ms`);

await promise1;

//即失敗するPromise
console.log("\n ## 即失敗するPromise");

const startTime2 = performance.now();

console.log(`4. start__: Promise 2 ${performance.now() - startTime2}ms`);

const promise2 = Promise.reject(new Error('Promise 2 Error'));

promise2.catch((error) => {
    console.log(`6. end____: Promise 2 Error: ${error} ${performance.now() - startTime2}ms`);
});

console.log(`5. started: Promise 2 ${performance.now() - startTime2}ms`);

