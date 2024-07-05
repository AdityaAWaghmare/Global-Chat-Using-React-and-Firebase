import React, { useState , memo } from 'react';
import MessageBar from './messageBar/MessageBar';
import MessageSheet from './messageSheet/MessageSheet';
import User from './user/User';
import './global.css';
import style from './ChatRoom.module.css';

const ChatRoom = () => {
  const [user, setUser] = useState(null);
  return (
    <div className={style.ChatRoom}>
      
      <User user={user} setUser={setUser} />

      <div className={style.messageSheet}>
        < MessageSheet user={user}/>
      </div>
      
      <MessageBar user={user}/>
      
    </div>
  );
};

export default memo(ChatRoom);
