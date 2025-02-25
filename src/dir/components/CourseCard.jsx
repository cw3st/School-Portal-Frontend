import React from "react";
import "../styles/Courses.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <div>{course.icon}</div>
      <h3 style={{ color: "rgb(15, 40, 87)" }}>{course.name}</h3>
      <p style={{ color: "rgb(6, 180, 85)" }}>Progress: {course.progress}%</p>
      <button style={{ backgroundColor: "rgb(6, 180, 85)", color: "#ffffff", border:"none", padding:"6px 13px", marginTop:"20px", cursor:"pointer"}}>
        View Course
      </button>
    </div>
  );
};

export default CourseCard;