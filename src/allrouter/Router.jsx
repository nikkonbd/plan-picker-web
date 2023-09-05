import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Home from "../LandingPage/homepage/Home";
import Services from "../LandingPage/Services/Services";
import ContactUS from "../LandingPage/contact/ContactUS";
import About from "../LandingPage/aboutus/About";
import Blog from "../LandingPage/Blog/Blog";
import BlogDetails from "../LandingPage/Blog/blogDetails/BlogDetails";
import Dashboard from "../LandingPage/Dashboard/Dashboard";

import ScheduleEventDetails from "../compnents/ScheduleEventDetails";
import MyCalendar from "../myCalendar/MyCalendar";
import Availability from "../LandingPage/Availability/Availability";
import Event from "../LandingPage/contact/Event";
// import Event2 from "../LandingPage/contact/Event2";
import EventPage from "../component/EventPage";
import MySchedule from "../LandingPage/Dashboard/mySchedule/MySchedule";
import EventPageData from "../calendar/EventPageData";
import AllUsers from "../LandingPage/Dashboard/Admin/AllUsers";
import Profile from "../LandingPage/Dashboard/Profile/Profile";
import Analytics from "../LandingPage/Dashboard/analytics/Analytics";
import MorePlan from "../LandingPage/homepage/morePlan/MorePlan";
import PrivateRoute from "./PrivateRoute";
import ExploreFeatures from "../LandingPage/aboutus/exploreFeatures/ExploreFeatures";
import LearnAvailability from "../LandingPage/homepage/LearnAvailability/LearnAvailability";

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
        path: "more-plan",
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
        path: "/about-explore",
        element: <ExploreFeatures></ExploreFeatures>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/learn-availability",
        element: <LearnAvailability />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/schedule",
        element: <MyCalendar />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/availability",
        element: <Availability />,
      },
      {
        path: "/dashboard/Profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/Schedule",
        element: <ScheduleEventDetails></ScheduleEventDetails>,
      },
      {
        path: "/dashboard/mySchedule",
        element: <MySchedule></MySchedule>,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/dashboard/event_type/one-on-one-form",
        element: <Event />,
      },
      // {
      //   path: "/dashboard/event_type/group-form",
      //   element: <Event2 />,
      // },
      {
        path: "/dashboard/event_type/collective-form",
        element: <div>Colective</div>,
      },
      {
        path: "/dashboard/one-on-one-form/event_set_edit_form",
        element: <EventPage />,
      },
      {
        path: "/dashboard/calendar",
        element: <EventPageData />
      }
    ],
  },
]);

export default router;
