import React from 'react';

const Message = (props) => (
    <li>
        {props.message.username}
        {props.message.text}
    </li>
);

export default Message;