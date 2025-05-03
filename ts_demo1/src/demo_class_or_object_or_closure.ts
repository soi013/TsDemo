console.log("# demo_class_or_object_or_closure.ts");
console.log("\n ## オブジェクト版スピーカー");

// オブジェクト版スピーカー
type SpeakerObj = {
    maker: string;
    volume: number;
}

function createSpeakerObj(maker: string, volume: number): SpeakerObj {
    if (maker === "") {
        throw new Error("maker is required");
    }

    return {
        maker,
        volume,
    };
}

function getSpeakerObjVolume(speakerObj: SpeakerObj): string {
    return `${speakerObj.maker} has ${speakerObj.volume} watt`;
}


const speakerObj = createSpeakerObj("Sony", 10);
console.log(`speakerObj: ${speakerObj.maker}, spec: ${getSpeakerObjVolume(speakerObj)}`);


console.log("\n ## クラス版スピーカー");
// クラス版スピーカー
class SpeakerClass {
    readonly maker: string;
    readonly volume: number;

    constructor(maker: string, volume: number) {
        if (maker === "") {
            throw new Error("maker is required");
        }

        this.maker = maker;
        this.volume = volume;
    }

    getSpec(): string {
        return `${this.maker} has ${this.volume} watt`;
    }
}

const speakerClass = new SpeakerClass("Kenwood", 30);
console.log(`speakerClass: ${speakerClass.maker}, spec: ${speakerClass.getSpec()}`);

//クロージャーで表現
function createSpeakerClosure(maker: string, volume: number) {
    return () => {
        return `${maker} has ${volume} watt`;
    }
}

const getSpeakerSpec = createSpeakerClosure("Bose", 100);
console.log(`getSpeakerSpec: ${getSpeakerSpec()}`);


