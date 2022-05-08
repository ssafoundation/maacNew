import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Row } from "reactstrap";
// import Lock from "../../../assets/images/Icon/lock.svg";
import { loginUser, loginUserError } from "../../../store/auth/login/actions";
import "./acoount.css";

const Login = ({ history, location }) => {
  console.log(`file: Login.js ~ line 13 ~ Login ~ history`, location);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => ({
    error: state.Login.error,
    loading: state.Login.loading,
  }));

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    dispatch(loginUser(formData, history));
    history.push("/");
    console.log("gfdfd");
  }

  useEffect(() => {
    dispatch(loginUserError(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const data = useSelector((state) => state.Login);
  // console.log(`file: SignUp.js ~ line 19 ~ SignUp ~ data`, data);
  // console.log(id);

  // const handleSubmit = (event, errors, values) => {
  //   event.preventDefault();
  //   if (errors?.length === 0) {
  //     if (values) dispatch(loginUser(values, history));
  //   }
  // };

  const [viewPassword, setViewPassword] = useState(false);
  return (
    <React.Fragment>
      <div className="student-login-main-wrap">
        <div className="student-account-form-wrap">
          <div className="login-form">
            <div className="acoount-email-password-area">
              <div className="account-form-title">
                <h3>Login</h3>
              </div>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Control
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="Enter Email"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </Col>
                </Row>{" "}
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Control
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <React.Fragment>
                    <div className="flex-wrap gap-2 col-md-12">
                      <Button
                        type="submit"
                        color="primary"
                        disabled={loading}
                        className=""
                      >
                        {loading ? "Logging In..." : "Login"}
                      </Button>
                    </div>
                  </React.Fragment>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);
