const NotificationList = ({ notifications, userId }) => {
    return (
        <div className="list-container">
            <h2>Notifications for User: {userId}</h2>
            {notifications.length === 0 ? (
                <p>No notifications yet.</p>
            ) : (
                <ul>
                    {notifications.map((n, i) => (
                        <li key={i}>
                            <strong>[{n.type}]</strong> {n.message}
                            <span className={`status ${n.status}`}> ({n.status})</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationList;
