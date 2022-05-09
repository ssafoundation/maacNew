import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import profileImage from "./img/Ellipse 84.png";
const AllUsersBody = () => {
  return (
    <div>
      <Container>
        <div className="all-poss-inner-wrap">
          <Row>
            <Col lg={4}>
              <div className="total-posts-count">
                <div>
                  <p>Total User</p>
                  <h3>0</h3>
                </div>
              </div>
            </Col>{" "}
            <Col lg={4}>
              <div className="total-posts-count">
                <div>
                  <p>Add New User</p>
                  <Link
                    className="btn btn-primary"
                    style={{ padding: "6px 30px" }}
                    to="/create-new-user"
                  >
                    Add
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="post-search-area-bottom-wrap">
            <div className="search-post-items-inner-wrap">
              <div className="search-post-title-left">
                <h3>All Users</h3>
              </div>
              <div className="search-post-search-box-wrap">
                <label htmlFor="post-search">
                  <i className="bx bx-search"></i>
                </label>
                <input type="search" name="" id="post-search" />
              </div>
            </div>
            <div className="search-post-items-show-wrap">
              <Row>
                <Col lg={4}>
                  <div className="single-user-wrap">
                    <div className="single-user-profile-area">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <div className=""></div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="profile-content-single-data">
                      <span>
                        <img src={profileImage} alt="" />
                        <h4>Nazmus Shakib</h4>
                        <p>Total Post (3)</p>
                      </span>
                    </div>
                  </div>
                </Col>{" "}
                <Col lg={4}>
                  <div className="single-user-wrap">
                    <div className="single-user-profile-area">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <div className=""></div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="profile-content-single-data">
                      <span>
                        <img src={profileImage} alt="" />
                        <h4>Nazmus Shakib</h4>
                        <p>Total Post (3)</p>
                      </span>
                    </div>
                  </div>
                </Col>{" "}
                <Col lg={4}>
                  <div className="single-user-wrap">
                    <div className="single-user-profile-area">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <div className=""></div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="profile-content-single-data">
                      <span>
                        <img src={profileImage} alt="" />
                        <h4>Nazmus Shakib</h4>
                        <p>Total Post (3)</p>
                      </span>
                    </div>
                  </div>
                </Col>{" "}
                <Col lg={4}>
                  <div className="single-user-wrap">
                    <div className="single-user-profile-area">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <div className=""></div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="profile-content-single-data">
                      <span>
                        <img src={profileImage} alt="" />
                        <h4>Nazmus Shakib</h4>
                        <p>Total Post (3)</p>
                      </span>
                    </div>
                  </div>
                </Col>{" "}
                <Col lg={4}>
                  <div className="single-user-wrap">
                    <div className="single-user-profile-area">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <div className=""></div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="profile-content-single-data">
                      <span>
                        <img src={profileImage} alt="" />
                        <h4>Nazmus Shakib</h4>
                        <p>Total Post (3)</p>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllUsersBody;
