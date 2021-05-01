export {};

{
    // まとめたい

    //const echo = (arg: number) : number => {
    //    return arg;
    //}
    //
    //const echo = (arg :string) : string => {
    //    return arg;
    //}
}

//型引数
const echo = <T>(arg: T) : T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));
console.log('');

{
    class Mirror {
        constructor(public value: number){}
    
        echo() :number{
            return this.value;
        }
    }
    
    console.log(new Mirror(123).echo());

    console.log('');
}

{
    class Mirror<T> {
        constructor(public value: T){}
    
        echo() :T{
            return this.value;
        }
    }
    
    console.log(new Mirror<number>(123).echo());
    console.log(new Mirror<string>("Hello Wolrd").echo());
    console.log(new Mirror<boolean>(true).echo());

    console.log('');

}

{
    class Mirror<T,U> {
        constructor(public value: T,public valueA: U){}
    
        echo() :T{
            return this.value;
        }

        echo_B() :U{
            return this.valueA;
        }
    }
    
    console.log(new Mirror<number,boolean>(123,false).echo());                  //123
    console.log(new Mirror<string,string>("Hello Wolrd","test").echo_B());      //test
    console.log(new Mirror<boolean,number>(true,100).echo_B());                 //100
    
    console.log('');
}



{
    interface TestObject{
        name:string
        funcTest() : number;
    }

    class Mirror<T extends TestObject,U> {
        constructor(public obj: T,public valueA: U){}
    
        echo() :number{
            let num :number = this.obj.funcTest();
            console.log(this.obj);
            return num;
        }

        echo_B() :U{
            return this.valueA;
        }
    }
    
    let testobj :TestObject = {
        name:'testobj',
        funcTest(): number {
            return 200;
        }
    };

    console.log(new Mirror<TestObject,string>(testobj,"test").echo());      //test
    
}

