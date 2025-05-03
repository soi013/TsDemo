console.log("# demo_exception2.ts");
console.log("\n ## エラーのデモ2");

try {
    console.log("create error");
    const newError = new Error("test error");
    console.log("throw error");
    throw newError;

    // ここには到達しない
    console.log("not reached here");
} catch (error) {
    console.log("catch error");
    console.log(error);
    // Error: test error
    // at file:///D:/Documents/GitHub/TsDemo/ts_demo1/dist/demo_exception2.js:4:22
    // at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    // at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    // at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)
}

// ここには到達する
console.log("reached here");

// 大域脱出 深いブロックからtry-catchされるまで脱出し続ける
try {
    console.log("try 1");
    try {
        console.log("try 2");
        causeError1();
    } catch (error) {
        console.log("catch error 2");
    }
} catch (error) {
    console.log("catch error 1 (not reached)");
}

function causeError1() {
    console.log("causeError1 start");
    causeError2();
    console.log("causeError1 end (not reached)");
}

function causeError2() {
    console.log("causeError2 start");
    throw new Error("test error");
    console.log("causeError2 end (not reached)");
}

// 既存のよくあるエラー発生パターン
// 0除算は例外でなく無限大になる
try {
    console.log("try 0");
    const arrayEmpty: number[] = [];
    const result = 1 / arrayEmpty.length;
    console.log("result", result);
} catch (error) {
    console.log("catch error 0 (not reached)");
}

// 数字でないものを数字に変換しようとする
try {
    console.log("try BigInt");
    const result = BigInt("a");
    console.log("result", result);
} catch (error) {
    console.log("catch error BigInt");
    console.log(error);
    // SyntaxError: Cannot convert a to a BigInt
    // at BigInt (<anonymous>)
    // at file:///D:/Documents/GitHub/TsDemo/ts_demo1/dist/demo_exception2.js:60:20
    // at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    // at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    // at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)
}
