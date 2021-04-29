export {};

//typeでも同じ記述が可能 セミコロンが必須
type ObjectType = {
    name:string,
    age:number
};

//セミコロンがいらない class or object型のみ適用が可能
interface ObjectInterface {
    name:string,
    age:number
}

//OK
let object: ObjectInterface = {
    name : 'Ham-san',
    age:43
};

//! Error 代入が出来ないから
//interface ObjectInterface2 = typeof object;

//
interface ObjectInterface2 {
    name:string,
    age:number
}

//後でパラメーターを拡張
interface ObjectInterface2{
    value:string
}

let object1: ObjectInterface2 = {
    name : 'Human',
    age:45,
    value:'test',
    keycode:'0001'
};

//後でパラメーターを拡張
interface ObjectInterface2{
    keycode:string
}
