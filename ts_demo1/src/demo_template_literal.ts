console.log("# demo_template_literal.ts");
console.log("\n ## テンプレートリテラル");

type onlyJoJo = `ジョ${string}=ジョ${string}`

const joJo1: onlyJoJo = "ジョナサン=ジョースター";
const joJo2: onlyJoJo = "ジョセフ=ジョースター";

// 法則に当てはまらない文字列はコンパイルエラー
// 型 '"ジョータロー=クウジョウ"' を型 '`\u30B8\u30E7${string}=\u30B8\u30E7${string}`' に割り当てることはできません。ts(2322)
// const joJo3: onlyJoJo = "ジョータロー=クウジョウ";

// const joJo4: onlyJoJo = "ジョウスケ=ヒガシカタ";

const joJo5: onlyJoJo = "ジョルノ=ジョバァーナ";

console.log(joJo1);
console.log(joJo2);
console.log(joJo5);

// 関数の返り値がテンプレートリテラルの型を持つ
function getJoJo(generation: number): `ジョ${string}=ジョ${string}` {
    if (generation === 1) {
        return `ジョナサン=ジョースター`;
    } else if (generation === 2) {
        return `ジョセフ=ジョースター`;
    }
    return `ジョルノ=ジョバァーナ`;
}

// 呼び出し側が関数の返り値の法則性を知れる
// function getJoJo(generation: number): `ジョ${string}=ジョ${string}`
const joJo6 = getJoJo(1);

