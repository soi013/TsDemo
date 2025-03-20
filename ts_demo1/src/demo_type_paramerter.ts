// ジェネリック型
type Pair<T> = {
    first: T;
    second: T;
}

// 型パラメーターを指定した具象型を作成
const pair1: Pair<number> = {
    first: 1,
    second: 2,
}

console.log(`pair1: ${pair1.first}, ${pair1.second}`);

const pair2: Pair<string> = {
    first: "Hello",
    second: "World",
}

console.log(`pair2: ${pair2.first}, ${pair2.second}`);

// ジェネリック型を含んだジェネリック型
type Quartet<T1, T2> = {
    first: Pair<T1>;
    second: Pair<T2>;
}

const quartet1: Quartet<number, string> = {
    first: pair1,
    second: pair2,
}

console.log(`quartet1: ${quartet1.first.first}, ${quartet1.first.second}, ${quartet1.second.first}, ${quartet1.second.second}`);

//型パラメーターに制約を加える
type HasInstrument = {
    instrument: string;
}

type PairMusician<T1 extends HasInstrument, T2 extends HasInstrument> = {
    first: T1;
    second: T2;
}

type StringedMusician = {
    instrument: string;
    stringCounts: number;
}

const guitalist: StringedMusician = {
    instrument: "Guitar",
    stringCounts: 6,
}

type BrassMusician = {
    instrument: string;
    mouthpieceSize: number;
}

const trumpetist: BrassMusician = {
    instrument: "Trumpet",
    mouthpieceSize: 1.5,
}

const pairMusician: PairMusician<StringedMusician, BrassMusician> = {
    first: guitalist,
    second: trumpetist,
}

console.log(`pairMusician: ${pairMusician.first.instrument}, ${pairMusician.second.instrument}`);


type Orchestra<T1 extends HasInstrument, T2 extends HasInstrument = StringedMusician> = {
    member: T1;
    solist: T2;
}

// const orchestra: Orchestra<StringedMusician> = {
//     member: guitalist,
//     solist: trumpetist, // complile error: プロパティ 'stringCounts' は型 'BrassMusician' にありませんが、型 'StringedMusician' では必須です。ts(2741)
// }

const orchestra: Orchestra<BrassMusician> = {
    member: trumpetist,
    solist: guitalist,
}

console.log(`orchestra: ${orchestra.member.instrument}, ${orchestra.solist.instrument}`);


