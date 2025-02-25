import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Courses from "../pages/Courses";
import Payments from "../pages/Payments";
import Results from "../pages/Results";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";
import StudentDashboard from "../pages/studentDashboard";
import RegistrationSuccess from "../pages/RegistrationSuccess";

export default function Stack() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/:id" element={<StudentDashboard />} />
        <Route path="*" element={<Error />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </div>
  );
}
