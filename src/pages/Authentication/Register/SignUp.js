import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Button, Col, Row } from "reactstrap";
// import {
//   registerUser,
//   registerUserSuccessful,
// } from "../../../store/auth/register/actions";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, loading, message } = useSelector((state) => ({
    error: state.Account.registrationError,
    loading: state.Account.loading,
    message: state.Account.message,
  }));
  // const data = useSelector((state) => state.Account);
  // console.log(`file: SignUp.js ~ line 19 ~ SignUp ~ data`, data);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // dispatch(registerUser(formData, history));
  }

  useEffect(() => {
    // dispatch(registerUserSuccessful(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="student-login-main-wrap signup-page">
        <div className="student-account-form-wrap">
          <div className="login-form">
            <div className="acoount-email-password-area">
              <div className="account-form-title">
                <h3>Signup</h3>
              </div>
              {error ? <Alert color="danger">{error}</Alert> : null}
              {message ? <Alert color="success">{message}</Alert> : null}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Control
                        name="name"
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        label="Full Name"
                        type="text"
                        placeholder="Enter Full Name"
                        required
                      />
                    </div>
                  </Col>
                </Row>
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
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Control
                        name="phoneNumber"
                        label="Phone Number"
                        placeholder="Enter Phone"
                        type="number"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        required
                        min={0}
                      />
                    </div>
                  </Col>
                </Row>
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
                  <Col md={12}>
                    <div className="mb-3">
                      <Form.Control
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="Enter Confirm Password"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
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
                        {loading ? "Registering..." : "Register"}
                      </Button>
                    </div>
                  </React.Fragment>
                </Row>
              </Form>
            </div>
            {/* <div className="account-with-social-media-link">
              <h5>Sign in with</h5>
              <div className="account-with-social-media-single-link">
                <Link to="">
                  <img src={facebook} alt="" />
                </Link>{' '}
                <Link to="" className="account-with-social-media-google-plus">
                  <img src={google} alt="" />
                </Link>
              </div>
              <div className="new-account">
                <p>
                  Already have an account ? <Link to="/login">Login now</Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
