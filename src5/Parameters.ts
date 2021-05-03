export {};

const debugProfile = (name :string , age : number) => {
    console.log({name,age});
};

debugProfile('Ham',43);

//引数の型を手に入れる
type Profile = Parameters<typeof debugProfile>;

//配列化
const profile : Profile = ['Gloria',30];
debugProfile(...profile);

{
    type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
}

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type profile1 = MyParameters<typeof debugProfile>;

