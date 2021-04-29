export {};

type Picher1 = {
    throwinSpeed: number;
};

type Batter1 = {
    battingAverage: number;
};

const sasaki : Picher1 = {
    throwinSpeed:154
};

const Hiromisu : Batter1 = {
    battingAverage:0.367
};

//type TwoWayPlayer = {
//    throwinSpeed: number;
//    battingAverage: number;
//};

type TwoWayPlayer = Picher1 & Batter1;
const Shouhei : TwoWayPlayer = {
    throwinSpeed:154,
    battingAverage:0.286
};