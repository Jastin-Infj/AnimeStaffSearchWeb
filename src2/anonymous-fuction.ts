export {};

let bmi :(height: number, weight: number) => number = function(height:number, weight:number = 1.1):number{
    return weight / (height * height);
};


console.log(bmi(1.6,38));