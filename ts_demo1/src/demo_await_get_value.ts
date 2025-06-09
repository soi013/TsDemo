import { performance } from 'perf_hooks';

console.log("# demo_await_get_value.ts");

// awaitでのファイル読み込み完了を待つ
console.log("\n ## awaitでのファイル読み込み完了を待つ");

const startTime = performance.now();

const readedText = await readTmpFile();

console.log(`3. end____: read file await ${performance.now() - startTime}ms`);

console.log(`4. readedText: ${readedText.slice(0, 10)}`);

async function readTmpFile(): Promise<string> {
    const targetFilePath = 'demo_source/fs_target_text_large.tmp';

    console.log(`1. start__: read file await ${performance.now() - startTime}ms`);

    const { readFile } = await import('fs/promises');

    console.log(`2. started: import readfile completed ${performance.now() - startTime}ms`);

    const readedText = await readFile(targetFilePath, 'utf-8');
    return readedText;
}

