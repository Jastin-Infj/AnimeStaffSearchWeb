export {};

{
    let profile: { name?:string} = {};
    profile.name = 'Ham';
    //! Error 2339
    //profile.age = 43;
}

{
    interface Profile{
        underTwenty: boolean;
        name:string,
        [index:string] : string | number | boolean
    }

    let profile: Profile = {name: 'Ham',  underTwenty: false};
    profile.name = 'Ham';
    profile.age = 43;
    profile.nationality = 'Japan';
}
