import AddNewCategory from "../pages/AllCategoryBody/AddNewCategory";
import AllCategoryBody from "../pages/AllCategoryBody/AllCategoryBody";
import CategoryList from "../pages/AllCategoryBody/CategoryList";
import AllPostsBody from "../pages/AllPostsBody/AllPostsBody";
import AddNewUser from "../pages/AllUsersBody/AddNewUser";
import AllUsersBody from "../pages/AllUsersBody/AllUsersBody";
import Login from "../pages/Authentication/Login/Index";
import SignUp from "../pages/Authentication/Register/SignUp";

export const openRoute = [
  // { path: "/", component: AdminMain },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  // { path: "/forgot-password", component: ForgotPassword },
  // { path: "/reset-password", component: ResetPassword },
];

export const privateRoute = [
  { path: "/", component: AllPostsBody },
  { path: "/all-posts", component: AllPostsBody },
  { path: "/total-users", component: AllUsersBody },
  { path: "/create-new-user", component: AddNewUser },
  { path: "/total-category", component: AllCategoryBody },
  { path: "/create-new-category", component: AddNewCategory },
  { path: "/view-category-list", component: CategoryList, role: "admin" },
  // { path: "/dashboard", component: Dashboard },
];
export const userRoute = [
  { path: "/view-category-list", component: CategoryList },
  // { path: "/dashboard", component: Dashboard },
];
