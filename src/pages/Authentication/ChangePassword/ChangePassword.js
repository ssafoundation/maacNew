import { AvField, AvForm } from 'availity-reactstrap-validation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, Row } from 'reactstrap';
import { updatePassword } from '../../../store/auth/updatePassword/actions';

const ChangePassword = ({ history }) => {
  const [viewPassword] = useState(false);
  const [viewPassword1] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((store) => store.updatePass);
  const { token } = useSelector((state) => state.Login);

  const handleSubmit = (event, errors, values) => {
    if (errors.length === 0)
      // console.log(
      //   `file: ForgotPassword.js ~ line 7 ~ handleSubmit ~ values`,
      //   values
      // );
      dispatch(updatePassword(values, history, token));
  };
  return (
    <React.Fragment>
      <div className="student-login-main-wrap pass-reset">
        <div className="student-account-form-wrap reset-password-student">
          <div className="login-form">
            <div className="acoount-email-password-area">
              <div className="account-form-title">
                <h3>Change Password</h3>
              </div>
              {/* <p style={{ fontSize: '14px' }}>
                We'll send you an email with further instructions on how to
                change your password.
              </p> */}
              {error ? <Alert color="danger">{error}</Alert> : null}
              {message ? <Alert color="success">{message}</Alert> : null}
              <AvForm onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <AvField
                        name="currentPassword"
                        type="password"
                        label="Current Password"
                        // placeholder="Password length should be 8"
                        errorMessage="Enter Current Password"
                        placeholder="Enter Current Password"
                        validate={{
                          required: { value: true },
                          minLength: {
                            value: 8,
                            errorMessage: 'Password must be 8 characters',
                          },
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mb-3 position-relative">
                      <AvField
                        name="password"
                        type={viewPassword ? 'text' : 'password'}
                        label="New Password"
                        // placeholder="Password length should be 8"
                        errorMessage="Enter New Password"
                        placeholder="Enter New Password"
                        validate={{
                          required: { value: true },
                          minLength: {
                            value: 8,
                            errorMessage: 'Password must be 8 characters',
                          },
                        }}
                      />
                      {/* <span
                        className=" position-absolute"
                        style={{ top: '56%', right: '2%' }}
                        onClick={() => setViewPassword(!viewPassword)}
                      >
                        {viewPassword ? (
                          <i className="fa fa-eye"></i>
                        ) : (
                          <i className="fa fa-eye-slash"></i>
                        )}
                      </span> */}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mb-3 position-relative">
                      <AvField
                        name="confirmPassword"
                        label="Confirm Password"
                        type={viewPassword1 ? 'text' : 'password'}
                        placeholder="Enter Confirm Password"
                        errorMessage="Enter confirm password"
                        validate={{
                          required: { value: true },
                          match: {
                            value: 'password',
                            errorMessage: 'Password not matched',
                          },
                        }}
                      />
                      {/* <span
                        className=" position-absolute"
                        style={{ top: '56%', right: '2%' }}
                        onClick={() => setViewPassword1(!viewPassword1)}
                      >
                        {viewPassword1 ? (
                          <i className="fa fa-eye"></i>
                        ) : (
                          <i className="fa fa-eye-slash"></i>
                        )}
                      </span> */}
                    </div>
                  </Col>
                </Row>
                <Button
                  color="primary"
                  disabled={loading}
                  type="submit"
                  className="account-btn-all-page"
                >
                  {loading ? 'Submitting...' : 'Update'}
                </Button>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
