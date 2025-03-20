type Bike = {
    model: string;
}

const roadbike1: Bike = {
    model: "FibraEVO",
}

console.log(`roadbike1: ${roadbike1.model}`);

// MountainBikeはBikeのサブタイプ
type MountainBike = {
    model: string;
    forkLengh: number;
}

const mountainBike: MountainBike = {
    model: "MojoHd",
    forkLengh: 170,
}

console.log(`mountainBike: ${mountainBike.model}, ${mountainBike.forkLengh}`);

// MountainBikeはBikeのプリパティを包含しているから、サブタイプ
const bikeButMtb: Bike = mountainBike;
// console.log(`bikeButMtb: ${bikeButMtb.model}, ${bikeButMtb.forkLengh}`); //comile error プロパティ 'forkLengh' は型 'Bike' に存在しません。ts(2339)
console.log(`bikeButMtb: ${bikeButMtb.model}`);

//サブタイプのプロパティを持った型もサブタイプ
type BikeShop = {
    shopName: string;
    bikes: Bike[];
}

const bikeShop: BikeShop = {
    shopName: "YsRoad",
    bikes: [roadbike1, mountainBike],
}

console.log(`bikeShop: ${bikeShop.shopName}, ${bikeShop.bikes[0].model}, ${bikeShop.bikes[1].model}`);

type MtbShop = {
    shopName: string;
    bikes: MountainBike[];
}

const mtbShop: MtbShop = {
    shopName: "Override",
    bikes: [mountainBike],
}

console.log(`mtbShop: ${mtbShop.shopName}, ${mtbShop.bikes[0].model}`);

const bikeShopButMtb: BikeShop = mtbShop;
console.log(`bikeShopButMtb: ${bikeShopButMtb.shopName}, ${bikeShopButMtb.bikes[0].model}`);

// const ebike1: Bike = {
//     model: "Panasonic E-Bike",
// battery: 100, //compile error オブジェクト リテラルは既知のプロパティのみ指定できます。'battery' は型 'Bike' に存在しません。ts(2353)
// }

type EBike = {
    model: string;
    battery: number;
}

const ebike1: EBike = {
    model: "Panasonic E-Bike",
    battery: 100,
}

const bikeButEBike: Bike = ebike1;
console.log(`bikeButEBike: ${bikeButEBike.model}`);
console.log(`ebike1: ${ebike1.model}, ${ebike1.battery}`);

