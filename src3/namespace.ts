export {};

namespace Japanese {
    //! Error exportがない場合     2339
    export namespace Tokyo{
        //! Error exportがない場合 2339
        export class Person {
            constructor(public name : string){}
        }
    }

    export namespace Osaka{
        export class Person {
            constructor(public name : string){}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName:  string  ,
            public middleName: string  ,
            public lastName :  string
        ){}
    }
}

const meTokyo = new Japanese.Tokyo.Person('Ham');
console.log(meTokyo);

const meOsaka = new Japanese.Osaka.Person('Hamさん');
console.log(meOsaka);

const maikle = new English.Person('Michael','Joseph','Jackson');
console.log(maikle);