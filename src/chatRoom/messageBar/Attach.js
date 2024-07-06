import React, {memo} from 'react';
import { FaPaperclip, FaCamera } from 'react-icons/fa'; // Import icons from react-icons
import style from './mb.module.css';

const Attach = () => {
    return (
        <>
            <FaPaperclip className={style.Icon} />
            <FaCamera className={style.Icon} />
        </>
    );
};

export default memo(Attach);