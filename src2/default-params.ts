export {};

//OK
const nextYearSalary1:(currentSalary: number, rate?: number) => number = (
    currentSalary: number,
    rate: number = 1.1
) =>  {
    return currentSalary * rate;
};

//教材
const nextYearSalary2 = (currentSalary: number,rate: number = 1.1)  => {
    return currentSalary * rate;
};

// 自分でrate?を定義  rate? の型 rate?: number | undefined)
const nextYearSalary_A:(currentSalaray:number, rate?:number) => number = (
    currentSalary: number,
    rate: number = 1.1
) =>  {
    return currentSalary * rate;
};

// 型推論　　　　     rate? の型: number
const nextYearSalary_B = (currentSalary: number,rate: number = 1.1) => {
    return currentSalary * rate;
};

console.log(nextYearSalary1(1000));
console.log(nextYearSalary2(1000));

console.log(nextYearSalary_A(1000));
console.log(nextYearSalary_B(1000));