import React, { useState } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink, useHistory } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  let history = useHistory();
  return (
    <React.Fragment>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className={
          isOpen ? "navbar-main-wrap-data-wrap" : "navbar-main-wrap-data-wrap-"
        }
        enableOverlay={false}
      >
        <div className="d-block gap-2">
          <Navbar>
            <Container>
              <div className="navbar-left-area-wrap-nav-item">
                <nav className="me-auto">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/dashboard">
                    Action
                  </NavLink>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavLink className="nav-link" to="/dashboard">
                      Action
                    </NavLink>
                    <NavLink className="nav-link" to="drop-1">
                      Another action
                    </NavLink>
                  </NavDropdown>
                </nav>
              </div>
            </Container>
          </Navbar>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
