console.log("# demo_module_import.ts");
console.log("\n ## モジュールの使い方 import側");

// モジュール '"./demo_module_export"' は 'secretName' をローカルで宣言していますが、これはエクスポートされていません。ts(2459)
// import { bookTitle, bookAuthor, secretName } from "./demo_module_export";
import { bookTitle, bookAuthor, } from "./demo_module_export.js";

console.log(bookTitle, bookAuthor);
// 名前 'secretName' が見つかりません。ts(2304)
// console.log(secretName);






