console.log("# demo_module_import.ts");
console.log("\n ## モジュールの使い方 import側");

// モジュール '"./demo_module_export"' は 'secretName' をローカルで宣言していますが、これはエクスポートされていません。ts(2459)
// import { bookTitle, bookAuthor, secretName } from "./demo_module_export";
import { bookTitle, getBookInfo, Himitsu } from "./demo_module_export.js";

// as で名前を変えてインポートする
import { bookAuthor as BA } from "./demo_module_export.js";

console.log(`the book title is [${bookTitle}] and the author is [${BA}].`);

// export していない変数は参照できない
// 名前 'secretName' が見つかりません。ts(2304)
// console.log(secretName);

console.log(`the secret name is [${Himitsu}].`);

console.log(getBookInfo());





