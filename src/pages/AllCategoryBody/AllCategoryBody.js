import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const AllCategoryBody = () => {
  return (
    <div>
      <Container>
        <div className="all-poss-inner-wrap">
          <Row>
            <Col lg={4}>
              <div className="total-posts-count">
                <div>
                  <p>Total Category</p>
                  <h3>0</h3>
                </div>
              </div>
            </Col>{" "}
            <Col lg={4}>
              <div className="total-posts-count">
                <div>
                  <p>Add New Category</p>
                  <Link
                    className="btn btn-primary"
                    style={{ padding: "6px 30px" }}
                    to="/create-new-category"
                  >
                    <span>
                      <i className="bx bx-plus"></i>
                    </span>
                    Add
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="post-search-area-bottom-wrap">
            <div className="search-post-items-inner-wrap">
              <div className="search-post-title-left">
                <h3>All Categorie(s)</h3>
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
                  <Link
                    to="/view-category-list"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <div className="single-user-wrap category-page">
                      <div className="single-user-profile-area">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
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
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="category-content-single-data">
                        <span>
                          <h4>ED Tech</h4>
                          <p>
                            Total Post (3){" "}
                            <span>
                              <i className="bx bx-chevrons-right"></i>
                            </span>
                          </p>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Col>{" "}
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllCategoryBody;
