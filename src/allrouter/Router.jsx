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
import MorePlan from "../LandingPage/homepage/morePlan/MorePlan";
import Event from "../LandingPage/contact/Event";
import Event2 from "../LandingPage/contact/Event2";
import EventPage from "../component/EventPage";
import MySchedule from "../LandingPage/Dashboard/mySchedule/MySchedule";
import Analytics from "../LandingPage/Dashboard/analytics/Analytics";
import Profile from "../LandingPage/Dashboard/Profile/Profile";
import EventCalendar from "../eventCalendar/EventCalendar";
import EventTypeDetails from "../myCalendar/eventSearch/EventTypeDetails";

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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/schedule",
        element: <MyCalendar />,
        loader: () => fetch("https://mocki.io/v1/d238de33-940e-49c2-b452-79450b25f2c5")
      },
      {
        path: "/dashboard/schedule/:id",
        element: <EventTypeDetails />,
        // loader: ({ params }) => fetch(`https://mocki.io/v1/d238de33-940e-49c2-b452-79450b25f2c5/${params.id}`)
        loader: ({ params }) => fetch("https://mocki.io/v1/d238de33-940e-49c2-b452-79450b25f2c5")
      },
      {
        path: "/dashboard/availability",
        element: <Availability />,
      },
      // {
      //   path: '/eventDetails',
      //   element: <ScheduleEventDetails></ScheduleEventDetails>
      // }
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
        path: "/dashboard/calendar",
        element: <EventCalendar></EventCalendar>,
      },
      {
        path: "/dashboard/event_type/one-on-one-form",
        element: <Event />,
      },
      {
        path: "/dashboard/event_type/group-form",
        element: <Event2 />,
      },
      {
        path: "/dashboard/event_type/collective-form",
        element: <div>Colective</div>,
      },
      {
        path: "/dashboard/one-on-one-form/event_set_edit_form",
        element: <EventPage />,
      }
    ],
  },
]);

export default router;
