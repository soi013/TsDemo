console.log("# demo_union");
console.log("\n ## Union型");

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
