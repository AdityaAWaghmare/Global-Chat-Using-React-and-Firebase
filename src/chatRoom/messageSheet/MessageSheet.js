import React, { useState, useEffect, useRef, memo } from 'react';
import style from './MessageSheet.module.css';
import {db} from '../../MyFirebase';
import { ref, onChildAdded, off } from "firebase/database";

const MessageSheet = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const messagesRef = ref(db, 'messages');
  const messagesEndRef = useRef(null);

  // Set up onChildAdded listener
  useEffect(() => {
    const handleNewMessage = (snapshot) => {
      const newMessage = { key: snapshot.key, ...snapshot.val() };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    onChildAdded(messagesRef, handleNewMessage);

    // Cleanup listener on component unmount
    return () => {
      off(messagesRef, 'child_added', handleNewMessage);
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.key} className={`${style.message} ${(user && user.uid === msg.uid) ? style.right : style.left}`}>
          <p className={style.sender}>{msg.sender}</p>
          <p className={style.messageText}>{msg.val}</p>
          <p className={style.time}>{msg.time}</p>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default memo(MessageSheet);
