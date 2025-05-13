// モジュール 'express' の宣言ファイルが見つかりませんでした。'd:/Documents/GitHub/TsDemo/ts_express_demo/node_modules/express/index.js' は暗黙的に 'any' 型になります。
import express from "express";

console.log("demo_express.ts");
console.log("## npmの例 express");

const app = express();

//express はパッケージに型情報がない
// パラメーター 'res' の型は暗黙的に 'any' になります。ts(7006)
app.get('/', (req, res) => {
    res.send('HELLO WORLD');
    console.log("received request", { hostname: req.hostname, url: req.url, method: req.method });
});

// ポート3000でサーバーを起動
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


