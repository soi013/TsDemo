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
    age: number;
    private realAge: number; // プライベートプロパティ

    #salary: number; // プライベートプロパティ #はJSの機能。ES2015で追加された

    constructor(name: string, realAge: number, salary: number) {
        this.name = name;
        this.realAge = realAge;
        this.age = realAge - 2;
        this.#salary = salary;
    }

    isAdult() {
        return this.realAge >= 18;
    }

    canBuyAlcohol() {
        return this.isAdult() && this.#salary >= 300;
    }
}

const user: UserC = new UserC("Casey", 19, 10000);

console.log(user);
console.log(`${user.name} is ${user.isAdult() ? "adult" : "minor"}. ${user.canBuyAlcohol() ? "can" : "can't"} buy alcohol`);
console.log(UserC);


// クラス式 あんまり使われない
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

const userX = new UserCX("Yoko", 19);
console.log(userX);
console.log(`${userX.name} is ${userX.isAdult() ? "adult" : "minor"}`);
console.log(UserC);

// let userY:UserCX; // クラス式だと型は作られないので、型注釈に使えない

// クラスの継承
class AdminUser extends UserC {
    constructor(name: string, realAge: number, salary: number) {
        super(name, realAge, salary);
    }
}

const adminUser = new AdminUser("Nobuyuki", 20, 10000);
console.log(adminUser);

// 抽象クラス
abstract class UserBase {
    name: string = "unknown";
}

class UserEx extends UserBase {
    constructor(name: string) {
        super();
        this.name = name;
    }
}

const userEx = new UserEx("Yoko");
