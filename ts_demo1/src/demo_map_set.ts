console.log("# demo_map_set.ts");
console.log("\n ## Mapのデモ");

// Map
const map1: Map<string, number> = new Map();

map1.set("one", 1);
map1.set("two", 2);
map1.set("three", 3);

console.log(`map1-one: ${map1.get("one")}`);
console.log(`map1-two: ${map1.get("two")}`);
console.log(`map1-three: ${map1.get("three")}`);

// 存在しないキーを取得すると undefined になる
console.log(`map1-nothing: ${map1.get("nothing")}`);

// キーを削除する
map1.delete("two");
console.log(`map1-two after delete: ${map1.get("two")}`);

// for-of 文 キーと値を取得
for (const [key, value] of map1) {
    console.log(`for-of: map1 key: ${key}, value: ${value}`);
}

// clear で全てのキーと値を削除する
console.log(`map1 size before clear: ${map1.size}`);
map1.clear();
console.log(`map1 size after clear: ${map1.size}`);

// Set
const set1: Set<number> = new Set();

set1.add(1);
set1.add(2);
set1.add(3);

// for-of 文 値を取得
for (const value of set1) {
    console.log(`for-of: set1 value: ${value}`);
}









