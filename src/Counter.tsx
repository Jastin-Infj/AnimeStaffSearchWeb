import React , {useState} from 'react';

//props は 不要 {}
const Counter: React.FC<{}> = () => {
    const initValue :any = 0;
    //numberになる
    const [value,setValue] = useState<number>(initValue);

    const incAdd = () =>{
        setValue((prevState) => {
            return prevState + 1;
        });
    };

    const dec = () => {
        setValue(value - 1);
    };

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={incAdd}>+1</button>
            <button onClick={dec} >-1</button>
        </div>
    );
};

export default Counter;