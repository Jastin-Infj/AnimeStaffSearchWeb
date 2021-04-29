export {};

const kensu = (): number => 43;

//Javascript
let numberAny: any = kensu();
//Typescript
let numberUnKnown: unknown = kensu();

let sumAny = numberAny + 10;                        //53
//number型なら
if (typeof numberUnKnown === 'number'){
    //計算は出来ないかもしれない
    let sumAnyUnKnown:number = numberUnKnown + 10;  //
    console.log(sumAnyUnKnown);
}