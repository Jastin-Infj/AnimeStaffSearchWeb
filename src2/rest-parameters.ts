export {};

const reducer = (accmulator: number,currentValue: number)  => {
    console.log({accmulator,currentValue});
    return accmulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]) : number => {
    return values.reduce(reducer);
};

console.log(sum(1,2,3,4));