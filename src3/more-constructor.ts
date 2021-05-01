export {};

class Person {
    constructor(public name:string,protected age:number,private fromcountry: string){}
}

const me = new Person('はむさん',43,"Japan");
console.log(me);