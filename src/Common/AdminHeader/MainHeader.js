import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../assets/CommonScss/header.scss";
import MAAC_LOGO from "../../assets/images/headerLogo/MAAC.svg";
import profilePic from "../../assets/images/headerLogo/profile.png";
import { logoutUser } from "../../store/auth/login/actions";
import AllPostsIcon from "./MiddleIcon/AllPostsIcon";
import FileText from "./MiddleIcon/FileText";
import TotalUserIcon from "./MiddleIcon/TotalUserIcon";
const MainHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logoutUser(history));
  };
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
                  </li>{" "}
                  <li>
                    <Link to="/user">
                      <span>
                        <AllPostsIcon />
                      </span>{" "}
                      User
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
                  <Dropdown.Item onClick={() => handleLogout()}>
                    Logout
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
