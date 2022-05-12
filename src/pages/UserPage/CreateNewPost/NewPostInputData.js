import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";
const NewPostInputData = () => {
  const history = useHistory();

  const [userInfo, setuserInfo] = useState({});
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      console.log(userInfo.description.value);
    } catch (error) {
      throw error;
    }
  };
  const carts = JSON.parse(localStorage.getItem("postDataFirstPart"));
  console.log(carts.postBanner);

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }
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
                <img src={carts.postBanner} alt="" />
                {carts.postBanner}
                <h3>{carts.readingTime}</h3>
              </div>
            </Col>
            <Col lg={8}>
              <div className="">
                <Form onSubmit={handleSubmitForm}>
                  <div className="create-new-post-main-content-wrap">
                    <div className="form-row">
                      <div className="form-group col-md-12 editor">
                        <Editor
                          editorState={description}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={onEditorStateChange}
                          toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: {
                              uploadCallback: uploadImageCallBack,
                              alt: { present: true, mandatory: true },
                            },
                          }}
                        />
                        <textarea
                          style={{ display: "none" }}
                          disabled
                          ref={(val) => (userInfo.description = val)}
                          value={draftToHtml(
                            convertToRaw(description.getCurrentContent())
                          )}
                        />
                      </div>

                      {/* <div className="submit-button-area-wrap">
          <button>Save Draft</button>
          <button>Next</button>
        </div> */}
                    </div>

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
