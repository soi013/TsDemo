// const message1: string = "123";
const user1 = {name: "Taro", age: 20};

console.log(`user1 is ${user1.name} ${user1.age}`);

//compile error
// user = {name: "Hanako", age: 18};

user1.name = "Hanako";
user1.age = 88;
console.log(`user1-2 is ${user1.name} ${user1.age}`);

const user2 = {...user1};
console.log(`user2 is ${user2.name} ${user2.age}`);

const user3 = {...user1, name: "Kojiro"};
console.log(`user3 is ${user3.name} ${user3.age}`);

const doctor1 = {name: "BlackJack", age: 22, license: "no-license"};
console.log(`doctor1 is ${doctor1.name} ${doctor1.age} ${doctor1.license}`);

const user4 = {...doctor1, ...user2};
console.log(`user4 is ${user4.name} ${user4.age} ${user4.license}`);

