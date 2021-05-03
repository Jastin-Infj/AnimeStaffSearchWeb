export {};

type DetailProfile = {
    name :string;
    height: number;
    weight: number;
};

// name height のみ が適用されている //! リテラル問題ありの場合 Error 2344

// 欲しいものだけを   ピックアップして オブジェクト化
type SimpleProfile = Pick<DetailProfile,'name' | 'height'>;

// いらないものだけを ピックアップして オブジェクト化
type SmallProfile = Omit<DetailProfile,'height'>;

{
    //ライブラリのやつ
    type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
}

// プロパティとして設定可能なのは string | number | symbol　keyof anyの場合 any
type MyOmit = Pick<
    DetailProfile,
    Exclude<'name' | 'height' | 'weight', 'height'>
>;
type MtSmallProfile = MyOmit;

{
    // Pickを利用している
    type MyOmit = Pick<DetailProfile,'name' | 'weight'>;
}
