import React, { useEffect, useState, memo } from 'react';
import MessageBar from './messageBar/MessageBar';
import MessageSheet from './messageSheet/MessageSheet';
import Top from './top/Top';
import './global.css';
import style from './ChatRoom.module.css';
import {auth} from '../MyFirebase';
import { onAuthStateChanged } from "firebase/auth";

const ChatRoom = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (id) => {
      if (id) {
        setUser(id);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={style.ChatRoom}>
      <Top user={user} setUser={setUser} />
      <div className={style.messageSheet}>
        <MessageSheet user={user} />
      </div>
      {user?<MessageBar user={user} />:null}
    </div>
  );
};

export default memo(ChatRoom);