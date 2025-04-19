console.log("# demo_union");
console.log("\n ## ユニオン型");

type Speaker = {
    name: string;
    power: number;
    size: string;
}

type Earphone = {
    name: string;
    power: number;
    size: number;
    earphoneType: string;
}

// 2つの型のどちらかを表すUnion型
type Device = Speaker | Earphone;

let device: Device;

device = {
    name: "speaker",
    power: 100,
    size: "デカい",
}

console.log(device);
console.log(typeof device);

// 両方の型に共通のプロパティならアクセスできる
const GetPower = (dev: Device): number => {
    return dev.power;
}

// 両方の型にプロパティはあるが、そのプロパティの型が異なった場合、両方のプロパティの型を表すUnion型を返す
const GetSize = (dev: Device): string | number => {
    return dev.size; // ここではstringとnumberのどちらも返せる
}

// 片方の型にしかないプロパティはビルドエラー
// const GetEarphoneType = (dev: Device): string | number => {
//     return dev.earphoneType; // プロパティ 'earphoneType' は型 'Device' に存在しません。プロパティ 'earphoneType' は型 'Speaker' に存在しません。ts(2339)
// }

console.log(GetPower(device));
console.log(GetSize(device));

//インターセクション型
console.log("\n ## インターセクション型");

// 2つの型のどちらもを満たす型という意味だが、「ある型を拡張した型」という意図で使われることが多い
type Animal = {
    species: string;
    age: number;
}

// HumanはAnimalの拡張
type Human = Animal & {
    name: string;
}

// Humanとプロパティが一致　= 同じ型
type HumanDiscrete = {
    species: string;
    age: number;
    name: string;
}

const humanTaro: Human = {
    species: "human",
    age: 20,
    name: "Taro",
}

console.log(humanTaro);

// never型
// プリミティブ型同士のインターセクションはnever型になる
console.log("\n ## never型");

type Never = string & number;

// 型 '"hello"' を型 'never' に割り当てることはできません。ts(2322)
// const never: Never = "hello";
// const never: Never = 100;

type AnimalAndString = Animal & string;

// 型 'string' を型 'AnimalAndString' に割り当てることはできません。ts(2322)
// const animalAndString: AnimalAndString = "hello";

// 型 '{ species: string; age: number; }' を型 'AnimalAndString' に割り当てることはできません。
// //   型 '{ species: string; age: number; }' を型 'string' に割り当てることはできません。ts(2322)
// const animalAndString: AnimalAndString = {
//     species: "human",
//     age: 20,
// }

// asを使えば無理やりできはする
const animalAndString: AnimalAndString = {
    species: "human",
    age: 20,
} as Animal & string;

const animalAndString2: AnimalAndString = "hoge" as Animal & string;

console.log(animalAndString);
console.log(animalAndString2);

// 関数型とユニオン型・インターセクション型
console.log("\n ## 関数型とユニオン型・インターセクション型");

type Snake = Animal & {
    //蛇の品種
    breed: string;
}

function getName(human: Human) {
    return human.name;
}

function getBreed(snake: Snake) {
    return snake.breed;
}

// 異なる型の引数を受け取る関数を組み合わせた、不思議な関数。
// 型は、((human: Human) => string) | ((snake: Snake) => string)
const randomNameOrBreed = Math.random() > 0.5 ? getName : getBreed;

const human1: Human = {
    species: "human",
    age: 20,
    name: "Taro",
}

const snake1: Snake = {
    species: "snake",
    age: 1,
    breed: "cobra",
}

// 普通のHuman型やSnake型を渡すとエラー
// 型 'Human' の引数を型 'Animal & { name: string; } & { breed: string; }' のパラメーターに割り当てることはできません。
//   プロパティ 'breed' は型 'Human' にありませんが、型 '{ breed: string; }' では必須です。ts(2345)
// const nameOrBreed1 = randomNameOrBreed(human1);
// const nameOrBreed2 = randomNameOrBreed(snake1);

// 人であり蛇でもある、悲しい生き物
const snakeMan: Human & Snake = {
    species: "snake",
    age: 1,
    breed: "cobra",
    name: "Taro",
}

// 呼び出し時のrandomNameOrBreedの型を見ると以下になっている。合成されて単純な型になっている
// (arg0: Animal & { name: string; } & { breed: string; }) => string

const nameOrBreed3 = randomNameOrBreed(snakeMan);
console.log(nameOrBreed3); //結果はcobra or Taro

// 同名だが、型が違うプロパティを持つインターセクション型は、実際はインスタンスを作れない
type SpearPhonker = Speaker & Earphone;

// 型 'string' を型 'never' に割り当てることはできません。ts(2322)
// demo_union.ts(7, 5): 予期された型は、型 'SpearPhonker' に対してここで宣言されたプロパティ 'size' から取得されています
// const spearPhonker: SpearPhonker = {
//     name: "spearPhonker",
//     power: 1,
//     size: "speakerとしては小さめ、earphoneとしては大きめ",
//     earphoneType: "spearPhonker",
// }

// const sizeOrPower = randomSizeOrPower(spearPhonker);

// オプショナルプロパティとユニオン型
console.log("\n ## オプショナルプロパティとユニオン型");

type KnifeOptional = {
    bladeLength: number;
    material?: string; // オプショナルプロパティ string | undefined
}

// オプショナルプロパティは宣言しても、しなくてもいい
const knife1: KnifeOptional = {
    bladeLength: 10,
    material: "steel",
}

const knife2: KnifeOptional = {
    bladeLength: 10,
}

const knife3: KnifeOptional = {
    bladeLength: 10,
    material: undefined,
}

console.log(knife1);
console.log(knife2);
console.log(knife3);

type KnifeUndefined = {
    bladeLength: number;
    material: string | undefined;
}

const knife4: KnifeUndefined = {
    bladeLength: 10,
    material: "dragongrass",
}

// 型がundefinedだったとしても、省略できるわけではない
// プロパティ 'material' は型 '{ bladeLength: number; }' にありませんが、型 'KnifeUndefined' では必須です。ts(2741)
// const knife4: KnifeUndefined = {
//     bladeLength: 10,
// }

// 省略してもいい→オプショナルプロパティ
// 省略したいわけではないが、値が存在しない場合がある→undefinedとのユニオン型

//exactOptionalPropertyTypes オプションが有効だと、これもエラーになる
// const knife9: KnifeOptional = {
//     bladeLength: 10,
//     material: undefined,
// }