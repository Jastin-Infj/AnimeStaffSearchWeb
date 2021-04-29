export {};

function returnNothing(): void {
    console.log("don't return void function");
};

//意図的に undefinedを返す
function returnNothing2(): undefined{
    console.log("don't return void function");
    return undefined;
}

console.log(returnNothing());   //undefined 返す
console.log(returnNothing2());  //undefined 返す