import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const MenuBar = [
  {
    title: "Dashboard",
    icon: <RiDashboardFill />,
    link: "/student/661e7b1cb47e88e13fa12094",
  },
  { title: "Profile", icon: <CgProfile />, link: "/profile" },
  { title: "Courses", icon: <IoBookSharp />, link: "/courses" },
  { title: "Results", icon: <SiBookstack />, link: "/results" },
  { title: "Payments", icon: <RiSecurePaymentFill />, link: "/payments" },
];

export { MenuBar };
