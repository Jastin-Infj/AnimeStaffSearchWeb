export {};

//シグネチャを用意
function double(value: number) : number;
function double(value: string) : string;

//any シグネチャで型制約可能
function double(value:any) : any{
    if(typeof value === 'string'){
        return value + value;
    }else{
        return value * 2;
    }
    //例外処理は不要
}

//! Error 2393
//function double(value:string) : string{
//    return value + value;
//}

console.log(double(100));
console.log(double('Go '));

//! Error 2769
//console.log(true);