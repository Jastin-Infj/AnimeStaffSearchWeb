import React , {useRef,useState, useEffect} from 'react';

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

    const renderTime = useRef(0);
    useEffect(() => {
        renderTime.current++;
    });
    const ref = useRef<HTMLInputElement>(null);
    // NonNullアサーションオペレーター
    // const ref = useRef<HTMLInputElement>(null!);

    const focusinput = () => {
        const current = ref.current;
        if(current !== null){
            current.focus();
        }
        // ref.current?.focus();
    };

    return (
        <div>
            <div>value: {value}</div>
            <button onClick={incAdd}>+1</button>
            <button onClick={dec} >-1</button>
            <div>This Component  renderTime: {renderTime.current}</div>
            <input ref={ref} type="text"></input>
            <button onClick={focusinput}>Click me !</button>
        </div>
    );
};

export default Counter;