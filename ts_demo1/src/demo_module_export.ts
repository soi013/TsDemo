console.log("# demo_module_export.ts");
console.log("\n ## モジュールの使い方 export側");

// exportをつけると他のファイルから参照できる
export const bookTitle = "Steel Ball Run"
export const bookAuthor = "Hirohiko Araki"

// exportをつけないと他のファイルから参照できない
const secretName = "Jojo 6th";

// 名前を変えてエクスポートする
export { secretName as Himitsu };

// 関数をエクスポートする
export function getBookInfo() {
    return `(${bookTitle}) by (${bookAuthor})`;
}

console.log(`\n ## let変数のexport`);
// let変数をexportする
export let stageNumber = 1;

export const increaseStageNumber = () => {
    stageNumber++;
}

export const getCurrentStageNumber = () => {
    return stageNumber;
}

console.log(`\n ## default export`);
//値だけ指定して変数名はなしでエクスポートする
export default "JOJO";

// モジュールに複数の既定のエクスポートを含めることはできません。ts(2528)
// export default 99;

// ※基本的に非推奨らしい

console.log(`\n ## 型をエクスポートする`);
// 型をエクスポートする

export type Book = {
    title: string;
    author: string;
}

export const jojo6thBook: Book = {
    title: "Steel Ball Run",
    author: "Hirohiko Araki"
}