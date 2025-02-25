// import React from "react";
// import "../styles/Home.css";
// import Barmenu from "../components/Sidebar";
// import { MenuBar } from "../components/MenuBar";

// export default function Courses() {
//   return (
//     <>
//       <div className="sli">
//         <Barmenu menu={MenuBar} />

//         <div>
//           <div className="c1">List Of Courses</div>
//           <div className="c4">
//             <span className="c41">Level 100</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">Registered</span>
//           </div>
//           <div className="c4">
//             <span className="c41">Level 200</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">Registered</span>
//           </div>
//           <div className="c4">
//             <span className="c41">Level 300</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">Registered</span>
//           </div>
//           <div className="c4">
//             <span className="c41">Level 400</span>
//             <span className="c41">Web Development</span>
//             <span className="c41">Registered</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";
import { BiMath } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { MdHistoryEdu } from "react-icons/md";
import { BsGlobeEuropeAfrica } from "react-icons/bs";

const Courses = () => {
  const courses = [
    {icon: <BiMath style={{ height: "50px", width:"50px"}} /> , name: "Mathematics", progress: 75 },
    { icon: <FaComputer style={{ height: "50px", width:"50px"}}/>, name: "Computer Science", progress: 50 },
    { icon: <GiMaterialsScience style={{ height: "50px", width:"50px"}}/>, name: "Physics", progress: 60 },
    { icon: <MdScience style={{ height: "50px", width:"50px"}}/>, name: "Chemistry", progress: 80 },
    { icon: <RiEnglishInput style={{ height: "50px", width:"50px"}}/>,name: "English", progress: 80 },
    { icon:<MdHistoryEdu style={{ height: "50px", width:"50px"}}/>,name: "History", progress: 80 },
    { icon: <BsGlobeEuropeAfrica style={{ height: "50px", width:"50px"}}/>,name: "African Studies", progress: 80 },
  ];

  return (
    <div className="courses-container">
      <Sidebar />
      <div className="main-content">
        <h1 style={{ color: "rgb(15, 40, 87)", paddingBottom:"20px"}}>Your Courses</h1>
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;