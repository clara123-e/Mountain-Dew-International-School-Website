import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPasswordRequest from "../pages/ForgotPasswordRequest";
import ForgotPasswordReset from "../pages/ForgotPasswordReset";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export const unauthRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPasswordRequest /> },
  { path: "/reset-password", element: <ForgotPasswordReset /> },
];

export const authRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
];