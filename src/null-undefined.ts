export {};

//型推論 anyに設定される null固定は null型
let absence :null = null;
//! absence = 'hello';          //Error 2322
//! absence = undefined;        //Error 2322

//型推論 anyに設定される undefined固定は undefined型
let data : undefined = undefined;
//!data = null;                 //Error 2322
//!data = 100;                  //Error 2322