import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/CommonScss/header.scss";
import MAAC_LOGO from "../../assets/images/headerLogo/MAAC.svg";
import profilePic from "../../assets/images/headerLogo/profile.png";
import AllPostsIcon from "./MiddleIcon/AllPostsIcon";
import FileText from "./MiddleIcon/FileText";
import TotalUserIcon from "./MiddleIcon/TotalUserIcon";
const MainHeader = () => {
  return (
    <>
      <div className="admin-header-main-wrap">
        <Container>
          <div className="header-inner-wrap">
            <div className="header-logo-left">
              <Link to="/">
                <img src={MAAC_LOGO} alt="" />
              </Link>
            </div>
            <div className="header-middle-navbar">
              <div className="header-admin-nav-items">
                <ul>
                  <li>
                    <Link to="/all-posts">
                      <span>
                        <FileText />
                      </span>{" "}
                      All Posts
                    </Link>
                  </li>{" "}
                  <li>
                    <Link to="/total-users">
                      <span>
                        <TotalUserIcon />
                      </span>{" "}
                      Total User
                    </Link>
                  </li>{" "}
                  <li>
                    <Link to="/total-category">
                      <span>
                        <AllPostsIcon />
                      </span>{" "}
                      Category
                    </Link>
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

export default MainHeader;
