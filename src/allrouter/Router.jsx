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
import MySchedule from "../LandingPage/Dashboard/mySchedule/MySchedule";
import EventPageData from "../calendar/EventPageData";
import AllUsers from "../LandingPage/Dashboard/Admin/AllUsers";
import Profile from "../LandingPage/Dashboard/Profile/Profile";
import Analytics from "../LandingPage/Dashboard/analytics/Analytics";
import MorePlan from "../LandingPage/homepage/morePlan/MorePlan";
import EventPage from "../component/EventPage";
import PrivateRoute from "./PrivateRoute";
import ExploreFeatures from "../LandingPage/aboutus/exploreFeatures/ExploreFeatures";
import LearnAvailability from "../LandingPage/homepage/LearnAvailability/LearnAvailability";
import MoreService from "../LandingPage/Services/moreService/MoreService";
import ScheduleDetails from "../LandingPage/homepage/ScheduleDetails/ScheduleDetails";
import EngagedDetails from "../LandingPage/homepage/EngagedDetails/EngagedDetails";
import PaymentStripe from "../LandingPage/Payment/Stripe/PaymentStripe";
import ErrorPage from "../LandingPage/errorPage/ErrorPage";
import Partner from "../LandingPage/contact/Partner";
import JoinTeam from "../LandingPage/contact/JoinTeam";
import SetMeeting from "../setMeeting/SetMeeting";
import ContactSales from "../LandingPage/contact/contactSupportPages/ContactSales";
import AddReview from "../LandingPage/Dashboard/AddReview/AddReview";
import AllBillings from "../LandingPage/Dashboard/billing/AllBillings";
import Billing from "../LandingPage/Dashboard/billing/Billing";
import ContactSupport from "../LandingPage/contact/contactSupportPages/ContactSupport";
import HelpCenter from "../LandingPage/contact/contactSupportPages/HelpCenter";
import MediaAndPress from "../LandingPage/contact/contactSupportPages/MediaAndPress";
import RefundPolicy from "../LandingPage/commonData/refundPolicy/RefundPolicy";
import ReturnPolicy from "../LandingPage/commonData/returnPolicy/ReturnPolicy";
import GettingStarted from "../LandingPage/aboutus/exploreFeatures/GettingStarted";
import ConfirmedSchedule from "../compnents/confirmedSchedule";
import DashHome from "../LandingPage/Dashboard/DashHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "more-plan",
        element: <MorePlan></MorePlan>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services-learn-more",
        element: <MoreService></MoreService>,
      },
      {
        path: "/contact",
        element: <ContactUS></ContactUS>,
      },
      {
        path: "/contact-sales",
        element: <ContactSales></ContactSales>,
      },
      {
        path: "/contact-support",
        element: <ContactSupport></ContactSupport>,
      },
      {
        path: "/help-center",
        element: <HelpCenter></HelpCenter>,
      },
      {
        path: "/media-press",
        element: <MediaAndPress></MediaAndPress>,
      },
      {
        path: "join-team",
        element: <JoinTeam></JoinTeam>,
      },
      {
        path: "partner",
        element: <Partner></Partner>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/getting-Started",
        element: <GettingStarted></GettingStarted>,
      },
      {
        path: "/about-explore",
        element: <ExploreFeatures></ExploreFeatures>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/refundPolicy",
        element: <RefundPolicy></RefundPolicy>,
      },
      {
        path: "/returnPolicy",
        element: <ReturnPolicy></ReturnPolicy>,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/learn-availability",
        element: <LearnAvailability />,
      },
      {
        path: "/scheduleDetails",
        element: <ScheduleDetails />,
      },
      {
        path: "/engagedDetails",
        element: <EngagedDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome />,
      },
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
        path: "/dashboard/billing",
        element: <Billing></Billing>,
      },
      {
        path: "/dashboard/AddReview",
        element: <AddReview></AddReview>,
      },
      // {
      //   path: "/dashboard/Schedule/:id",
      //   element: <ScheduleEventDetails></ScheduleEventDetails>,
      // },
      {
        path: "/dashboard/mySchedule/",
        element: <MySchedule></MySchedule>,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/dashboard/billings",
        element: <AllBillings></AllBillings>,
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
        element: <EventPageData />,
      },
    ],
  },
  {
    path: "/paymentStripe/:id",
    element: <PaymentStripe />,
    loader: ({ params }) =>
      fetch(`https://plan-picker-server.vercel.app/paymentCard/${params.id}`),
  },

  {
    path: "/event/:eventName/:id",
    element: <SetMeeting />,
    loader: ({ params }) =>
      fetch(`https://plan-picker-server.vercel.app/getEvent/${params.id}`),
  },
  {
    path: "/event/confirmation/:eventName/:id",
    element: <ScheduleEventDetails />,
    loader: ({ params }) =>
      fetch(`https://plan-picker-server.vercel.app/getEvent/${params.id}`),
  },
  {
    path: "/confirmedSchedule",
    element: <ConfirmedSchedule />,
  },
]);

export default router;
