export {};

let numbers: number[] = [1,2,3];
// 他の方法
let numbers2: Array<number> = [1,2,3];
let strings2:  Array<string> = ["Tokyo","Osaka","Kyoto"];

let strings: string[] = ['Typescript','Javascipt','CSS'];

// 2次元配列

let pos: number[][] = [
    [50,100],
    [100,200]
];

// バラバラ(共用型)
let pos2: (string | number | boolean)[] = [1,false,'Japan'];

let pos2_1: (string | number)[][] = [
    [1,'eigko'],
    [2,'Japan']
];
pos2_1.push([3,'English']);     //OK
pos2_1.push([1,2]);             //OK
pos2_1.push(['test',1]);        //OK
//! pos2_1.push([false,1]);     //NG Error 2322
