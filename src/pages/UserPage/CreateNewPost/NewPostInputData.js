import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";
const NewPostInputData = () => {
  const history = useHistory();
  const [postData, setPostData] = useState({
    postBanner: "",
    category: "",
    postTitle: "",
    readingTime: "",
  });
  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };
  function handleSubmitForm(event) {
    event.preventDefault();
    console.log(postData);
    // setPostData()
  }
  const carts = JSON.parse(localStorage.getItem("postDataFirstPart"));
  console.log(carts.postBanner);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <Container>
        <div className="create-new-post-main-area-wrap">
          <div className="new-post-category-select-header">
            <div className="create-new-post-header-back-btn">
              <span onClick={goToPreviousPath}>
                <i className="bx bx-arrow-back"></i>
              </span>
            </div>
            <div className="create-new-post-header-category-select">
              <Form.Label>
                You wrote post for{" "}
                <h6 style={{ display: "inline" }}> {carts.category}</h6>
              </Form.Label>
            </div>{" "}
          </div>
          <Row>
            <Col lg={4}>
              <div className="preview-post-data-admin-view">
                <h3>{carts.postTitle}</h3>
                <img
                  src="C:\fakepath\35540096_2114355388831077_3348164699312095232_n.jpg"
                  alt=""
                />
                {carts.postBanner}
                <h3>{carts.readingTime}</h3>
              </div>
            </Col>
            <Col lg={8}>
              <div className="">
                <Form onSubmit={handleSubmitForm}>
                  <div className="create-new-post-main-content-wrap">
                    {/* <Form.Group className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type Post Title"
                        onChange={(e) =>
                          setPostData({
                            ...postData,
                            postTitle: e.target.value,
                          })
                        }
                      />
                    </Form.Group> */}
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={setEditorState}
                    />

                    <div className="submit-button-area-wrap">
                      <button>Save Draft</button>
                      <button>Next</button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NewPostInputData;
