// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import "../styles/Home.css";
// import { MenuBar } from "../components/Side";
// import axios from "axios";

// export default function Profile() {
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
//         <Sidebar menu={MenuBar} />
//         <div className="profile">
//           <div className="p1">Name : {user?.name}</div>
//           <div className="p1">Registration Number : {user?.regNum}</div>
//           <div className="p1">Level : {user?.currentLevel}</div>
//           <div className="p1">Department : Cyber Security</div>
//           <div className="p1">Email :{user?.email}</div>
//           <Link className="p2" to="/settings">
//             Edit Profile
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import dp from "../assets/beard-1845166_1280.jpg"

const Profile = () => {
  const [user, setUser] = useState(null);

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
    console.log("take");
    try {
      await axios
        .get("http://localhost:5000/me")
        .then((result) => {
          console.log(result);
          setUser(result.data);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateAll();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="main-content">
        <h1 style={{ color: "rgb(15, 40, 87)" }}>Profile</h1>
        <div className="profile-info">
          <img
            src={dp}
            alt=""
            style={{ height: "50px", width: "55px", borderRadius: "100%" }}
          />

          <p style={{ paddingBottom:"20px", paddingTop:"20px"}}>
            <strong style={{ color: "rgb(15, 40, 87)", fontSize:"1.2rem"}}>Name:</strong>{" "}
            {user?.name}
          </p>
          <p style={{ paddingBottom:"20px", paddingTop:"20px"}}>
            <strong style={{ color: "rgb(15, 40, 87)",  fontSize:"1.2rem"}}>
              Registration Number:
            </strong>
            {user?.regNum}
          </p>
          <p style={{ paddingBottom:"20px", paddingTop:"20px"}}>
            <strong style={{ color: "rgb(15, 40, 87)",  fontSize:"1.2rem" }}>Level:</strong>{" "}
            {user?.currentLevel}
          </p>
          <p style={{ paddingBottom:"20px", paddingTop:"20px"}}>
            <strong style={{ color: "rgb(15, 40, 87)",  fontSize:"1.2rem" }}>Department:</strong>{" "}
            Cyber Security
          </p>
          <p style={{ paddingBottom:"20px", paddingTop:"20px"}}>
            <strong style={{ color: "rgb(15, 40, 87)",  fontSize:"1.2rem" }}>Email:</strong>{" "}
            {user?.email}
          </p>
        </div>
        <Link
          to="/settings"
          className="edit-profile-btn"
          style={{ backgroundColor: "rgb(6, 180, 85)", color: "#ffffff" }}
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
