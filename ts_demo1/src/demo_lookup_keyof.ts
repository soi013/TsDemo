console.log("# demo_lookup_keyof");
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

