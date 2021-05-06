export {};

let canselbuttonStyle:object = {
  buttonStyle:{},
  buttonDisabledStyle:{},
  buttonTextStyle:{
    display:'none'
  },
  buttonDisabledTextStyle:{}
};

let canselButtonProps_kensaku:object = {
  //color
  buttontitle:'キャンセル',
  disabled:false,
};

{
  //理想
  let canselButton = {
    buttonStyle:{},
    buttonDisabledStyle:{},
    buttonTextStyle:{
      display:'none'
    },
    buttonDisabledTextStyle:{},
    //color
    buttontitle:'キャンセル',
    disabled:false,
  }
}

//object形式で 結合したい場合
let canselButton = {...canselbuttonStyle,...canselButtonProps_kensaku};

console.log(canselButton);