import React, {memo} from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Import icons from react-icons
import style from './mb.module.css';

const PaperPlane = (props) => {
    return (
        <FaPaperPlane
            onClick={props.sendMessage}
            className={style.Icon}
            aria-label="Send message"
        />
    );
};

export default memo(PaperPlane);