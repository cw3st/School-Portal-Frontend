// import React, { useState } from "react";
// import "../styles/Home.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:5000/login", {
//           email,
//           password,
//         })
//         .then((result) => {
//           console.log(result);
//           const userData = result?.data.user;
//           console.log("heyy", userData);
//           navigate(`/student/${userData._id}`);
//           //  userData.role === "Student" && navigate(`/student/${userData._id}`);
//           //  Navigate.push("/student");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } catch (error) {
//       console.log(error);
//       // setLoggedIn(false);
//     }
//   };

//   return (
//     <>
//       <form action="" onSubmit={handleLogin} className="login">
//         <div className="login1">Sign in to Dashboard</div>
//         <input
//           type="text"
//           placeholder="Email"
//           className="in1"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           placeholder="Password"
//           className="in2"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           type="password"
//         />
//         <button type="submit" className="fgo">
//           Login
//         </button>
//         <Link to={"/register"} className="head">
//           Don't have acccount ? Sign up
//         </Link>
//       </form>
//     </>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const result = await axios.post("https://school-portal-backend-95k8.onrender.com/login", {
        email,
        password,
      }, {withCredentials: true});
  
      const token = result?.data?.token; // Ensure token exists
      console.log("Token received from login:", token);
  
      if (token) {
        localStorage.setItem("token", token); // Store token properly
        navigate(`/student/${result?.data?.user?._id}`);
      } else {
        console.error("No token received");
        setError("Login failed, no token provided.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 style={{ color: "rgb(15, 40, 87)" }}>Sign in to Dashboard</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={{ backgroundColor: "rgb(6, 180, 85)" }}>
            Login
          </button>
        </form>
        <p className="auth-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}