export {};

let array = ['Japan',1];
array = [43,'japan'];           //エラーにならない

//制約を厳しくしたい
let array2: [string,number] = ['Japan',1];
//! array2 = [43,'japan'];     //エラーになる Error 2322

let array3: [string,number][] = [
    ["test",20],
    ["Japan",40]
];
array3.push(["test",30]);      //OK
//! array3.push('test');       //Error 2345
//! array3.push([30,"test"]);  //Error 2322
console.log(array3);