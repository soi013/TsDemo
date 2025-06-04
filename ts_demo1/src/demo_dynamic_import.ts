console.log("# demo_dynamic_import.ts");

// dynamic import
console.log("\n ## dynamic import");

// 通常のimport()とは異なり、dynamic importはモジュールを動的に読み込むので、読み込み前に使用するとエラーする
// ERROR 名前 'readFile' が見つかりません。ts(2304)
// readFile("demo_source/fs_target_text.txt", "utf-8")

import("fs/promises")
    .then(({ readFile }) =>
        readFile("demo_source/fs_target_text.txt", "utf-8")
    )
    .then((text) =>
        text.slice(0, 10)
    )
    .then((headText) => {
        console.log(headText);
    });

