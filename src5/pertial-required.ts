export {};

type Profile = {
    name:string;
    age?:number;
    zipcode:number;
};

// optionalType が 全てつく
type PartialType  = Partial<Profile>;

// 全部 必須にしたい場合
type RequiredType = Required<Profile>;