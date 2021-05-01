export {};

abstract class Animal{
    abstract cry() : string;
}

class Lion extends Animal{
    cry(): string{
        return 'roar';
    }
}

class Tiger extends Animal{
    //! 型名を間違えると Error 2416
    cry(): string{
        return 'run';
    }
}