import { createInterface } from "readline";

console.log("# demo_module_node_import.ts");
console.log("\n ## モジュールの使い方 nodejs import");

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log(`Hello ${name}!`);
    rl.close();
});
