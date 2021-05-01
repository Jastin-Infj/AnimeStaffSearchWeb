export {};

class MyNumberCard {
    private  _owner        : string;
    private  _secretNumber : number;

    constructor(owner:string, secretNumber:number){
        this._owner        = owner;
        this._secretNumber = secretNumber;
    }

    // 読み込み専用関数
    get owner() {
        return this._owner;
    }

    // 書き込み専用関数 
    set secretNumber(secretNumber :number){
        this._secretNumber = secretNumber;
    }

    debugPrint(){
        return `selectNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('Ham',1234567890);
console.log(card.owner);

//! Error 2540
//card.owner = 'Hamさん';

card.secretNumber = 120;
//120
console.log(card.debugPrint());
//undefined を 返す
console.log(card.secretNumber);
//120
console.log(card.debugPrint());
