export {};

class Parson{
    public     name :string;
    //private  age  :number;
    protected  age  :number;
    protected  nationnality: string;

    constructor(name:string,age:number,nationnality:string){
        this.name = name;
        this.age = age;
        this.nationnality = nationnality;
    }

    profile() :string{
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Parson{
    //! nationnalityがない場合 Error 2564
    constructor(name:string,age:number,nationnality:string){
        //! Error 17009
        //this.name
        //! super()の呼び出しがない場合 Error 2377
        super(name,age,nationnality);
    }

    profile(): string{
        //! private 属性(親クラス)の場合 Error 2341
        return `name: ${this.name}, age: ${this.age} nationnality: ${this.nationnality}`;
    }
}

let taro = new Android('Taro',30,'Japan');
console.log(taro.name);
console.log(taro.profile());

//! Error 2445
//console.log(taro.age);