import { useEffect, useState } from 'react';
import axios from 'axios';
import NotificationForm from './components/NotificationForm';
import NotificationList from './components/NotificationList';
import './App.css';

function App() {
  const [userId, setUserId] = useState('');
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    const res = await axios.get(`http://localhost:5000/api/users/${userId}/notifications`);
    setNotifications(res.data);
  };

  useEffect(() => {
    fetchNotifications();
  }, [userId]);

  return (
    <div className="container">
      <NotificationForm
        userId={userId}
        setUserId={setUserId}
        fetchNotifications={fetchNotifications}
      />
      <NotificationList notifications={notifications} userId={userId} />
    </div>
  );
}

export default App;