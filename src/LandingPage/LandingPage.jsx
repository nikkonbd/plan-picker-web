import { Outlet } from "react-router-dom";
import Footer from "./commonData/Footer";
import Navbar from "./commonData/Navbar";


const LandingPage = () => {
  return (
    <div>
      <div className="table-fixed">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
