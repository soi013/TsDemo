console.log("# demo_exception1.ts");
console.log("\n ## エラーのデモ1");

const newError = new Error("test error");
throw newError;

// file:///D:/Documents/GitHub/TsDemo/ts_demo1/dist/demo_exception.js:3
// const newError = new Error("test error");
//                  ^

// Error: test error
//     at file:///D:/Documents/GitHub/TsDemo/ts_demo1/dist/demo_exception.js:3:18
//     at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.14.0

// ここには到達しない
console.log("not reached here");
