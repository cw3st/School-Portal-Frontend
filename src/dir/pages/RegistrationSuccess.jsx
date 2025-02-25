import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

export default function RegistrationSuccess() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 style={{ color: "rgb(15, 40, 87)" }}>Registration Successful!</h2>
        <p>Your account has been created successfully.</p>
        <Link to="/login" style={{ backgroundColor: "rgb(6, 180, 85)" }}>
          Go to Login
        </Link>
      </div>
    </div>
  );
}