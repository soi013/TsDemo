console.log("# demo_user-defined-type-gurad.ts");
console.log("\n ## ユーザー定義型ガードのデモ");

type Gum = {
    type: "gum";
    name: string;
    style: "tablet" | "stick";
}

console.log("\n ## as を使って危険な型アサーションをする");

function LogIfGum(maybeGum: unknown) {
    console.log({ maybeGum });
    console.log(`THE ${(maybeGum as Gum).style.toUpperCase()} GUM!`);
}

const xylitolGum: Gum = {
    type: "gum",
    name: "Xylitol Gum",
    style: "stick",
}

LogIfGum(xylitolGum);

// 実行時にエラーが出る
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
// LogIfGum("Candy");

console.log("\n ## ユーザー定義型ガードを使う");

// ユーザー定義型ガード関数 `引数名 is 型` の返り値の関数
function isGum(gumOrSomething: unknown): gumOrSomething is Gum {
    return gumOrSomething != null &&
        typeof gumOrSomething === "object" &&
        ("type" in gumOrSomething && gumOrSomething.type === "gum") &&
        ("style" in gumOrSomething && typeof gumOrSomething.style === "string");
}

function LogIfGumSafe(maybeGum: unknown) {
    //ここでは unknown 型のまま
    // maybeGum: unknown
    console.log({ maybeGum });
    if (isGum(maybeGum)) {
        // ここでは Gum 型になる
        // maybeGum: Gum
        console.log(`THE ${maybeGum.style.toUpperCase()} GUM!`);
    }
    else {
        // ここでは unknown 型のまま
        // maybeGum: unknown
        console.log(`${maybeGum} is not gum`);
    }
}

LogIfGumSafe(xylitolGum);
LogIfGumSafe("Candy");

console.log("\n ## assert is を使う");

function assertGum(gumOrSomething: unknown): asserts gumOrSomething is Gum {
    if (gumOrSomething == null) {
        throw new Error("input is null. not gum");
    }

    if (typeof gumOrSomething !== "object") {
        throw new Error("input is not an object. not gum");
    }

    if (!("type" in gumOrSomething && gumOrSomething.type === "gum") ||
        !("style" in gumOrSomething && typeof gumOrSomething.style === "string")
    ) {
        throw new Error("input is some object but not gum");
    }
}

function LogIfGumSafe2(maybeGum: unknown) {
    console.log({ maybeGum });
    try {
        // ここでは unknown 型のまま
        // maybeGum: unknown
        assertGum(maybeGum);

        // ここでは Gum 型になる
        // maybeGum: Gum
        console.log(`THE ${maybeGum.style.toUpperCase()} GUM!`);
    }
    catch (e) {
        console.log("some error occurred =", `${e}`.slice(0, 40));
    }
}

LogIfGumSafe2(xylitolGum);

LogIfGumSafe2("Candy"); //Error: input is not an object. not gum
LogIfGumSafe2(null); // Error: input is null. not gum
LogIfGumSafe2({ style: "tablet" }); // Error: input is some object but not gum






























