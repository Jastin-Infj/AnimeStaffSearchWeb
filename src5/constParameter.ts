export {};

class Person{
    name :string;
    age: number;

    constructor(name: string,age:number){
        this.name = name;
        this.age  = age;
    }
}

const taro = new Person('Taro',30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile : Profile = ['ham',32];
const ham = new Person(...profile);

{
    // new (...args: any) => any クラス属性
    type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
}

