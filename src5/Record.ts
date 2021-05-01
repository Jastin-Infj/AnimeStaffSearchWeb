export {};

type Prefectures = 'Tokyo' | 'Osaka' | 'Chiba';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases :number;        //感染者数
};

//解決したい
{
    const covid19Japan = {
        Tokyo: {kanji_name:'東京', confirmed_cases: 1960},
        Chiba: {kanji_name:'千葉', confirmed_cases: 249},
        Osaka: {kanji_name:'大阪', confirmed_cases: 2},
        Shiga: {kanji_name:'滋賀', confirmed_cases: true},      //間違えた
    }
}
{
    //同じコードをしている
    const covid19Japan:{
        Tokyo:Covid19InfectionInfo,
        Chiba:Covid19InfectionInfo,
        Osaka:Covid19InfectionInfo,
        Shiga:Covid19InfectionInfo
    } = {
        Tokyo: {kanji_name:'東京', confirmed_cases: 1960},
        Chiba: {kanji_name:'千葉', confirmed_cases: 249},
        Osaka: {kanji_name:'大阪', confirmed_cases: 2},
        Shiga: {kanji_name:'滋賀', confirmed_cases: true},      //間違えた
    }
}

{
    //                        keyリテラル   型名
    const covid19Japan:Record<Prefectures,Covid19InfectionInfo> = {
        Tokyo: {kanji_name:'東京', confirmed_cases: 1960},
        Chiba: {kanji_name:'千葉', confirmed_cases: 249},
        Osaka: {kanji_name:'大阪', confirmed_cases: 2},
        //! Error 2322 'Shiga' and boolean
        Shiga: {kanji_name:'滋賀', confirmed_cases: true},      //間違えた
    }
}
