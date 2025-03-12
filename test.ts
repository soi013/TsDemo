function myConsoleLog(value: string | number): void {
    if (typeof value == "number") {
        value = 'value=' + value + ', double value=' + (value + value)
    }

    console.log('MyLog: ' + value);
}