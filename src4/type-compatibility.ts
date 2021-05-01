export {};

let fooCompa :any;
let barCompa :string = 'Typescript';

console.log(typeof fooCompa);

fooCompa = barCompa;
console.log(typeof fooCompa);

let fooInCompa :string;
let barInCompa :number = 1;
//! Error 2322
//fooInCompa = barInCompa;

let foostring : string;
let barstring : string = 'string';

fooInCompa = barstring;

let fooStringlite : 'fooString' = 'fooString';
foostring = fooStringlite;

let fooNumber :number;
let fooNumberlite : 1976 = 1976;
fooNumber = fooNumberlite;

{
    interface Animal {
        age : number,
    }
    
    class Person {
        constructor(public age :number){}
    }
    
    let me : Animal;
    me = new Person(43);        //Animalに関連性がなくても 代入が可能
}

{
    interface Animal {
        age : number,
        name: string
    }
    
    class Person {
        constructor(public age :number){}
    }
    
    let me : Animal;
    //! Error 2741
    //me = new Person(43);
}

{
    interface Animal {
        age : number,
        name: string
    }
    
    class Person {
        constructor(public age :number, public name:string){}
    }
    
    let me : Animal;
    //構造的 部分型
    me = new Person(43,'Ham');  //Animalに関連性がなくても 代入が可能
}


