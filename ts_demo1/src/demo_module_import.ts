console.log("# demo_module_import.ts");
console.log("\n ## モジュールの使い方 import側");

// モジュール '"./demo_module_export"' は 'secretName' をローカルで宣言していますが、これはエクスポートされていません。ts(2459)
// import { bookTitle, bookAuthor, secretName } from "./demo_module_export";
import { bookTitle, getBookInfo, getCurrentStageNumber, Himitsu, increaseStageNumber, stageNumber } from "./demo_module_export.js";

// as で名前を変えてインポートする
import { bookAuthor as BA } from "./demo_module_export.js";

console.log(`the book title is [${bookTitle}] and the author is [${BA}].`);

// export していない変数は参照できない
// 名前 'secretName' が見つかりません。ts(2304)
// console.log(secretName);

console.log(`the secret name is [${Himitsu}].`);

console.log(getBookInfo());

console.log(`\n ## let変数のimport`);

let myStageNumber = stageNumber;
console.log({ stageNumber });
console.log({ myStageNumber });
console.log(`current stage number: ${getCurrentStageNumber()}`);

increaseStageNumber();

console.log({ stageNumber });
console.log({ myStageNumber });
console.log(`current stage number: ${getCurrentStageNumber()}`);

//letであっても、インポートされた変数は変更できない
//インポートであるため、'stageNumber' に割り当てることはできません。ts(2632)
// stageNumber = 99;
myStageNumber = 99;

console.log(`\n ## default import`);
// default export は名前をつけてインポートする
import defaultExport from "./demo_module_export.js";

console.log({ defaultExport });


console.log(`\n ## 型をインポートする`);
import { type Book, jojo6thBook } from "./demo_module_export.js";

console.log({ jojo6thBook });
const kiseijyuuBook: Book = {
    title: "kiseijyuu",
    author: "hitoshi iwaaki"
};

console.log({ kiseijyuuBook });

console.log(`\n ## モジュールの使い方 import側 一括インポート用`);
// 一括インポートでは必ず as で名前をつける
import * as allExport from "./demo_module_export_all.js";

console.log({ allExport });

// インポートしたものはasでつけた名前から参照する
console.log(allExport.seriesTitle);
console.log(allExport.episode1Title);
console.log(allExport.episode2Title);
console.log(allExport.episode3Title);
console.log(allExport.episode4Title);
console.log(allExport.episode5Title);
console.log(allExport.episode6Title);

const episode7: allExport.Episode = {
    title: "The Force Awakens",
    episode: 7
}

console.log({ episode7 });
