console.log("# demo_template_literal.ts");
console.log("\n ## テンプレートリテラル");

// テンプレートリテラルの型。JoJoの名前のみを許す
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

//ジェネリック型と組み合わせる
console.log("\n ## テンプレートリテラルとジェネリック型");

function getJojoFullNameNormal(firstName: string) {
    return `${firstName}=ジョースター`;
}
function getJojoFullNameGeneric<T extends string>(firstName: T) {
    return `${firstName}=ジョースター` as const;
}

// どちらも結果は同じだが型が違う
// const jojoFullName1: string
const jojoFullName1 = getJojoFullNameNormal("ジョナサン");

// const jojoFullName2: "ジョナサン=ジョースター"
const jojoFullName2 = getJojoFullNameGeneric("ジョナサン");

console.log(jojoFullName1);
console.log(jojoFullName2);

// ユニオン型との組み合わせ。これがリテラル型の最も多い使い方
console.log("\n ## テンプレートリテラルとユニオン型");

type JojoName = "ジョナサン" | "ジョセフ" | "ジョルノ";

function getJojoFullNameUnion(firstName: JojoName) {
    return `${firstName}=ジョースター` as const;
}

const jojoFullName3 = getJojoFullNameUnion("ジョナサン");
const jojoFullName4 = getJojoFullNameUnion("ジョセフ");
const jojoFullName5 = getJojoFullNameUnion("ジョルノ");

console.log(jojoFullName3);
console.log(jojoFullName4);
console.log(jojoFullName5);


