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










