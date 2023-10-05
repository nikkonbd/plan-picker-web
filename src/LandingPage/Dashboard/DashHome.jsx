import Lottie from "lottie-react";
import DashboardAnimation from "../../assets/dashboardLoading.json";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
const DashHome = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  return (
    <div className="flex md:flex-row flex-col items-center justify-center max-w-4xl mx-auto">
      <div className="md:w-5/12">
        <h4>Wellcome to Dashboard</h4>
        <h1 className="text-2xl md:text-4xl font-semibold">
          {user.displayName}
          <span className="ml-1 text-sm">({isAdmin ? "Admin" : "User"})</span>
        </h1>
        <p className="mt-5">From here you can,</p>
        <ul className="list-disc list-inside">
          {isAdmin ? (
            <>
              <li>Manage All Users</li>
              <li>See the user vs events analytics</li>
              <li>Billing information of the users</li>
            </>
          ) : (
            <>
              <li>Edit your profile</li>
              <li>Create Events</li>
              <li>See all your created schedule</li>
              <li>Manage your avialability</li>
              <li>Set your own schedule on calender</li>
              <li>Add Review for this website</li>
              <li>See your pakage information and payments</li>
            </>
          )}
        </ul>
        <div className="mt-7">
          <Link
            to={"/"}
            className="bg-[#5EBEC4] hover:bg-[#0e727b] duration-150 px-3 py-2 rounded text-white">
            Home Page
          </Link>
        </div>
      </div>
      <div className="md:w-7/12">
        <Lottie
          animationData={DashboardAnimation}
          loop={true}
          className="w-10/12"
        />
      </div>
    </div>
  );
};

export default DashHome;
