export {};


type GozyuuonString = 'あ' | 'か' | 'さ' | 'た' | 'な' | 'は' | 'ま' | 'や' | 'ら' | 'わ' | 'A-Z';
type GozyuuonObject = {
    value:GozyuuonString;
    float:boolean;
    [key:string]:any;
};

const GOZYUUON_OBJ = (<T extends Record<number,GozyuuonObject>>(U:T) => U)({
    '0':{value:'あ',float:false,test:'100'},
    '1':{value:'か',float:false},
    '2':{value:'さ',float:true},
    '3':{value:'た',float:false},
    '4':{value:'な',float:false},
    '5':{value:'は',float:true},
    '6':{value:'ま',float:false},
    '7':{value:'や',float:false},
    '8':{value:'ら',float:true},
    '9':{value:'わ',float:false}
});
const GozyuuonKEYParam = Object.keys(GOZYUUON_OBJ) as Array<keyof typeof GOZYUUON_OBJ>;

//Object.keys(GozyuuonKEYParam).map(key => {
//    console.log(GOZYUUON_OBJ[key]);
//});


const myObj: {[index:string]:any} = {}
const propname = 'propname';


//! myObj[propname] = 'string' Error 7053

type MyType = {
    prop1: string, 
    prop2: string
}

const array1: (keyof MyType)[] = ["prop1", "prop2"];
const array2: MyType = { prop1 : "value1", prop2: "value2" }

console.log(array1.map(x => array2[x]));

//numberの keys を取得する場合  
type Foo = { [key: number]: string };
const foo: Foo = { 100: 'foo', 200: 'bar' };
console.log(Object.keys(foo).map(Number));