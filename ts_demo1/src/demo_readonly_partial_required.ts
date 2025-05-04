console.log("# demo_readonly_partial_required.ts");
console.log("\n ## Readonly<T>のデモ");

type Dishes = {
    material: string;
    color: string;
}

const plasticDish: Dishes = { material: "plastic", color: "green" };

// readonlyではないので、変更できる
plasticDish.color = "blue";
console.log({ plasticDish });

// readonlyがついて読み取り専用プロパティになる
// type ReadonlyDishes = {
//     readonly material: string;
//     readonly color: string;
// }
type ReadonlyDishes = Readonly<Dishes>;

const yamazakiDish: ReadonlyDishes = { material: "ceramic", color: "white" };

// readonlyなので、変更できない
// 読み取り専用プロパティであるため、'color' に代入することはできません。ts(2540)
// yamazakiDish.color = "blue";

console.log({ yamazakiDish });

console.log("\n ## Partial<T>のデモ");

type PartialDishes = Partial<Dishes>;

// ?がついてオプションプロパティになる
// type PartialDishes = {
//     material?: string | undefined;
//     color?: string | undefined;
// }

// colorがなくてもOK
const paperDish: PartialDishes = { material: "paper" };

console.log({ paperDish });

console.log("\n ## Required<T>のデモ");

type Bowl = {
    color?: string;
    size?: number;
    readonly material: string;
}

// オプションプロパティはなくてもOK
const ceramicBowl: Bowl = { material: "ceramic" };
console.log({ ceramicBowl });

type RequiredBowl = Required<Bowl>;

// ?がついていないので、必須プロパティになる
// type RequiredDishes = {
//     material: string;
//     color: string;
// }

// プロパティ 'size' は型 '{ color: string; }' にありませんが、型 'Required<Bowl>' では必須です。ts(2741)
// const glassBowl: RequiredBowl = { color: "transparent" };

const glassBowl: RequiredBowl = { color: "transparent", size: 10, material: "glass" };

console.log({ glassBowl });

console.log("\n ## Pick<T, K>のデモ");

type PickedBowl = Pick<Bowl, "color" | "material">;

// 指定されたプロパティのみが含まれる。オプショナルの指定なども受け継ぐ
// type PickedBowl = {
//     readonly material: string;
//     color?: string | undefined;
// }

const plasticBowl: PickedBowl = { color: "blue", material: "plastic" };
console.log({ plasticBowl });

console.log("\n ## Omit<T, K>のデモ");

type OmittedBowl = Omit<Bowl, "color" | "size">;

// 指定されたプロパティを除いたものが含まれる
// type OmittedBowl = {
//     readonly material: string;
// }

const woodBowl: OmittedBowl = { material: "wood" };
console.log({ woodBowl });

console.log("\n ## Extract<T, U>のデモ");

type SourceUnions = "red" | "ceramic" | Dishes | 99;

// type ExtractString = "ceramic" | "red"
type ExtractString = Extract<SourceUnions, string>;

let extractedString: ExtractString = "red";
extractedString = "ceramic";
//型 '99' を型 'ExtractString' に割り当てることはできません。ts(2322)
// extractedString = 99;

console.log({ extractedString });

console.log("\n ## Exclude<T, U>のデモ");

type ExcludeString = Exclude<SourceUnions, string>;

// type ExcludeString = Dishes | 99

// 型 '"red"' を型 'ExcludeString' に割り当てることはできません。ts(2322)
// let excludedString: ExcludeString = "red";   

let excludedString: ExcludeString = 99;

console.log({ excludedString });

console.log("\n ## NonNullable<T>のデモ");

type NullableSource = string | undefined | null;

type NonNullableString = NonNullable<NullableSource>;

// 型 'null' を型 'NonNullableString' に割り当てることはできません。ts(2322)
// const nullableString: NonNullableString = null;

const nonNullableString: NonNullableString = "red";
console.log({ nonNullableString });



