console.log("# demo_any_unknown.ts");
console.log("\n ## any型とunknown型のデモ");

// 最終兵器any型。使わないに越したことはない
console.log("\n ## any型のデモ");
function doSomething(arg: any) {
    console.log(arg);

    // 存在しない関数もプロパティアクセスもなんでもできる。当然実行時にエラーする
    // TypeError: arg.notExistingMethod is not a function
    // arg.notExistingMethod();

    // TypeError: Cannot create property 'notExistingProperty1' on string 'Hello' 
    // arg.notExistingProperty1 = arg.notExistingProperty2 * 99;

}

//どんな引数も渡せる
doSomething("Hello");
doSomething(123);
doSomething({ hoge: "HOGE", fuga: 123 });
doSomething({});
doSomething(() => 999);


// any型にはなんでも入れられる
let anythingInput: any = "Hello";
console.log({ anythingInput });
anythingInput = 123;
console.log({ anythingInput });
anythingInput = true;
console.log({ anythingInput });
anythingInput = { jojo: "ジョセフ=ジョスター", statge: 2 };
console.log({ anythingInput });

console.log("\n ## unknown型のデモ");

function doAlmostNothing(arg: unknown) {
    console.log(arg);

    // anyと異なり、コンパイルエラーが起きる
    // 'arg''は 'unknown' 型です。ts(18046)
    // arg.notExistingMethod();

    // anyと異なり、コンパイルエラーが起きる
    // 'arg''は 'unknown' 型です。ts(18046) 
    // arg.notExistingProperty1 = arg.notExistingProperty2 * 99;

    // 型で絞り込めば、プロパティアクセスなどができる
    if (typeof arg === "string") {
        console.log(`arg is string. Upper arg = [${arg.toUpperCase()}]`);
    }

    if (typeof arg === "object" && arg !== null && "hoge" in arg) {
        console.log(`arg is object. arg.hoge = [${arg.hoge}]`);
    }
}

//どんな引数も渡せる
doAlmostNothing("Hello");
doAlmostNothing(123);
doAlmostNothing({ hoge: "HOGE", fuga: 123 });

// unknown型にもなんでも入れられる
let unknownInput: unknown = "Hello";
console.log({ unknownInput });
unknownInput = 123;
console.log({ unknownInput });
unknownInput = true;
console.log({ unknownInput });
anythingInput = { jojo: "ジョセフ=ジョスター", statge: 2 };
console.log({ anythingInput });






