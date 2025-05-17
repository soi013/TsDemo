import { readFileSync, writeFileSync, existsSync, unlinkSync, readFile, writeFile } from 'fs';

console.log("# demo_callback.ts");
console.log("\n ## ブロッキングしてファイル読み書き");

const targetFilePath = 'demo_source/fs_target_text_large.tmp';

if (existsSync(targetFilePath)) {
    unlinkSync(targetFilePath);
}

const randomTextLength = 10000000;

let randomText = '';

for (let i = 0; i < randomTextLength; i++) {
    randomText += Math.random().toString(36).substring(2);
}

console.log(`randomTextLength: ${randomText.length} randomText: ${randomText.slice(0, 10)}`);

console.log(`start: write file blocking ${new Date().toISOString()}`);

writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);

console.log(`end__: write file blocking ${new Date().toISOString()}`);

console.log(`start_: read file blocking ${new Date().toISOString()}`);

let textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');

console.log(`end___: read file blocking ${new Date().toISOString()}`);


console.log("\n ## コールバックでファイル読み");

console.log(`start: read file callback ${new Date().toISOString()}`);

readFile(targetFilePath, (data) => {
    console.log(`end__: read file callback ${new Date().toISOString()}`);
});

console.log(`started: read file callback ${new Date().toISOString()}`);

