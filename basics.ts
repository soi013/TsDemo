// TypeScriptの基本型の例

// プリミティブ型
let message: string = "こんにちは、TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// 配列
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["TypeScript", "JavaScript"];

// オブジェクト型
interface User {
    name: string;
    age: number;
    email?: string; // オプショナルプロパティ
}

// オブジェクトの作成
const user: User = {
    name: "田中太郎",
    age: 30
};

// 関数の型定義
function greet(name: string): string {
    return `こんにちは、${name}さん！`;
}

// ジェネリック関数の例
function getFirst<T>(array: T[]): T | undefined {
    return array[0];
}

// 使用例
console.log(message);
console.log(greet(user.name));
console.log(getFirst(numbers));
console.log(getFirst(strings)); 