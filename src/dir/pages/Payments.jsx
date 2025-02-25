// import React from "react";
// import "../styles/Home.css";
// import Barmenu from "../components/Sidebar";
// import { MenuBar } from "../components/MenuBar";
// import { FaCoins, FaMoneyBill1Wave } from "react-icons/fa6";
// import { ImParagraphCenter } from "react-icons/im";
// import { PiBankBold } from "react-icons/pi";

// export default function Payments() {
//   return (
//     <>
//       <div className="sli">
//         <Barmenu menu={MenuBar} />

//         <div>
//           <div className="cc">List Of Payments</div>
//           <div className="c4">
//             <span className="c42">Level 100</span>
//             <span className="c42">Web Development</span>
//             <span className="c42">Paid</span>
//           </div>
//           <div className="c4">
//             <span className="c42">Level 200</span>
//             <span className="c42">Web Development</span>
//             <span className="c42">Paid</span>
//           </div>
//           <div className="c4">
//             <span className="c42">Level 300</span>
//             <span className="c42">Web Development</span>
//             <span className="c42">Paid</span>
//           </div>
//           <div className="c4">
//             <span className="c42">Level 400</span>
//             <span className="c42">Web Development</span>
//             <span className="c42">Paid</span>
//           </div>
//           <p className="dp4">
//             <div className="dp44">
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
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Payments.css";

const Payments = () => {
  const payments = {
    totalPayable: 10000,
    totalPaid: 5000,
    dueAmount: 5000,
  };

  return (
    <div className="payments-container">
      <Sidebar />
      <div className="main-content">
        <h1 style={{ color: "rgb(15, 40, 87)" }}>Payments</h1>
        <div className="payment-stats">
          <div className="payment-card">
            <h3 style={{ color: "rgb(15, 40, 87)" }}>Total Payable</h3>
            <p style={{ color: "rgb(6, 180, 85)" }}>${payments.totalPayable}</p>
          </div>
          <div className="payment-card">
            <h3 style={{ color: "rgb(15, 40, 87)" }}>Total Paid</h3>
            <p style={{ color: "rgb(6, 180, 85)" }}>${payments.totalPaid}</p>
          </div>
          <div className="payment-card">
            <h3 style={{ color: "rgb(15, 40, 87)" }}>Due Amount</h3>
            <p style={{ color: "rgb(6, 180, 85)" }}>${payments.dueAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;