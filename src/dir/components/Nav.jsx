import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import KUlogo from "../assets/JU logo.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  return (
    <nav>
      <div className="navdd">
        <img src={KUlogo} alt="" className="navimg" />
        <div className="h2ii">
          <a href="" className="h2iia">
            Home
          </a>
          <span className="h2iib">Pages</span>
          <a href="" className="h2iic">
            Academics
          </a>
          <a href="" className="h2iid">
            Admissions
          </a>
          <a href="" className="h2iie">
            Courses
          </a>
          <a href="" className="h2iif">
            Athletics
          </a>
          <a href="" className="h2iig">
            University Life
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            style={{marginLeft:"40px"}}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>
      {showResponsiveNav ? (
        // Responsive Nav

        <ul className="nav-links-responsive">
          <li className="navsel2">Home</li>
          <li className="navsel2">Pages</li>
          <li className="navsel2">Academics</li>
          <li className="navsel2">Admissions</li>
          <li className="navsel2">Courses</li>
          <li className="navsel2">Athletics</li>
          <li className="navsel2">University Life</li>
          <li className="navsel2"><Link to="/login">Login</Link></li>
          <li className="navsel2">Register</li>
        </ul>
      ) : (
        // Normal Nav
        <ul className="nav-links">
          <div>years</div>
        </ul>
      )}
      <div
        className="burger"
        onClick={() => setShowResponsiveNav(!showResponsiveNav)}
      >
        <FaBars color="black" />
      </div>
    </nav>
  );
}
