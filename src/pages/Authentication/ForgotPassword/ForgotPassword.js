import { AvField, AvForm } from 'availity-reactstrap-validation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Alert, Button, Col, Row } from 'reactstrap';
import { userForgetPassword } from '../../../store/auth/forgetpwd/actions';

const ForgotPassword = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(
    (store) => store.ForgetPassword
  );
  const handleSubmit = (event, errors, values) => {
    event.preventDefault();
    console.log('call');
    if (errors.length === 0 && values)
      dispatch(userForgetPassword(values, history));
  };

  return (
    <React.Fragment>
      <div className="student-login-main-wrap pass-reset">
        <div className="student-account-form-wrap reset-password-student">
          <div className="login-form">
            <div className="acoount-email-password-area">
              <div className="account-form-title">
                <h3>Reset Password</h3>
              </div>
              <p style={{ fontSize: '14px' }}>
                We'll send you an email with further instructions on how to
                reset your password.
              </p>
              {error ? <Alert color="danger">{error}</Alert> : null}
              {message ? <Alert color="success">{message}</Alert> : null}
              <AvForm onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        type="email"
                        errorMessage="Enter Email"
                        placeholder="Enter Your Email"
                        validate={{
                          required: { value: true },
                          email: {
                            value: true,
                            errorMessage: 'Invalid Email ',
                          },
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <Button
                  color="primary"
                  type="submit"
                  disabled={loading}
                  className="account-btn-all-page"
                >
                  {loading ? 'Submitting..' : 'Send email'}
                </Button>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ForgotPassword);
