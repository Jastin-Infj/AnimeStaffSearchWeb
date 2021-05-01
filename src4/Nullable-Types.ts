export {};

// tsconfig.json  strictNullChecks = falseに設定すると nullを設定可能にする
{
    let profile: {name:string , age:number} = {
        name: 'Ham',
        age : null
    }
    //どんな型でも null が設定出来てしまう
    //profile = null;
}

// age : に null を許容
let profile: {name:string , age:number | null} = {
    name: 'Ham',
    age : null
}