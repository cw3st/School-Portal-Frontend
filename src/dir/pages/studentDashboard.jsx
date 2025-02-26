// import React, { useState, useEffect } from "react";
// import Barmenu from "../components/Barmenu";
// import { MenuBar } from "../components/MenuBar";
// import { BsFillFileBarGraphFill } from "react-icons/bs";
// import { FaGraduationCap } from "react-icons/fa6";
// import { SiLevelsdotfyi } from "react-icons/si";
// import { FaCoins } from "react-icons/fa";
// import { FaMoneyBill1Wave } from "react-icons/fa6";
// import { ImParagraphCenter } from "react-icons/im";
// import { PiBankBold } from "react-icons/pi";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Student() {
//   const [user, setUser] = useState();
//   const updateAll = async () => {
//     console.log("take");
//     try {
//       await axios
//         .get("http://localhost:5000/me")
//         .then((result) => {
//           console.log(result);
//           setUser(result.data);
//         })
//         .catch((error) => {
//           console.log(error);
//           if (error.response.status == 400) {
//             console.log("error400");
//           } else {
//             console.log("error404");
//           }
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     updateAll();
//   }, []);

//   return (
//     <>
//       <div className="sli">
//         <Barmenu menu={MenuBar} />
//         <div>
//           <div className="dp1">Welcome back: {user?.name} </div>
//           <div className="dp2">Registration Number: {user?.regNum} </div>
//           <div className="b2">
//             <div className="dp31">
//               <span className="dp31a">Current level</span>
//               <BsFillFileBarGraphFill className="dp31b" />
//               <p className="dp31c">{user?.currentLevel}</p>
//             </div>
//             <div className="dp32">
//               <div>
//                 <div className="dp32a">Enrolled Courses</div>
//                 <div className="dp32b">
//                   Object oriented <br /> programming
//                 </div>
//                 <Link to="/courses" className="dp32c">
//                   View
//                 </Link>
//               </div>
//               <FaGraduationCap className="Faicon" />
//             </div>
//             <div className="dp33">
//               <span className="dp31a">Total GPA</span>
//               <SiLevelsdotfyi className="dp31b" />
//               <p className="dp33a">{user?.gpa}</p>
//               <Link to="/results" className="dp33b">
//                 View Results
//               </Link>
//             </div>
//           </div>
//           <div className="dp4">
//             <div className="dp41">
//               <FaCoins className="dp41a" />
//               <div>$10,000</div>
//               <div>Total Payable</div>
//             </div>
//             <div className="dp42">
//               <FaMoneyBill1Wave />
//               <div>$5,000</div>
//               <div>Total Paid</div>
//             </div>
//             <div className="dp43">
//               <ImParagraphCenter />
//               <div>$300</div>
//               <div>Others</div>
//             </div>
//             <div className="dp41">
//               <PiBankBold />
//               <div>$4,500</div>
//               <div>Student Loan</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
// import CourseCard from "../components/CourseCard";
import MyCalendar from "../components/Calendar";
import Notifications from "../components/Notifications";
import "../styles/Dashboard.css";
import dp from "../assets/beard-1845166_1280.jpg"

const studentDashboard = () => {
  const [user, setUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/me");
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);


  const updateAll = async () => {
    const token = localStorage.getItem("token"); // Check if token is stored
    console.log("Token being sent:", token);
  
    try {
      await axios
        .get("https://school-portal-backend-95k8.onrender.com/me", {
          withCredentials: true, // Include credentials if using cookies
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is in the correct format
          },
        })
        .then((result) => {
          console.log("Server Response:", result);
          setUser(result.data);
        })
        .catch((error) => {
          console.error("Request Error:", error);
        });
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };
  useEffect(() => {
    updateAll();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div style={{ display:"flex"}}>
        <img src={dp} alt="" style={{ height: "50px", width:"55px", borderRadius:"100%"}}/>
        <h1 style={{ color: "rgb(15, 40, 87)", marginLeft:"30px"}}>Welcome back, {user?.name}!</h1>
        </div>
        <div className="quick-stats">
          <div className="stat-card">
            <h3 style={{ color: "rgb(15, 40, 87)" }}>Current Level</h3>
            <p style={{ color: "rgb(6, 180, 85)" }}>{user?.currentLevel}</p>
          </div>
          <div className="stat-card">
            <h3 style={{ color: "rgb(15, 40, 87)" }}>Total GPA</h3>
            <p style={{ color: "rgb(6, 180, 85)" }}>{user?.gpa}</p>
          </div>
          <div className="stat-card">
            <h3 style={{ color: "rgb(15, 40, 87)" }}>Enrolled Courses</h3>
            <p style={{ color: "rgb(6, 180, 85)" }}>Cyber Security</p>
          </div>
        </div>
        <MyCalendar />
        <button
          className="notification-button"
          onClick={() => setShowNotifications(!showNotifications)}
          style={{ backgroundColor: "rgb(6, 180, 85)", color: "#ffffff" }}
        >
          Notifications
        </button>
        {showNotifications && <Notifications />}
      </div>
    </div>
  );
};

export default studentDashboard;