export {};

let profile1:object = {name:'Ham'};
//制約が甘い 自由にパラメーターを追加可能
profile1 = {year:1975};

let profile2: {} = {name:'Ham'};
//制約が甘い 自由にパラメーターを追加可能
profile2 = {year:1975};

// パラメーターの指定が可能
let profile3: {
    name: string;
} = {name: 'Ham'};
//! 宣言されていないパラメーターは Error 2322 を返せる
// profile3 = {year:1975};