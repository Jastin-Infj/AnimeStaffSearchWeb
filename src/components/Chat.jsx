import React from 'react';
import ListItem from '@material-ui/core/ListItem';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
//import ListItemText from '@material-ui/core/ListItemText';
//import Typography from '@material-ui/core/Typography';
import ChatProfiles from '../assets/img/no-profile.png';
import ToraHackimg from '../assets/img/torahack.png';


const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    //class属性を条件分岐
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ?
                    (<Avatar alt="icon" src={ToraHackimg} />)
                :
                    (<Avatar alt="icon" src={ChatProfiles} />)
                }
            </ListItemAvatar>
            <div className="p-chat__bubble">
                {props.text}
            </div>
        </ListItem>
    );
};

export default Chat;