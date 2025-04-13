console.log("demo_union");

type Speaker = {
    name: string;
    power: number;
    size: number;
}

type Earphone = {
    name: string;
    power: number;
    earphoneType: string;
}

type Device = Speaker | Earphone;

let device: Device;

device = {
    name: "speaker",
    power: 100,
    size: 10,
}

console.log(device);
console.log(typeof device);

const GetPower = (dev: Device): number => {
    return dev.power;
}

console.log(GetPower(device));



