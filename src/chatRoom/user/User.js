import React, { memo } from 'react';
import style from './User.module.css';

const User = ({user, setUser}) => {
    return (
        <div className={style.User}>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Anon name"
            aria-label="Anon name"
            className={style.Input}
          />
        </div>
    );
}

export default memo(User);