import React from "react";
import whilogo from "../assets/KUlogo-white.png";
import "../styles/Home.css";
import books from "../assets/bookicon.png";
import globe from "../assets/globeicon.png";
import scroll from "../assets/scrollicon.png";
import uni from "../assets/unicon.png";
import b1 from "../assets/banner-1.png";
import b2 from "../assets/banner-2.png";
import b3 from "../assets/banner-3.png";
import b4 from "../assets/banner-4-1.png";
import b5 from "../assets/banner-5.png";

export default function Article() {
  return (
    <>
      <div className="art1">
        <div className="art1a">
          <div className="art1ah">
            <img src={whilogo} alt="" className="whimg" />
            <div className="art1a2">About Our University</div>
          </div>
          <div>
            <div className="art1b1">
              {" "}
              We are one of the largest, most diverse universities in the USA
              with over
            </div>
            <div className="art1b2">
              90,000 students in USA, and a further 30,000 studying across 180
            </div>
            <div className="art1b2">countries for Kingster University.</div>
            <div className="art1b3">
              Kingster University was established by John Smith in 1920 for the
              public benefit and it is
            </div>
            <div className="art1b3">
              recognized globally. Throughout our great history, Kingster has
              offered access to a
            </div>
            <div className="art1b3">
              wide range of academic opportunities. As a world leader in higher
              education, the
            </div>
            <div className="art1b3">
              University has pioneered change in the sector.
            </div>
            <a href="" className="art1b4">
              <span className="art1b4a">Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="art2">
        <div className="art2-iteration">
          <img src={books} alt="" className="bkimg" />
          <div className="art2a2">Education Services</div>
          <div className="art2a3">
            Kingster University was established <br />
            by John Smith in 1920 for the public <br />
            benefit and it is recognized.
          </div>
          <a href="" className="art2a4">
            {" "}
            Learn More
          </a>
        </div>
        <div className="art2-iteration">
          <img src={globe} alt="" className="bkimg" />
          <div className="art2a2">International Hubs</div>
          <div className="art2a3">
            Kingster University was established <br />
            by John Smith in 1920 for the public <br />
            benefit and it is recognized.
          </div>
          <a href="" className="art2a4">
            Learn More
          </a>
        </div>
        <div className="art2-iteration">
          <img src={scroll} alt="" className="bkimg" />
          <div className="art2a2">Bachelor’s and Master’s</div>
          <div className="art2a3">
            Kingster University was established <br />
            by John Smith in 1920 for the public <br />
            benefit and it is recognized.
          </div>
          <a href="" className="art2a4">
            Learn More
          </a>
        </div>
        <div className="art2-iteration">
          <img src={uni} alt="" className="bkimg" />
          <div className="art2a2">University Life</div>
          <div className="art2a3">
            Kingster University was established <br />
            by John Smith in 1920 for the public <br />
            benefit and it is recognized.
          </div>
          <a href="" className="art2a4">
            Learn More
          </a>
        </div>
      </div>
      <div className="art3">
        <div className="art3a">
          <div className="art3ai">
            <div className="art3a1">Undergraduate</div>
            <div className="art3a2">Kingster University was established by</div>
            <div className="art3a3">John Smith in 1920 for the public</div>
            <div className="art3a4">benefit and it is recognized globally.</div>
          </div>
        </div>
        <div className="art3b">
          <div className="art3b1">Graduated & Professional</div>
          <div className="art3a2">Kingster University was established by</div>
          <div className="art3a3">John Smith in 1920 for the public</div>
          <div className="art3a4">benefit and it is recognized globally.</div>
        </div>
        <div className="art3c">
          <div className="art3ai">
            <div className="art3c1">Scholarships & Financial AID</div>
            <div className="art3a2">Kingster University was established by</div>
            <div className="art3a3">John Smith in 1920 for the public</div>
            <div className="art3a4">benefit and it is recognized globally.</div>
          </div>
        </div>
      </div>
      <div className="art4">
        <img src={b1} alt="" />
        <img src={b2} alt="" />
        <img src={b3} alt="" />
        <img src={b4} alt="" />
        <img src={b5} alt="" />
      </div>
      <footer>©Copyright 2023 CIVI. All Rights Reserved.</footer>
    </>
  );
}
