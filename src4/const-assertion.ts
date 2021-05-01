export {};

let name = 'Ham';
name = 'takumi';

//文字リテラルになる
let   nickname_A = 'Ham' as const;
const nickname_B = 'Ham' as const;      //意味は同じ
//! Error 2322
//nickname = 'Hamtaro';

{
    //ネスト形式に全て可能
    let profile = {
        name: 'Tokyo',                      //readonlyが付与
        height: 178                         //readonlyが付与
    } as const;

    // profile は 定数として扱われていない
    profile = {
        name: 'Tokyo',                      //readonlyが付与
        height: 178                         //readonlyが付与
    };      //as const を記述して良い 理由: 定義ではなく、変更をしているから
}

{
    //ネスト形式に全て可能
    const profile = {
        name: 'Atushi',                     //readonlyが付与
        height: 178                         //readonlyが付与
    } as const;

    //! Error 2588 profile自体も 定数として扱われている
    //profile = {
    //    name: 'Atushi',                     //readonlyが付与
    //    height: 178                         //readonlyが付与
    //};
}

//! Error 2540
//profile.name = 'Ham';
//profile.height = 160;