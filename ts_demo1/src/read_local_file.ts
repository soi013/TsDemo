import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log("# read_local_file.ts");
console.log("\n ## ローカルファイルを読み込む");

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
const textInFile = readFileSync(targetFilePath, 'utf8');
console.log(textInFile);

// g のオプションで配列で返す
const regexJo = /Jo\w+/g;
const joNames = textInFile.match(regexJo);

console.log({ joNames });
console.log(`Joの名前は${joNames?.length}個あります`);

