import { performance } from 'perf_hooks';

console.log("# demo_await_error.ts");

// awaitでのエラー処理
console.log("\n ## awaitでのエラー処理");

const startTime = performance.now();

const result = readUnknownFileCatch()
    .then(() => {
        console.log(`6. end____: read unknown file then ${performance.now() - startTime}ms`);
    });

await result;

console.log(`7. end____: await final result ${performance.now() - startTime}ms`);

async function readUnknownFileCatch() {
    try {
        const readedText = await readUnknownFile();
        console.log(`3A. end____: read unknown file await ${performance.now() - startTime}ms`);
        console.log(`4A. readedText: ${readedText.slice(0, 10)}`);
    } catch (error) {
        console.log(`3B. end____: read unknown file await ${performance.now() - startTime}ms`);
        console.log('4B. ERROR:', error);
    }

    console.log(`5. end____: read unknown file await ${performance.now() - startTime}ms`);

}

async function readUnknownFile(): Promise<string> {
    const targetFilePath = 'unknown_file.txt';

    console.log(`1. start__: read unknown file await ${performance.now() - startTime}ms`);

    const { readFile } = await import('fs/promises');

    console.log(`2. started: import readfile unknown file completed ${performance.now() - startTime}ms`);

    const readedText = await readFile(targetFilePath, 'utf-8');
    return readedText;
}

