import { useState } from 'react';
import axios from 'axios';

const NotificationForm = ({ userId, setUserId, fetchNotifications }) => {
    const [type, setType] = useState('email');
    const [message, setMessage] = useState('');

    const sendNotification = async () => {
        if (!userId || !message) return alert("User ID and message are required.");
        await axios.post('http://localhost:5000/api/notifications', {
            userId,
            type,
            message,
        });
        setMessage('');
        fetchNotifications();
    };

    return (
        <div className="form-container">
            <h2>Notification Service</h2>
            <label>Enter User ID:</label>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} />

            <label>Select Notification Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="in-app">In-App</option>
            </select>

            <label>Enter Message:</label>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />

            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default NotificationForm;