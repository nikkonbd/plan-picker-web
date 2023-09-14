import { Outlet } from "react-router-dom";
import Footer from "./commonData/Footer";
import Navbar from "./commonData/Navbar";
import { Toaster } from "react-hot-toast";


const LandingPage = () => {
  return (
    <div>
      <div className="table-fixed">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default LandingPage;
