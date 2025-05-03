console.log("# csv_reader_map.ts");
console.log("\n ## mapでcsvファイルを読み込む");

type User2 = {
    id: number;
    name: string;
    age: number;
    premiumUser: boolean;
}

const csvText2: string = `id,name,age,premiumUser
1,John,30,1
2,Jane,25,0
3,Jim,35,1
`;

function printUsers2(users: readonly User2[]): void {
    users.forEach(user => {
        console.log(`id: ${user.id}, name: ${user.name}, age: ${user.age}, ${user.premiumUser ? "PREMIUM" : "FREE"}`);
    });
}

function readCsv2(csvText: string): User2[] {
    return csvText.split("\n")
        .filter(line => line !== "")
        .map(line => line.split(","))
        .map(([id, name, age, premiumUser]) => ({
            id: Number(id),
            name,
            age: Number(age),
            premiumUser: premiumUser === "1",
        }))
        .filter(user => !isNaN(user.id) && !isNaN(user.age));
}

const users2 = readCsv2(csvText2);
printUsers2(users2);
