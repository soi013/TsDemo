console.log("# demo_class.ts");
console.log("\n ## クラスのデモ");

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

// const userAb = new UserBase(); //抽象クラスのインスタンスは作成できません。ts(2511)
const userEx = new UserEx("Yoko");
console.log(userEx);


// 組み込みオブジェクトを継承したクラスも作れる
class RepeatArray<T> extends Array<T> {
    count: number;

    constructor(value: T, count: number) {
        // valueをtimes回繰り返して配列を作る
        const array = new Array<T>(count);
        for (let i = 0; i < count; i++) {
            array[i] = value;
        }
        super(...array);

        this.count = count;
    }

    override push(value: T): number {
        // 配列の長さがcountを超えたら、配列の最初の要素を削除
        if (this.length >= this.count) {
            this.shift();
        }

        super.push(value);
        return this.length;
    }
}

const repeatArray = new RepeatArray<number>(3, 5);
console.log(repeatArray);

repeatArray.push(4);
repeatArray.push(5);
repeatArray.push(6);
console.log(`push 4, 5, 6: ${repeatArray}`);

repeatArray.pop();
console.log(`pop once    : ${repeatArray}`);




// thisで自身にアクセス

class UserC2 {
    name: string;
    age: number;
    private realAge: number; // プライベートプロパティ

    constructor(name: string, realAge: number) {
        this.name = name;
        this.realAge = realAge;
        this.age = realAge - 2;
    }

    public filterOlder(users: UserC2[]) {
        // thisは自身のインスタンス、userは引数。どちらのプライベートプロパティも参照できる
        return users.filter(user => user.realAge > this.realAge); //アロー関数のthisは外側のthisを参照する
        // return users.filter(function(u){return u.realAge > this.realAge;}); // アロー関数ではできるが、普通の関数式はthisが参照できない
    }
}

const userC2Yoko = new UserC2("Yoko", 19,);
const userC2Nobuyuki = new UserC2("Nobuyuki", 20,);
const userC2Casey = new UserC2("Casey", 15,);
const userC2Tamegoro = new UserC2("Tamegoro", 50,);

console.log(`older than Yoko: ${userC2Yoko.filterOlder([userC2Yoko, userC2Nobuyuki, userC2Casey, userC2Tamegoro])}`);

