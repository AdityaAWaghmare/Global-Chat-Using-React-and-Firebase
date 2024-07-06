import {memo} from 'react';

// utils.js
export default function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    const strSeconds = seconds < 10 ? '0' + seconds : seconds;
  
    const time = hours + ':' + strMinutes + ':' + strSeconds + ' ' + ampm;
    return time;
}