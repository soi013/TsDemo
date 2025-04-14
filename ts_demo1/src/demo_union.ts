console.log("demo_union");

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
type Animal = {
    species: string;
    age: number;
}

type Human = Animal & {
    name: string;
}

const humanTaro: Human = {
    species: "human",
    age: 20,
    name: "Taro",
}

console.log(humanTaro);


