import React from "react";
import { Container, Table } from "react-bootstrap";
// import "./allpost-body.scss";
const CategoryList = () => {
  return (
    <div>
      <Container>
        <div className="all-poss-inner-wrap">
          <div className="post-search-area-bottom-wrap">
            <div className="search-post-items-inner-wrap">
              <div className="search-post-title-left">
                <h3>
                  <span>
                    <i class="bx bx-arrow-back"></i>
                  </span>
                  ED Tech
                </h3>
              </div>
              <div className="search-post-search-box-wrap">
                <label htmlFor="post-search">
                  <i className="bx bx-search"></i>
                </label>
                <input type="search" name="" id="post-search" />
              </div>
            </div>
            <div className="search-post-items-show-wrap">
              <div className="show-all-post-data-main-wrap">
                <Table borderless>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Post title</th>
                      <th>Writer</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Data Index drives decision</td>
                      <td>Nazmus Shakib</td>
                      <td>12.12.22</td>
                      <td>Active</td>
                      <td>
                        <div className="posts-data-table-data-view-wrapper">
                          <div className="post-all-action-btn-wrap">
                            <button className="preview-btn">
                              <span>
                                <i class="bx bx-show"></i>
                              </span>{" "}
                              Preview
                            </button>
                            <button className="edit-btn ">
                              <i class="bx bx-edit-alt"></i> Edit
                            </button>
                            <button className="close-btn">
                              <i
                                style={{ color: "red" }}
                                class="bx bx-x-circle"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Data Index drives decision</td>
                      <td>Nazmus Shakib</td>
                      <td>12.12.22</td>
                      <td>Active</td>
                      <td>
                        <div className="posts-data-table-data-view-wrapper">
                          <div className="post-all-action-btn-wrap">
                            <button className="preview-btn">
                              <span>
                                <i class="bx bx-show"></i>
                              </span>{" "}
                              Preview
                            </button>
                            <button className="edit-btn ">
                              <i class="bx bx-edit-alt"></i> Edit
                            </button>
                            <button className="close-btn">
                              <i
                                style={{ color: "red" }}
                                class="bx bx-x-circle"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Data Index drives decision</td>
                      <td>Nazmus Shakib</td>
                      <td>12.12.22</td>
                      <td>Active</td>
                      <td>
                        <div className="posts-data-table-data-view-wrapper">
                          <div className="post-all-action-btn-wrap">
                            <button className="preview-btn">
                              <span>
                                <i class="bx bx-show"></i>
                              </span>{" "}
                              Preview
                            </button>
                            <button className="edit-btn ">
                              <i class="bx bx-edit-alt"></i> Edit
                            </button>
                            <button className="close-btn">
                              <i
                                style={{ color: "red" }}
                                class="bx bx-x-circle"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Data Index drives decision</td>
                      <td>Nazmus Shakib</td>
                      <td>12.12.22</td>
                      <td>Active</td>
                      <td>
                        <div className="posts-data-table-data-view-wrapper">
                          <div className="post-all-action-btn-wrap">
                            <button className="preview-btn">
                              <span>
                                <i class="bx bx-show"></i>
                              </span>{" "}
                              Preview
                            </button>
                            <button className="edit-btn ">
                              <i class="bx bx-edit-alt"></i> Edit
                            </button>
                            <button className="close-btn">
                              <i
                                style={{ color: "red" }}
                                class="bx bx-x-circle"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryList;
