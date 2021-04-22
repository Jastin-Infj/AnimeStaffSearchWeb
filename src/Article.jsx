import React, {useState} from 'react';
import LikeButton from './LifeButton.jsx';

const Article = (props) => {
    const [isPublished,togglePublished] = useState(true);

    return (
        <div>
            <h2>{props.title}</h2>
            <label htmlFor='check'>公開状態</label>
            <input className='check' type='checkbox' checked ={isPublished} onClick={() => togglePublished(!isPublished)}/>
            <LikeButton/>
        </div>
    );
}

export default Article;