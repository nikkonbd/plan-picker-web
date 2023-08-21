import { Outlet } from "react-router-dom";
import Footer from "./commonData/Footer";
import Navbar from "./commonData/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
