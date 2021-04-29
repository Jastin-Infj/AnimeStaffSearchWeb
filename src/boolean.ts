export {};

//! export がないと Error 2451 が発生する
let name: string = 'test';

let inif: boolean = true;
inif = false;
//inif = 1; error 型が違う
console.log({inif});