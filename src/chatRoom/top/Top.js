import React from 'react';
import { auth, provider, signInWithPopup, signOut } from '../../MyFirebase';
import style from './Top.module.css';

const Top = ({ user, setUser }) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error during sign-out:", error);
      });
  };

  return (
    <div className={style.Top}>
      {user ? (
        <>
          {/* <p className={style.Name}>{user.displayName}</p> */}
          <button onClick={handleLogout} className={style.SignOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={handleLogin} className={style.SignIn}>Sign In to Get Started</button>
      )}
    </div>
  );
};

export default Top;