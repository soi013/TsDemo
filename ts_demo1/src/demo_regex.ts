console.log("# demo_regex.ts");
console.log("\n ## 正規表現のデモ");

// Regex

const regex1 = /hello/;
const str1 = "hello world";

console.log(`regex1.test(str1): ${regex1.test(str1)}`);

const regex2 = /el+o/;
const regex3 = /rlld/;

// test で含んでいるかどうか
console.log(`regex2.test(str1): ${regex2.test(str1)}`);
console.log(`regex3.test(str1): ${regex3.test(str1)}`);

// match で一致したものをキャプチャする
const regex4 = /[a-z]{1,}[iu]zz/;
const strfizz = "This is a fizz not a buzz";
const strbuzz = "This is a buzz not a fizz";
const strfizzbuzz = "This is a fizzbuzz not a buzz and not a Mozilla";
const strMozilla = "This is a Mozilla not a Firefox";

console.log(`strfizz.match(regex4): ${strfizz.match(regex4)}`);
console.log(`strbuzz.match(regex4): ${strbuzz.match(regex4)}`);
console.log(`strfizzbuzz.match(regex4): ${strfizzbuzz.match(regex4)}`);
console.log(`strMozilla.match(regex4): ${strMozilla.match(regex4)}`);

// g のオプションで配列で返す
const regex4g = /[a-z]{1,}[iu]zz/g;

console.log(`strfizzbuzz.match(regex4g): ${strfizzbuzz.match(regex4g)?.[0]}, ${strfizzbuzz.match(regex4g)?.[1]}, ${strfizzbuzz.match(regex4g)?.[2]}`);
