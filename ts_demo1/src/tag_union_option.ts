console.log("tag_union.ts")
console.log("タグ付きユニオン型でオプション型を表現する")

type Option<T> = Exist<T> | None;

type Exist<T> = { tag: 'exist', value: T }
type None = { tag: 'none' }

function showOption<T>(option: Option<T>) {
    switch (option.tag) {
        case 'exist':
            console.log(`This is exist. value: ${option.value}`)
            break
        case 'none':
            console.log('This is none')
            break
        default:
            const exhaustiveCheck: never = option
            throw new Error(`Unknown option: ${exhaustiveCheck}`)
    }
}

let option1: Option<string> = { tag: 'exist', value: 'hello' }
console.log({ option1 })
showOption(option1)

option1 = { tag: 'none' }
console.log("\n", { option1 })
showOption(option1)

let option2: Option<number | undefined | null> = { tag: 'exist', value: 10 }
console.log("\n", { option2 })
showOption(option2)

option2 = { tag: 'none' }
console.log("\n", { option2 })
showOption(option2)

option2 = { tag: 'exist', value: undefined }
console.log("\n", { option2 })
showOption(option2)

option2 = { tag: 'exist', value: null }
console.log("\n", { option2 })
showOption(option2)


