export {};

class VisaCard {
    constructor(public readonly _owner:string){}    
    // constructor(readonly _owner:string){} OK ※readonlyを外したい場合 publicがないと 9行目でエラー
}

let myVisaCard = new VisaCard('Ham');
console.log(myVisaCard._owner);
//! Error 2540
//myVisaCard._owner = 'takumi';