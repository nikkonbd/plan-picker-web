import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../LandingPage/homepage/Home";
import Services from "../LandingPage/Services/Services";
import ContactUS from "../LandingPage/contact/ContactUS";
import About from "../LandingPage/aboutus/About";
import Blog from "../LandingPage/Blog/Blog";
import BlogDetails from "../LandingPage/Blog/blogDetails/BlogDetails";
import Dashboard from "../LandingPage/Dashboard/Dashboard";
import Profile from "../LandingPage/Profile/Profile";
import ScheduleEventDetails from "../compnents/ScheduleEventDetails";
import MyCalendar from "../myCalendar/MyCalendar";
import Availability from "../LandingPage/Availability/Availability";
import MorePlan from "../LandingPage/homepage/morePlan/MorePlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/more-plan',
        element: <MorePlan></MorePlan>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <ContactUS></ContactUS>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard></Dashboard>,
      //   children: [
      //     {
      //       path: "/dashboard/Availability",
      //       element: <Availability />
      //     }
      //   ]
      // },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <MyCalendar />,
      },
      {
        path: "/dashboard/Availability",
        element: <Availability />,
      },
      // {
      //   path: '/eventDetails',
      //   element: <ScheduleEventDetails></ScheduleEventDetails>
      // }
    ],
  },
]);

export default router;
