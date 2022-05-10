import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import imageUpload from "../img/gallery.svg";

const CreateNewPost = () => {
  // const [value, onChange] = useState();
  const history = useHistory();
  const [postData, setPostData] = useState({
    postBanner: "",
    category: "",
    postTitle: "",
    readingTime: "",
  });

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log(postData);
    history.push("/create-new-post-input-data");
    // setPostData()
  }

  useEffect(() => {
    localStorage.setItem("postDataFirstPart", JSON.stringify(postData));
  }, [postData]);
  console.log(postData);
  return (
    <div>
      <Container>
        <div className="create-new-post-main-area-wrap">
          <Form onSubmit={handleSubmitForm}>
            <div className="new-post-category-select-header">
              <div className="create-new-post-header-back-btn">
                <span>
                  <i className="bx bx-arrow-back"></i>
                </span>
              </div>
              <div className="create-new-post-header-category-select">
                <Form.Label>You wrote post for</Form.Label>
                <Form.Select
                  aria-label="select Category"
                  required
                  onChange={(e) =>
                    setPostData({ ...postData, category: e.target.value })
                  }
                >
                  <option value="ed-tech">Ed-tech</option>
                  <option value="data-tech">Data tech</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>{" "}
            </div>
            <div className="create-new-post-main-content-wrap">
              <Form.Group
                className="mb-3 image-upload-post-main-part"
                required
                onChange={(e) =>
                  setPostData({ ...postData, postBanner: e.target.value })
                }
              >
                <Form.Label htmlFor="image-upload">
                  <div className="">
                    <span>
                      <img src={imageUpload} alt="" />
                      <h6>Upload image</h6>
                    </span>
                  </div>
                </Form.Label>
                <Form.Control type="file" id="image-upload" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type Post Title"
                  required
                  onChange={(e) =>
                    setPostData({ ...postData, postTitle: e.target.value })
                  }
                />
              </Form.Group>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Type Post Title" />
                  </Form.Group>
                </Col>{" "}
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Reading time</Form.Label>
                    <Form.Control
                      type="number"
                      required
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          readingTime: e.target.value,
                        })
                      }
                      placeholder="Type Post Title"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="submit-button-area-wrap">
                <button>Save Draft</button>
                <button>Next</button>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateNewPost;
