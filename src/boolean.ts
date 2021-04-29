export {};

//! export がないと Error 2451 が発生する
let name: string = 'test';

let inif: boolean = true;
inif = false;
//! 型が違う
//inif = 1; 
console.log({inif});