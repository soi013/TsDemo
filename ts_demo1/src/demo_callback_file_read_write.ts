import { readFileSync, writeFileSync, existsSync, unlinkSync, readFile, writeFile } from 'fs';

console.log("# demo_callback_file_read_write.ts");

// ブロッキングしてファイル読み書き
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

console.log(`1. randomTextLength: ${randomText.length} randomText: ${randomText.slice(0, 10)}`);

console.log(`2. start: write file blocking ${new Date().toISOString()}`);

writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);
writeFileSync(targetFilePath, randomText);

console.log(`3. end__: write file blocking ${new Date().toISOString()}`);

console.log(`4. start_: read file blocking ${new Date().toISOString()}`);

let textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');
textInFile = readFileSync(targetFilePath, 'utf8');

console.log(`5. end___: read file blocking ${new Date().toISOString()}`);


// コールバックでファイル読み書き
console.log("\n ## コールバックでファイル読み");

console.log(`1. start: read file callback ${new Date().toISOString()}`);

readFile(targetFilePath, (data) => {
    console.log(`3. end__: read file callback ${new Date().toISOString()}`);
});

// コールバックは非同期で実行されるので、先にこちらが実行される
console.log(`2. started: read file callback ${new Date().toISOString()}`);
