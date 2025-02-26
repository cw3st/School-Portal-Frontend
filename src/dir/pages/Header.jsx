import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import KUlogo from "../assets/JU logo.png";
import uicon from "../assets/uniicon.png";
import gicon from "../assets/gradicon.png";
import sicon from "../assets/sporticon.png";
import cicon from "../assets/connecticon.png";
import admi1 from "../assets/admiline.jpeg";
import { changeStyle } from "../JS Function/sp";
import { changeStyler } from "../JS Function/sp";
import Nav from "../components/Nav";

export default function Header() {
  const [display, setDisplay] = useState("none");

  return (
    <>
      <div className="h1">
        <div className="h1i">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-envelope-open"
            viewBox="0 0 16 16"
          >
            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
          </svg>
          <div className="h1ib">contact@KUTheme.edu</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
            style={{marginLeft: "20px"}}
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
          <div className="h1id">+1-3435-2356-222</div>
        </div>
        <div className="headd">
          <a href="" className="h1iia">
            Alumni
          </a>
          <a href="" className="h1iib">
            Calendar
          </a>
          <span className="h1iic" onMouseEnter={changeStyle}>
            Portal
          </span>
          <a href="" className="h1iid">
            Support KU
          </a>
        </div>
      </div>
      <div
        id="change"
        style={{ display: display }}
        onMouseLeave={changeStyler}
        className="linkto"
      >
        <Link to="/register" className="linkk">
          Register
        </Link>
        <Link to="/login" className="linkkk">
          Login
        </Link>
      </div>
      <nav>
        <Nav />
      </nav>
      <div className="bgimg">
        <div className="bg">
          <div className="bg1">The Best University Of The State</div>
          <div className="bg2">Kingster University</div>
          <div className="bg3">Take A Tour</div>
          <div className="line1">
            <div className="line1a">
              <img src={uicon} alt="" className="line1aimg" />
              <div className="line1aa">
                <div className="line1a1">University Life</div>
                <div className="line1a2">Overall in here</div>
              </div>
            </div>
            <div className="line1a">
              <img src={gicon} alt="" className="line1aimg" />
              <div>
                <div className="line1a1">Graduation</div>
                <div className="line1a2">Getting Diploma</div>
              </div>
            </div>
            <div className="line1a">
              <img src={sicon} alt="" className="line1aimg" />
              <div>
                <div className="line1a1">Athletics</div>
                <div className="line1a2">Sport Clubs</div>
              </div>
            </div>
            <div className="line1a">
              <img src={cicon} alt="" className="line1aimg" />
              <div>
                <div className="line1a1">Social</div>
                <div className="line1a2">Overall in here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admi">
        <img src={admi1} alt="" className="admimg" />
        <span className="admi2">
          <div className="admii2">
            <div className="admi2a">Apply for Admission</div>
            <div className="admi2b">Fall 2019 application are now open</div>
            <div className="admi2c">
              {" "}
              We don’t just give students an education and
            </div>
            <div className="admi2d">
              experiences that set them up for success in a career.
            </div>
            <div className="admi2d">
              We help them succeed in their career—to discover a
            </div>
            <div className="admi2d">
              field they’re passionate about and dare to lead it.
            </div>
            <div className="admi2e">Apply Now</div>
          </div>
        </span>
      </div>
    </>
  );
}
