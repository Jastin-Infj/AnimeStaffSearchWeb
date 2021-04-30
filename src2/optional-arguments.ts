export {};

let bmi: (height:number, weight:number, printflag?:boolean) => number =  (
    height: number,
    weight: number,
    printflag?: boolean
): number => {
    const keisan:number = weight / (height * height);
    if(printflag){
        console.log({keisan});
    }
    return keisan;
}

bmi(1.6,38);            //OK
bmi(1.6,38,false);      //OK
bmi(1.6,38,true);       //OK