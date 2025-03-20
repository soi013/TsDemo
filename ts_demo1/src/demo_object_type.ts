//これはオブジェクトリテラル
const person1 = { name: "Taro", age: 30 };

console.log(`person1 is ${person1.name} ${person1.age}`);

//これはオブジェクト型の宣言
const person2: { name: string, age: number }
    = { name: "Jiro", age: 20 };

console.log(`person2 is ${person2.name} ${person2.age}`);


// 文字列プロパティのオブジェクト型
const person3: { "なまえ": string, age: number }
    = { "なまえ": "Sabro", age: 10 };

console.log(`person3 is ${person3["なまえ"]} ${person3.age}`);

let personObj: {
    name: string;
    age: number;
};

personObj = { name: "Shiro", age: 5 };
// personObj = { name: "Taro", age: true }; //compile error 型 'boolean' を型 'number' に割り当てることはできません。ts(2322)
// personObj = { name: "Taro", age: 20, gender: "male" }; //compile error オブジェクト リテラルは既知のプロパティのみ指定できます。'gender' は型 '{ name: string; age: number; }' に存在しません。ts(2353)
// personObj = { name: "Taro" }; //compile error プロパティ 'age' は型 '{ name: string; }' にありませんが、型 '{ name: string; age: number; }' では必須です。

console.log(`personObj is ${personObj.name} ${personObj.age}`);

// type文で型を宣言
type Person = {
    name: string;
    age: number;
};

const person4: Person = { name: "Goro", age: 1 };

console.log(`person4 is ${person4.name} ${person4.age}`);

// typeで別の型名を定義
type Patient = Person;
type Age = number;

const age1: Age = 99;

const patient1: Patient = { name: "Rokuro", age: age1 };
console.log(`patient1 is ${patient1.name} ${patient1.age}`);
console.log(`age1 is ${age1}`);

// interfaceで型を宣言
interface IPerson {
    name: string;
    age: number;
}

const person5: IPerson = { name: "Shichiro", age: 111 };
console.log(`person5 is ${person5.name} ${person5.age}`);

// interfaceで元の型に新しいプロパティを追加
interface IPatient extends IPerson {
    id: number;
}

const patient2: IPatient = { name: "Hachiro", age: 424533, id: 123 };
console.log(`patient2 is ${patient2.name} ${patient2.age} ${patient2.id}`);


//インデックスシグネチャで、型だけ決まったプロパティを後から追加できる
type PeopleAges = {
    [key: string]: number;
}

const peopleAges: PeopleAges = {
    "KuroA": 1,
    "KuroB": 20,
    "KuroC": 300,
}

console.log(`peopleAges sum is ${peopleAges["KuroA"] + peopleAges["KuroB"] + peopleAges["KuroC"]}`);


//オプションプロパティ
type PersonP = {
    name: string;
    age: number;
    phoneNumber?: string;
}

const personP1: PersonP = { name: "Jyuro", age: 10, phoneNumber: "090-1234-5678" };
const personP2: PersonP = { name: "Jyuichiro", age: 11, };

console.log(`personP1 is ${personP1.name} ${personP1.age} ${personP1.phoneNumber}`);
console.log(`personP2 is ${personP2.name} ${personP2.age} ${personP2.phoneNumber}`);


//読み取り専用プロパティ
type PersonR = {
    readonly name: string;
    readonly age: number;
}

const personR1: PersonR = { name: "Jyujiro", age: 12 };
// personR1.name = "Jyujiro2"; //compile error 読み取り専用プロパティであるため、'name' に代入することはできません。ts(2540) 
console.log(`personR1 is ${personR1.name} ${personR1.age}`);

//typeofでオブジェクトから型を取り出し
type PersonType = typeof personObj;
const personType1: PersonType = { name: "Jyuzo", age: 13 };

console.log(`personType1 is ${personType1.name} ${personType1.age}`);

//値が限定された文字列の配列
// as const付きの場合の型→ `readonly ["Rose", "Tulip", "Daisy"]`
// as const無しの場合の型→ `string[]
const flowers = ["Rose", "Tulip", "Daisy"] as const;

console.log(flowers);

//配列の中の値だけに限定された文字列型

let flower1: typeof flowers[1];

// 
// flower1 = "Rose"; //compile error 型 '"Rose"' を型 '"Tulip"' に割り当てることはできません。
flower1 = "Tulip";
console.log(`flower1 is ${flower1}`);

type Flower = typeof flowers[0];
// const flower2: Flower = "Daisy"; //compile error 型 '"Daisy"' を型 '"Rose"' に割り当てることはできません。
const flower2: Flower = "Rose";
console.log(`flower2 is ${flower2}`);











