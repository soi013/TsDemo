// Date
const date1 = new Date();
console.log(`date1: ${date1}`);

const date2 = new Date(2023, 11, 25); // 月は0から始まる
console.log(`date2: ${date2}`);

const date3 = new Date("2023-12-25");
console.log(`date3: ${date3}`);

// 日付の取得
console.log(`date1.getFullYear(): ${date1.getFullYear()}`);
console.log(`date1.getMonth(): ${date1.getMonth()}`); // 月は0から始まる
console.log(`date1.getDate(): ${date1.getDate()}`);
console.log(`date1.getDay(): ${date1.getDay()}`); // 0:日曜日, 1:月曜日, ...

// 日付の設定
date1.setFullYear(1999);
date1.setMonth(9); // 12月
date1.setDate(9);
console.log(`date1 after set: ${date1}`);

// 日付の比較
console.log(`date2 > date3: ${date2 > date3}`);
console.log(`date2 < date3: ${date2 < date3}`);
console.log(`date2.getTime() === date3.getTime(): ${date2.getTime() === date3.getTime()}`);

console.log(`date1.toLocaleString(): ${date1.toLocaleString()}`);
console.log(`date1.toLocaleDateString(): ${date1.toLocaleDateString()}`);
console.log(`date1.toLocaleTimeString(): ${date1.toLocaleTimeString()}`);

console.log(`date1.toISOString(): ${date1.toISOString()}`);
console.log(`date1.getTime() [UNIX TIME]: ${date1.getTime()}`);



