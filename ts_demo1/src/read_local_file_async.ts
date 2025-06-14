import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

console.log("# read_local_file_async.ts");
console.log("\n ## ローカルファイルを非同期で読み込む");

console.log("\n ## 現在のファイルパスを表示");

const currentUrl = import.meta.url;
console.log(`currentUrl: ${currentUrl}`);

const currentFilePath = fileURLToPath(currentUrl);
console.log(`currentFilePath: ${currentFilePath}`);

const targetFilePath = path.resolve(currentFilePath, '../../demo_source/fs_target_text.txt');
console.log(`targetFilePath: ${targetFilePath}`);

// const targetFilePath = fileURLToPath(targetFileUrl);
// console.log(`targetFilePath: ${targetFilePath}`);

console.log("\n ## ファイルを読み込む");
const textInFile = await readFile(targetFilePath, 'utf8');
console.log(textInFile);

// g のオプションで配列で返す
const regexJo = /Jo\w+/g;
const joNames = textInFile.match(regexJo);

console.log({ joNames });
console.log(`Joの名前は${joNames?.length}個あります`);

console.log("\n ## ファイルを読み込む");

const longFilePath = path.resolve(currentFilePath, '../../demo_source/fs_target_text_large.tmp');
console.log(`longFilePath: ${longFilePath}`);


let timeoutSec = 0.1;

for (let i = 1; i < 4; i++) {
    timeoutSec *= 10;
    console.log(`timeoutSec: ${timeoutSec}`);
    //const longFile: string | void
    const longFile = await doWithTimeout(timeoutSec, readFile(longFilePath, 'utf8'));

    if (longFile === undefined) {
        console.log("result is timeout");
    } else {
        console.log(`result is ${longFile.slice(0, 100)}...`);
    }
}

/**
 * タイムアウトを設定して、Promiseを返す
 * @param ms タイムアウト時間
 * @param promise 読み込み対象のPromise
 * @returns Promise<T | void>
 */
function doWithTimeout<T>(ms: number, promise: Promise<T>): Promise<T | void> {
    return Promise.race([
        promise,
        sleep(ms)
    ]);
}

function sleep(durationMs: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, durationMs);
    });
}

