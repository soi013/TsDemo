// クラス
// Typeとの違いは
// 1. コンストラクターがある
// 2. メソッドがある
// 3. プロパティがある
// 4. 継承がある
// 5. 多態性がある
// 6. カプセル化がある

class UserC {
    name: string;
    private realAge: number; // プライベートプロパティ
    age: number;

    constructor(name: string, realAge: number) {
        this.name = name;
        this.realAge = realAge;
        this.age = realAge - 2;
    }

    isAdult() {
        return this.realAge >= 18;
    }
}

const user = new UserC("Casey", 19);

console.log(user);
console.log(`${user.name} is ${user.isAdult() ? "adult" : "minor"}`);

const UserCX = class {
    name: string;
    private realAge: number;
    age: number;

    constructor(name: string, realAge: number) {
        this.name = name;
        this.realAge = realAge;
        this.age = realAge - 2;
    }

    isAdult() {
        return this.realAge >= 18;
    }
}
