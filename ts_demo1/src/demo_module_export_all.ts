console.log("# demo_module_export_all.ts");
console.log("\n ## モジュールの使い方 export側 一括インポート用");

// 大量の変数があるモジュール
export const seriesTitle = "STAR WARS";
export const episode4Title = "A NEW HOPE";
export const episode5Title = "THE EMPIRE STRIKES BACK";
export const episode6Title = "RETURN OF THE JEDI";
export const episode1Title = "THE PHANTOM MENACE";
export const episode2Title = "ATTACK OF THE CLONES";
export const episode3Title = "REVENGE OF THE SITH";

export type Episode = {
    title: string;
    episode: number;
}

export const episode1: Episode = {
    title: episode1Title,
    episode: 1
}
