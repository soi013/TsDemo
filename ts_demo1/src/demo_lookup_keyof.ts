console.log("# demo_lookup_keyof.ts");
console.log("\n ## lookupで型情報を再利用");

type Medicine = {
    name: string;
    price: number;
}

// priceはnumberだが、それを直接指定せず、Medicine["price"]という型を指定する
// Medicine.priceの型が変わったら引数の型も追従する
function changePriceMedicine(medicine: Medicine, newPrice: Medicine["price"]): Medicine {
    return {
        ...medicine,
        price: newPrice,
    }
}

const fentanyl1: Medicine = {
    name: "フェンタニル",
    price: 1000,
}

const fentanyl2 = changePriceMedicine(fentanyl1, 2000);
console.log(fentanyl1);
console.log(fentanyl2);


console.log("\n ## keyofでキーの型を取得");

type KeyOfMedicine = keyof Medicine;
let key: KeyOfMedicine = "price";
key = "name";

// keyof Medicineは"price" | "name"の型
// 型 '"hoge"' を型 'keyof Medicine' に割り当てることはできません。ts(2322)
// key = "hoge";

function keyString(key: KeyOfMedicine) {
    return `Key is ${key}` as const;
}

// keyS: "Key is price" | "Key is name"
const keyS1 = keyString("name");
const keyS2 = keyString("price");
console.log(keyS1);
console.log(keyS2);

console.log("\n ## typeofとkeyofの組み合わせ");

const medicinePriceFactors = {
    tablet: 1,
    powder: 2,
    injection: 5,
}

function calcMedicinePrice(factor: keyof typeof medicinePriceFactors, defualtPrice: number): number {
    return defualtPrice * medicinePriceFactors[factor];
}

const injectionPrice = calcMedicinePrice("injection", 1000);
const powderPrice = calcMedicinePrice("powder", 1000);

//型 '"liquid"' の引数を型 '"tablet" | "powder" | "injection"' のパラメーターに割り当てることはできません。ts(2345)
// const liquidPrice = calcMedicinePrice("liquid", 1000);

console.log({ injectionPrice });
console.log({ powderPrice });


console.log("\n ## ジェネリクスとkeyofの組み合わせ");

// T型を引数として受け取る。KはT型のkeyに制約されている。返り値はTのKプロパティを取得したもの
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const medicinePrice = getProperty(fentanyl1, "price");
console.log({ medicinePrice });

// 型 '"hoge"' の引数を型 'keyof Medicine' のパラメーターに割り当てることはできません。ts(2345)
// const medicineName = getProperty(fentanyl1, "hoge");

type Bag = {
    name: string;
    size: number;
    style: "handbag" | "shoulderbag" | "backpack";
}

// エルメスバッグ
const hermesBag: Bag = {
    name: "エルメスバッグ",
    size: 100,
    style: "handbag",
}

const hermesStyle = getProperty(hermesBag, "style");
console.log({ hermesStyle });

console.log("\n ## keyof は numberの可能性もある");

function getPropertyAndLog<T, K extends keyof T & string>(obj: T, key: K): T[K] {
    // 型制約に `& string` を追加して、string型に制約しないとエラーする
    // プロパティ 'toUpperCase' は型 'string | number | symbol' に存在しません。
    console.log(`key: ${key.toUpperCase()}`);
    return obj[key];
}

getPropertyAndLog(fentanyl1, "name");
getPropertyAndLog(fentanyl1, "price");


