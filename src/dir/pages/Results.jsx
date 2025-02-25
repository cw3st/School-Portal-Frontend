// import React from "react";
// import "../styles/Home.css";
// import Barmenu from "../components/Sidebar";
// import Sidebar from "../components/Sidebar";

// export default function Results() {
//   return (
//     <>
//       <div className="sli">
//         <Sidebar menu={MenuBar} />

//         <div>
//           <div className="c1">List Of Results</div>
//           <div className="c4">
//             <span className="c41">Level 100</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">87</span>
//           </div>
//           <div className="c4">
//             <span className="c41">Level 200</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">99</span>
//           </div>
//           <div className="c4">
//             <span className="c41">Level 300</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">89</span>
//           </div>
//           <div className="c4">
//             <span className="c41">Level 400</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">85</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Results.css";

const Results = () => {
  const results = [
    { course: "Mathematics", grade: "A", gpa: "4.0" },
    { course: "Computer Science", grade: "B+", gpa: "3.5" },
    { course: "Physics", grade: "A-", gpa: "3.7" },
    { course: "Chemistry", grade: "B", gpa: "3.0" },
    { course: "English", grade: "B", gpa: "3.0" },
    { course: "History", grade: "B", gpa: "3.0" },
    { course: "African Studies", grade: "B", gpa: "3.0" },
  ];

  return (
    <div className="results-container">
      <Sidebar />
      <div className="main-content">
        <h1 style={{ color: "rgb(15, 40, 87)" }}>Your Results</h1>
        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <h3 style={{ color: "rgb(15, 40, 87)" }}>{result.course}</h3>
              <p style={{ color: "rgb(6, 180, 85)" }}>Grade: {result.grade}</p>
              <p style={{ color: "rgb(6, 180, 85)" }}>GPA: {result.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;