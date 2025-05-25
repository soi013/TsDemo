import { readFile } from 'fs/promises';
import { performance } from 'perf_hooks';

console.log("# demo_promise.ts");

// promiseでのファイル読み込み
console.log("\n ## promiseでのファイル読み込み");

const startTime = performance.now();
const targetFilePath = 'demo_source/fs_target_text_large.tmp';

console.log(`1. start__: read file promise ${performance.now() - startTime}ms`);

const promise = readFile(targetFilePath, 'utf-8');

promise.then((data) => {
    console.log(`3. end____: read file promise ${performance.now() - startTime}ms`);
});

// promiseは非同期で実行されるので、先にこちらが実行される
console.log(`2. started: read file promise ${performance.now() - startTime}ms`);

await promise;

//promise 失敗時の処理
console.log("\n ## promise 失敗時の処理");
const startTime2 = performance.now();

const promise2 = readFile('unknown_file.txt', 'utf-8');

promise2.then((data) => {
    console.log(`2. end____: read file success promise ${performance.now() - startTime2}ms`);
}).catch((error: unknown) => {
    console.log(`2. end____: read file error promise ${performance.now() - startTime2}ms`);
    console.log('ERROR:', error);
});

console.log(`1. started: read file error promise ${performance.now() - startTime2}ms`);
