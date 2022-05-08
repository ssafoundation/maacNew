import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../../../assets/CommonScss/header.scss";
import MAAC_LOGO from "../../../assets/images/headerLogo/MAAC.svg";
import profilePic from "../../../assets/images/headerLogo/profile.png";
import AllPostsIcon from "./MiddleIcon/AllPostsIcon";
import FileText from "./MiddleIcon/FileText";
import TotalUser from "./MiddleIcon/TotalUser";
const AdminHeader = () => {
  return (
    <>
      <div className="admin-header-main-wrap">
        <Container>
          <div className="header-inner-wrap">
            <div className="header-logo-left">
              <img src={MAAC_LOGO} alt="" />
            </div>
            <div className="header-middle-navbar">
              <div className="header-admin-nav-items">
                <ul>
                  <li>
                    <a href="!#">
                      <span>
                        <FileText />
                      </span>{" "}
                      All Posts
                    </a>
                  </li>{" "}
                  <li>
                    <a href="!#">
                      <span>
                        <TotalUser />
                      </span>{" "}
                      Total User
                    </a>
                  </li>{" "}
                  <li>
                    <a href="!#">
                      <span>
                        <AllPostsIcon />
                      </span>{" "}
                      All Posts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-profile-right">
              <Dropdown className="dropdown-profileview-wrap">
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={profilePic} alt="" />
                  <i className="fa fa-angle-down"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="navbar-bottom-separetor"></div> */}
    </>
  );
};

export default AdminHeader;
