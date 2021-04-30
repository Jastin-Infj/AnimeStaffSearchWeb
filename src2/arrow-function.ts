export {};

let bmi: (height: number, weight: number) => number = (height:number, weight:number): number => {
    return weight / (height * height);
};

// 1行で行う場合
let bmi2: (height: number, weight: number) => number = (
    height:number,
    weight:number
): number => weight / (height * height);

console.log(bmi(1.6,38));
console.log(bmi2(1.6,38));