import React , {useState,useEffect} from 'react';

const LikeButton = () => {
    const [count,Counte] = useState(0);

    const Countup = () => {
        Counte(count + 1);
    }

    useEffect(() => {
        document.getElementById('counter').addEventListener('click',Countup);
        if(count >= 10){
            Counte(0);
        }
        return () => {
            document.getElementById('counter').removeEventListener('click',Countup);
        };
    });

    return(
        <button id="counter">いいね数:{count}</button>
    );
};

export default LikeButton;