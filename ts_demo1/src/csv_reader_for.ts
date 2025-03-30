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
    for (const user of users) {
        console.log(`id: ${user.id}, name: ${user.name}, age: ${user.age}, ${user.premiumUser ? "PREMIUM" : "FREE"}`);
    }
}

function readCsv(csvText: string): User[] {
    const lines = csvText.split("\n");
    const users: User[] = [];
    for (const line of lines) {
        if (line === "") {
            continue;
        }

        const [id, name, age, premiumUser] = line.split(",");
        const idInt = Number(id);
        if (isNaN(idInt)) {
            continue;
        }

        const ageInt = Number(age);
        if (isNaN(ageInt)) {
            continue;
        }

        users.push({ id: idInt, name, age: ageInt, premiumUser: premiumUser === "1" });
    }
    return users;
}

const users = readCsv(csvText);
printUsers(users);
