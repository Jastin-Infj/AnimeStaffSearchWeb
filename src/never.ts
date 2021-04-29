export {};

//例外処理がある関数 　　　　　　 呼び出し元に戻って来ない
function error(message:string): never{
    //戻り値はどうするか？
    throw new Error(message);
}

try{
    let result = error('test');
}catch(error){
    console.log({error});   
}



try{
    let foo :void  = undefined;        //undefined null は代入出来る        値の概念あり
    //! let bar :never = undefined;    //undefined  null は代入出来ない     値という概念が存在していない Error 2322
    
    foo = error('test1');              //never型の代入も可能
    let bar :never = error('test2');   //never型の代入は可能
}catch(error){
    console.log({error});
}