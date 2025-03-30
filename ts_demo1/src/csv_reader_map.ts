type User = {
    id: number;
    name: string;
    age: number;
    premiumUser: boolean;
}

const csvText: string = `id,name,age,premiumUser
1,John,30,1
2,Jane,25,0
3,Jim,35,1
`;

function printUsers(users: readonly User[]): void {
    users.forEach(user => {
        console.log(`id: ${user.id}, name: ${user.name}, age: ${user.age}, ${user.premiumUser ? "PREMIUM" : "FREE"}`);
    });
}

function readCsv(csvText: string): User[] {
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

const users = readCsv(csvText);
printUsers(users);
