export {};

//最初の先頭は大文字にすること
type Moziretu = string;

const foo:string = 'Hello string';
//型推論は string型になる
const foo_mozi:Moziretu = 'Hello Mozi';


const example1:{
    name: string;
    age: number;
} = {
    name: 'Ham',
    age:4
};

// type で 型名を決める
type Human = {
    name: string;
    age: number;
};
const example2: Human = {
    name: 'Ham',
    age: 4
};

// 変数名 example1 の型名を 流用する
type Example_toTypeClone = typeof example1;

//type Example_toTypeClone = example1; //! Error 2749

const human :Example_toTypeClone = {
    name:'Hai',
    age:2
};

// 仕様的に可能な表現

// 特定の文字列だけをアクセス可能にする
type errorTypeCode = 'initError' | 'finalizeError';

//OK
let ErrorCode :errorTypeCode = 'finalizeError';
ErrorCode = 'initError';

//! Error 2322
//ErrorCode = 'setError';

// 特定の数値だけをアクセス可能にする
type HTTPResCode = 200 | 400 | 202;

let resCode :HTTPResCode = 200;
//! Error 2322
//resCode = 404;
