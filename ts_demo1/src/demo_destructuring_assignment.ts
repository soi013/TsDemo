type Family = {
    father: string;
    mother: string;
    children: string[];
}

const janeFamily: Family = {
    father: "John",
    mother: "Jane",
    children: ["John Jr.", "Rodriguez Jr."],
}

// 分割代入
const { father, mother, children } = janeFamily;

console.log(`father: ${father}, mother: ${mother}, children: ${children}`);

// 分割代入で名前を変える
const { father: fatherName, mother: motherName, children: childrenNames } = janeFamily;

console.log(`fatherName: ${fatherName}, motherName: ${motherName}, childrenNames: ${childrenNames}`);

// ネストしたオブジェクトの分割代入
const jojoHistory = {
    startAt: 1987,
    first: {
        hero: "Jonathan Joestar",
        enemy: "Dio Brando",
    },
    second: {
        hero: "Joseph Joestar",
        enemy: "Kars",
    },
    third: {
        hero: "Jotaro Kujo",
        enemy: "Dio Brando",
    },
};

const { startAt, first: { hero: jonathan, enemy: dio } } = jojoHistory;


console.log(`startAt: ${startAt}, jonathan: ${jonathan}, dio: ${dio}`);

// 配列の分割代入
const jojos = ["jonathan", "joseph", "jotaro"];
const [hero1, hero2, hero3, hero4] = jojos;

console.log(`hero1: ${hero1}, hero2: ${hero2}, hero3: ${hero3}, hero4: ${hero4}`); // hero4はundefined

// 分割代入で配列の一部を取得する
const [, , hero3j] = jojos;

console.log(`hero3j: ${hero3j}`);

// 分割代入でデフォルト値を設定する
type Jojo = {
    hero: string;
    enemy: string;
    stand?: string;
}

const jojo1: Jojo = {
    hero: "jonathan",
    enemy: "dio",
}

const jojo3: Jojo = {
    hero: "jotaro",
    enemy: "dio",
    stand: "star platinum",
}

{
    const { hero, enemy, stand = "NOTHING" } = jojo1;
    console.log(`jojo1: hero: ${hero}, enemy: ${enemy}, stand: ${stand}`);
}

{
    const { hero, enemy, stand = "NOTHING" } = jojo3;
    console.log(`jojo3: hero: ${hero}, enemy: ${enemy}, stand: ${stand}`);
}

// restパターン
{
    const { enemy, ...rest } = jojo3;
    console.log(`enemy: ${enemy}, rest: ${rest.hero}, ${rest.stand}`);
}

// 分割代入で配列を展開する

