export {};

type Profile = {
    name:string;
    age:number;
};

const me: Profile = {
    name: 'Ham',
    age:43
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name : 'Shigeru',
    age: 40
};

//! readOnlyが付与 Error 2540
//friend.age++;

type Yomitori<T> = {readonly [P in keyof T]: T[P]};
type YomitoriSenyoProfile = Yomitori<Profile>;