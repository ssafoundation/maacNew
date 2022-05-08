import React from "react";
import "../layout.scss";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="main-layout-wrap">
        <div className="layout-body-right-main">
          <div className="">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
