import React from "react";
import "../layout.scss";
import MainHeader from "./../../Common/AdminHeader/MainHeader";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      <div className="main-layout-wrap">
        <div className="layout-body-right-main">
          <div className="">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
