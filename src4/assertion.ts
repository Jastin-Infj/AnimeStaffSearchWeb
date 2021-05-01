export {};

{
    let name: any = 'Ham';
    let length: number = name.length;

    //やりたくない 制約したい
    //length = 'foo';
}

{
    let name: any = 'Ham';

    let length_A = name.length as number;
    //! Error 2322
    //length_A = 'foo';

    let length_B = (name as string).length;
    //! Error 2322
    //length_B = 'foo';

    // 非推奨 jsxの記述方法と似ているため
    let length_C = (<string>name).length;
    //! Error 2322
    //length_C = 'foo';
}
