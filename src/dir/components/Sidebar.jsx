// import React from "react";
// import { Link } from "react-router-dom";
// import Kulogo from "../assets/KUlogo-white.png";
// import "../styles/Home.css";
// import { useNavigate } from "react-router-dom";
// import { IoLogOut } from "react-icons/io5";

// export default function Barmenu({ menu }) {

//   const logout = async (e) => {
//     try {
//       await axios
//         .get("http://localhost:5000/logout")
//         .then((result) => {
//           console.log(result);
//           navigate(`/login`);
//         })
//         .catch((error) => {
//           console.log(error);
//           if (error.response.status == 400) {
//             console.log("error400");
//           } else {
//             console.log("error404");
//           }
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <div className="db1">
//         <img src={Kulogo} alt="" className="dbimg" />
//         <ul>
//           {menu.map((menus, key) => (
//             <span key={key}>
//               <Link to={`${menus.link}`}>
//                 <div className="dbc">
//                   <span className="dbca">{menus.icon}</span>
//                   <span>{menus.title}</span>
//                 </div>
//               </Link>
//             </span>
//           ))}
//           <div onClick={logout} className="dbc">
//             <div>Logout</div>
//           </div>
//         </ul>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "./MenuBar";
import "../styles/Sidebar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Kulogo from "../assets/KUlogo-white.png";


const Sidebar = () => {
const navigate = useNavigate();

  const logout = async (e) => {
    try {
      await axios
        .get("http://localhost:5000/logout")
        .then((result) => {
          console.log(result);
          navigate(`/login`);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sidebar" style={{ backgroundColor: "rgb(15, 40, 87)" }}>
     <img src={Kulogo} alt="" className="dbimg" />
      <ul>
        {MenuBar.map((menu, index) => (
          <li key={index} style={{ listStyle: "none", margin:"20px 0"}}>
            <Link to={menu.link}>
              <div className="menu-item">
                <span className="icon" style={{ color: "#ffffff" }}>
                  {menu.icon}
                </span>
                <span style={{ color: "#ffffff" }}>{menu.title}</span>
              </div>
            </Link>
          </li>
        ))}
        <div onClick={logout} className="dbc">
          <div>Logout</div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
