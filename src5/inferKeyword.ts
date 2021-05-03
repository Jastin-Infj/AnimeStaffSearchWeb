export {};

function add(a: number , b: number){
    return a + b;
}

type ReturnTypeFromAdd = ReturnType<typeof add>;

{
    //中身
    type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
}

// 関数の引数を inter(型推論) した 変数 型R を 返す
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
