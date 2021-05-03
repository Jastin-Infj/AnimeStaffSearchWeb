export {};

// Exclude の仕組み

type MyExclude<T,U> = T extends U ? never : T;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type MyFunctionTypeByExtract = MyExclude<SomeTypes,string | number>;        //DebugType
{
    // T : SomeTypes U : string | number
    // U を取る
    type MyExclude<T> = T extends string | number ? never : T;
    // Distributibe conditon types
    {
        //SomeType を展開
        type MyExclude = string | number | DebugType extends string | number ? never : string | number | DebugType;

        //翻訳
        {
            // 生コードの実態
            type MyExclude = 
                | (string extends string | number ? never : string)
                | (number extends string | number ? never : number)
                | (DebugType extends string | number ? never : DebugType);

            // string    は string | number と 互換性はあるか？ true  => never
            // number    は string | number と 互換性はあるか？ true  => never
            // DebugType は string | number と 互換性はあるか？ false => DebugType
            {
                //つまりは 以下の通り
                type MyExclude = DebugType;  // DebugType =>    () => void;
            }
        }
    }
    // T : SomeTypes
}