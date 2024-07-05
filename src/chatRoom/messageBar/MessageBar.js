import React, { useState, useEffect, useRef, memo } from 'react';
import getCurrentTime from './utils';
import Attach from './Attach';
import PaperPlane from './PaperPlane';
import style from './mb.module.css';
import app from '../../MyFirebase';
import { getDatabase, ref, push, set } from "firebase/database";

const MessageBar = ({user}) => {
  const db = getDatabase(app);
  const messagesRef = ref(db, 'messages');
  const [newMessage, setNewMessage] = useState('');
  const messageInputRef = useRef(null);
  
  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        time: getCurrentTime(),
        val: newMessage,
        sender: user
      };

      const newMessageRef = push(messagesRef);
      set(newMessageRef, newMsg);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };
  
  useEffect(() => {
    messageInputRef.current.focus();
  }, []);

  return (
    <div className={style.WholeBar}>
      <Attach />
      <textarea
        ref={messageInputRef}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
        aria-label="Type a message"
        className={style.Bar}
      />
      <PaperPlane sendMessage={sendMessage} />
    </div>
  );
};

export default memo(MessageBar);
