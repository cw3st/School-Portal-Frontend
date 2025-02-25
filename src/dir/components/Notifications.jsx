import React, { useState } from "react";
import "../styles/Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New grade posted for Mathematics", date: "2025-02-24" },
    { id: 2, message: "Payment due for Semester 2", date: "2025-03-01" },
  ]);

  return (
    <div className="notifications-dropdown">
      <h3 style={{ color: "rgb(15, 40, 87)" }}>Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <p>{notification.message}</p>
            <small style={{ color: "rgb(6, 180, 85)" }}>{notification.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
