export {};

import axios from 'axios';

let url:string = 'https://udemy-utils.herokuapp.com/api/v1/events?token=token123';

axios.get(url).then((responce) => {
    //型推論 出来ていない状態
    //let data: any = responce.data;

    // これでも安全ではない →　interfaceを使う
    // let data : object[] = responce.data;

    interface Article{
        id:number,
        title: string,
        body: string
    };

    let data: Article[] = responce.data;
    //正しい
    data = [
        {
            id:1,
            title: 'test',
            body:"test"
        }
    ];
    //! Error 2741
    //data = [
    //    {
    //        id:1,
    //        body:"test",
    //    }
    //];
    console.log(data);
});
