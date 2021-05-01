export {};

{
    class Me {
        isProgrammer: boolean = true;
        firstName: string = 'Atsushi';
        lastName: string = 'IShida';
    }

    let me = new Me();
    console.log(me.isProgrammer);
}

{
    class Me {
        static isProgrammer: boolean = true;
        static firstName: string = 'Atsushi';
        static lastName: string = 'IShida';

        static work() : string{
            //! firstNameの場合 Error 2662
            return `Hey guys! This is ${this.firstName}`;
        }
    }

    //! Error 2576
    //let me = new Me();
    //console.log(me.isProgrammer);

    console.log(Me.isProgrammer);
    console.log(Me.work());
}


