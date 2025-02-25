// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../styles/Home.css";

// export default function Register() {
//   axios.defaults.withCredentials = true;

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [regNum, setRegNum] = useState();
//   const [role, setRole] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();

//   const register = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post("http://localhost:5000/register", {
//           name: name,
//           email: email,
//           regNum: regNum,
//           role: role,
//           password: password,
//           confirmPassword: confirmPassword,
//         })
//         .then((result) => {
//           console.log(result);
//           //alert(result.data)
//         })
//         .catch((error) => {
//           console.log(error);
//           // if (error.response.status == 400){
//           //   console.log("error400")
//           // }else{
//           //   console.log("error404")
//           // }
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <form action="" onSubmit={register} className="signup">
//         <div className="login1">Sign up here</div>
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="in1"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Email Address"
//           className="in2"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Reg Num"
//           className="in2"
//           onChange={(e) => setRegNum(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Role"
//           className="in2"
//           onChange={(e) => setRole(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Choose Password"
//           className="in2"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="in2"
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button type="submit" className="fgo">
//           Register
//         </button>
//         <div className="ftt">
//           <Link to={"/"} className="ft">
//             Back to home
//           </Link>
//           <Link to={"/login"} className="title">
//             Login
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css"; 

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNum, setRegNum] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const result = await axios.post("http://localhost:5000/register", {
        name,
        email,
        regNum,
        role,
        password,
        confirmPassword,
      });
      if (result.data) {
        navigate("/registration-success");
      }
    } catch (error) {
      console.error(error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 style={{ color: "rgb(15, 40, 87)" }}>Sign up here</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Registration Number"
            value={regNum}
            onChange={(e) => setRegNum(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Choose Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" style={{ backgroundColor: "rgb(6, 180, 85)" }}>
            Register
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
