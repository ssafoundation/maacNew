import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";

function TextEditor() {
  let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    title: "",
  });
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

  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      console.log(userInfo.description.value);
      // axios
      //   .post(`https://jsonplaceholder.typicode.com/posts`, {
      //     title: userInfo.title,
      //     description: userInfo.description.value,
      //   })
      //   .then((res) => {
      //     if (res.data.success === true) {
      //       history.push("/");
      //     }
      //   });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <form onSubmit={addDetails} className="update__forms">
        <div className="form-row">
          <div className="form-group col-md-12 editor">
            <Editor
              editorState={description}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
            <textarea
              style={{ display: "none" }}
              disabled
              ref={(val) => (userInfo.description = val)}
              value={draftToHtml(convertToRaw(description.getCurrentContent()))}
            />
          </div>

          <div className="form-group col-sm-12 text-right">
            <button type="submit" className="btn btn__theme">
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default TextEditor;
