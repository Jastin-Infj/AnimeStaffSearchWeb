export {};


let array = ['Japan',1];
array = [43,'japan'];           //エラーにならない

//制約を厳しくしたい
let array2: [string,number] = ['Japan',1];
//! array2 = [43,'japan'];     //エラーになる Error 2322

