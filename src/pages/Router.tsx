import React from "react";
import { useRoutes, RouteObject, Outlet } from "react-router-dom";
import AdminConsole from "./AdminConsole";
import ForgotPassword from "./ForgotPassword";
import PrivacyTerms from "./PrivacyTerms";
import RonuxAdmin from "./RonuxAdmin";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Skills from "./freelancer/Skills";
import UserConsole from "./UserConsole";
import EmailVerification from "./EmailVerification";
import ClientProfile from './profile/ClientProfile';
import FreelancerProfile from "./profile/Freelancerprofile";
import BlockedIP from "./blocked/BlockedIP";
import BlockedKeyword from "./blocked/BlockedKeyword";
import AdminActivityLog from "./activityLog/admin";
import UserActivityLog from "./activityLog/user";
import OccupationAndSkills from "./occupationAndSkills/OccupationAndSkills";
import ReviewID from "./Review/ReviewID";
import ReviewFreelancer from "./Review/ReviewFreelancer";
import JobDetails from "./Review/JobDetails";
import ReviewReport from "./report/ReviewReport";
import HomePage from "./homepage/HomePage";
import PrivacyPolicy from "./homepage/PrivacyPolicy";
import TermsOfService from "./homepage/TermsOfService";
import ContactUs from "./homepage/ContacUs";
import AboutUs from "./homepage/AboutUs";
import Search from "./Search";
import AuthGuard from "../components/AuthGuard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Settings from "./settings/PersonalInfo";
import PersonalInfo from "./settings/PersonalInfo";

function MainLayout() {
  return (
    <>
      {/* <AuthGuard /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function SignLayout() {
  return (
    <>
      {/* <AuthGuard /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default function Router() {
  const router: RouteObject[] = [
    {
      path: "/",
      element: <SignLayout />,
      children: [
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/verification-email",
          element: <EmailVerification />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        }
      ]
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "terms",
          element: <TermsOfService />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "/users/client",
          element: <ClientProfile />
        },
        {
          path: "/users/freelancer",
          element: <FreelancerProfile />
        },
        {
          path: "/blocked-ips",
          element: <BlockedIP />
        },
        {
          path: "/blocked-keywords",
          element: <BlockedKeyword />
        },
        {
          path: "/activity-admins",
          element: <AdminActivityLog />
        },
        {
          path: "/activity-users",
          element: <UserActivityLog />
        },
        {
          path: "/about",
          element: <AboutUs />
        },
        {
          path: "/settings/personal",
          element: <PersonalInfo />
        },
        {
          path: "/settings/security",
          element: <PersonalInfo />
        },
        {
          path: "/settings/currency",
          element: <PersonalInfo />
        },
        {
          path: "/freelancers",
          element: <ReviewFreelancer />
        },
        {
          path: "/jobs",
          element: <JobDetails />
        },
        {
          path: "/apply-freelancer",
          element: <Skills />
        },
        {
          path: "/search/freelancers",
          element: <Search />
        },
      ],
    },
  ];

  return useRoutes(router);
}
