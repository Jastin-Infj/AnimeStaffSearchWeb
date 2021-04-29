export {};

//想定の文字列以外をなくしたい
let dayofTheWeek: '日' | '月' | '火' = '日';
dayofTheWeek = '月';

//! Error 2322
//dayofTheWeek = '土';

let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
//! Error 2322
//month = 13;

let TRUE: true = true;
//! Error 2322
//TRUE = false;