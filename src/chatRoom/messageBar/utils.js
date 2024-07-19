// utils.js
export default function getCurrentTime() {
    const now = new Date();
    return (now.getHours()<10?'0':'') + now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes() + ' | ' + now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
}