import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Mathematics Class",
      start: new Date(2025, 2, 24, 10, 0), // March 24, 2025, 10:00 AM
      end: new Date(2025, 2, 24, 12, 0), // March 24, 2025, 12:00 PM
    },
    {
      title: "Computer Science Exam",
      start: new Date(2025, 2, 26, 14, 0), // March 26, 2025, 2:00 PM
      end: new Date(2025, 2, 26, 16, 0), // March 26, 2025, 4:00 PM
    },
  ]);

  return (
    <div className="calendar-container">
      <h2 style={{ color: "rgb(15, 40, 87)" }}>Schedule</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "20px 0" }}
      />
    </div>
  );
};

export default MyCalendar;