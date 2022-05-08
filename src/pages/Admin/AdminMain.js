import React from "react";
import "./admin.scss";
import AdminHeader from "./AdminHeader/AdminHeader";
import AllPostsBody from "./AllPostsBody/AllPostsBody";
const AdminMain = () => {
  return (
    <div>
      <AdminHeader />
      <AllPostsBody />
    </div>
  );
};

export default AdminMain;
