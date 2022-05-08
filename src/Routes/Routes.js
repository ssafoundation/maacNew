import Login from "../pages/Authentication/Login/Index";
import SignUp from "../pages/Authentication/Register/SignUp";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminMain from "./../pages/Admin/AdminMain";

export const openRoute = [
  // { path: "/", component: AdminMain },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  // { path: "/forgot-password", component: ForgotPassword },
  // { path: "/reset-password", component: ResetPassword },
];

export const privateRoute = [
  { path: "/", component: AdminMain },
  { path: "/admin", component: AdminMain },
  // { path: "/dashboard", component: Dashboard },
];
