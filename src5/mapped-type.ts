export {};

type Profile = {
    name:string;
    age:number;
};

type PartialProfile = Partial<Profile>;

// keyof : Object keyName("name" , "age")を 文字リテラルで返すことが可能
type PropertyTypes = keyof Profile;

// Partial の仕組み
//例: Partial<Profile>

//  Profileオブジェクト と keyof["name","age"]

/* T = Profile P = keyof ["name","age"] に入る
type Partial<T> = {
    [P in keyof T]?: T[P];
};

右側:中身の参照は以下の通り
1. Profile(T)["name"](P); 中身 = string;
2. Profile(T)["age"](P);  中身 = number;

その対象物に対して optionalを付与
["name"]? += string;
["age"]?  += number;

*/

//自分で定義も可能
type Optional<T> = {[P in keyof T]? : T[P] | null};

//null が許容される

//その対象物に対して optionalを付与
//["name"]? += string | null;
//["age"]?  += number | null;
type OptionalProfile = Optional<Profile>;