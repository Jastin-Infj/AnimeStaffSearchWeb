export {};

enum Months {
    January = 1,        //1
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,             //8
    September = 20,     //20
    October,            //21
    November,           //22
    December            //23
}

console.log(Months.January);
console.log(Months.August);
console.log(Months.December);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#00FF00'
}

let green = COLORS.GREEN;
console.log(green);

//後で追加

enum COLORS {
    YEllOW = '#FFFF00'
};

console.log(COLORS.YEllOW);