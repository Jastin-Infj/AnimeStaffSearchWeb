export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
//                                     除外したいタイプ
type FunctionType = Exclude<SomeTypes,string | number>;

type NonFuctionType = Exclude<SomeTypes,DebugType>;
// 関数を除外
type TypeExcludingFunction = Exclude<SomeTypes,Function>;

// 抽出する
type FunctionTypeByExtract   = Extract<SomeTypes,DebugType>;
type NonFuctionTypeByExtract = Extract<SomeTypes,string | number>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes,Function>;

// null undefined を除外
type NullableTypes = string | number | null | undefined;

type NonNullableTypes = NonNullable<NullableTypes>;