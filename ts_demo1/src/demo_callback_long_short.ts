import { performance } from 'perf_hooks';

console.log("# demo_callback_long_short.ts");

// いろいろな処理時間の非同期処理と同期処理
console.log("\n ## いろいろな処理時間の非同期処理と同期処理");
const startTime = performance.now();

// 1.5秒後に完了する長い非同期処理
setTimeout(() => {
    console.log(`3. long async process. ${performance.now() - startTime}ms`);
}, 1500);

// 10ミリ秒後に完了する短い非同期処理
setTimeout(() => {
    console.log(`2. short async process. ${performance.now() - startTime}ms`);
}, 10);

// 1秒間処理をブロックする同期処理

while (performance.now() - startTime < 1000) {
    Math.random();
}

console.log(`1. end__: long sync process ${performance.now() - startTime}ms`);


