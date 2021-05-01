export {};

class Mahoutukai {}
class Souryo {}

//多重継承が出来ない
class Taro extends Mahoutukai {

}

//多重の interfaceでの重複は可能　interface = 実装する

interface Kenja  {
    ionazun() :  void;       //シグネチャ
}
interface Senshi {
    kougeki()  : void;
}

class Jiro implements Kenja , Senshi{
    ionazun() :void{
        console.log('iozazun');
    }
    kougeki() :void{
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();