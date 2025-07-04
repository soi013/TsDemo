import { readFile, writeFile } from 'fs/promises';
import { performance } from 'perf_hooks';

console.log("# demo_promise_all_race.ts");

// promise.allで複数のPromiseを並列実行
console.log("\n ## promise.allで複数のPromiseを並列実行");

const startTime = performance.now();
const targetReadFilePath = 'demo_source/fs_target_text_large.tmp';
const targetWriteFilePath = 'demo_source/fs_target_text_large_2.tmp';

console.log(`1. start__: read all files promise ${performance.now() - startTime}ms`);

const promiseReadFile = readFile(targetReadFilePath, 'utf-8');
const promiseWriteFile = writeFile(targetWriteFilePath, 'utf-8');
const promiseTimeout = new Promise(resolve => {
    setTimeout(resolve, 1000)
});

const promises = [promiseReadFile, promiseWriteFile, promiseTimeout];

// Promise.allは、全てのPromiseが完了した時点で、その結果を配列で返す
const allPromise = Promise.all(promises);

// 個々の結果は分割代入で取得できる
allPromise.then(([readResult, writeResult, timeoutResult]) => {
    console.log(`4. end____: read all files promise ${performance.now() - startTime}ms`);
    console.log(`4. readResult: ${(readResult as string).slice(0, 10)}...`);
    console.log(`4. writeResult: ${writeResult}`);
    console.log(`4. timeoutResult: ${timeoutResult}`);
});

promiseReadFile.then((data) => {
    console.log(`3A. end____: read file promise ${performance.now() - startTime}ms`);
});

promiseWriteFile.then((data) => {
    console.log(`3B. end____: write file promise ${performance.now() - startTime}ms`);
});

promiseTimeout.then((data) => {
    console.log(`3C. end____: timeout promise ${performance.now() - startTime}ms`);
});

console.log(`2. started: read all files promise ${performance.now() - startTime}ms`);

await allPromise;

// promise.raceで、最初に完了したPromiseの結果を返す
console.log("\n ## promise.raceで、最初に完了したPromiseの結果を返す");

const startTime2 = performance.now();


const promiseReadFile2 = readFile(targetReadFilePath, 'utf-8');
const promiseWriteFile2 = writeFile(targetWriteFilePath, 'utf-8');
const promiseTimeout2 = new Promise(resolve => {
    setTimeout(resolve, 1000)
});

const racePromise = Promise.race([promiseReadFile2, promiseWriteFile2, promiseTimeout2]);

console.log(`1. start__: race promise ${performance.now() - startTime2}ms`);

racePromise.then((data) => {
    console.log(`3. end____: race promise ${data} ${performance.now() - startTime2}ms`);
});

console.log(`2. started: race promise ${performance.now() - startTime2}ms`);

await racePromise;

// promise.allSettledで、一部が失敗しても全てのPromiseが完了まで待って結果を返す
console.log("\n ## promise.allSettledで、一部が失敗しても全てのPromiseが完了まで待って結果を返す");

const startTime3 = performance.now();

const promiseReadFile3 = readFile(targetReadFilePath, 'utf-8');
const promiseTimeout3 = new Promise(resolve => {
    setTimeout(resolve, 1000)
});
const promiseError3 = new Promise(resolve => {
    setTimeout(resolve, 500)
    throw new Error('error')
});

console.log(`1. start__: allSettled promise ${performance.now() - startTime3}ms`);

const allSettledPromise = Promise.allSettled([promiseReadFile3, promiseTimeout3, promiseError3]);

allSettledPromise.then(([readResult, timeoutResult, errorResult]) => {
    console.log(`3. end____: allSettled promise ${performance.now() - startTime3}ms`);
    console.log(`3. readResult: status: ${readResult.status} value: ${readResult.status === 'fulfilled' ? readResult.value.toString().slice(0, 10) : readResult.reason}`);
    console.log(`3. timeoutResult: status: ${timeoutResult.status} value: ${timeoutResult.status === 'fulfilled' ? timeoutResult.value : timeoutResult.reason}`);
    console.log(`3. errorResult: status: ${errorResult.status} value: ${errorResult.status === 'fulfilled' ? errorResult.value : errorResult.reason}`);
});

console.log(`2. started: allSettled promise ${performance.now() - startTime3}ms`);
