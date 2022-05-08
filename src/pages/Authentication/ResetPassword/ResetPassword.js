import { AvField, AvForm } from 'availity-reactstrap-validation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, withRouter } from 'react-router-dom';
import { Alert, Button, Col, Row } from 'reactstrap';
import { toaster } from '../../../helpers/custom/Toast';
import { restPassword } from '../../../store/auth/updatePassword/actions';
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ResetPassword = ({ history }) => {
  let query = useQuery();
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((store) => store.updatePass);
  const { token } = useSelector((state) => state.Login);
  useEffect(() => {
    if (!query.get('email') || !query.get('token')) {
      toaster('warning', 'Queries are missing in URl!!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (event, errors, values) => {
    const data = {
      ...values,
      email: query.get('email'),
      accountActivateToken: query.get('token'),
    };
    if (errors.length === 0) dispatch(restPassword(data, history, token));
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
                        name="password"
                        type="password"
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
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="mb-3">
                      <AvField
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
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
                    </div>
                  </Col>
                </Row>
                <Button
                  color="primary"
                  disabled={loading}
                  type="submit"
                  className="account-btn-all-page"
                >
                  {loading ? 'Submitting...' : 'Reset'}
                </Button>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ResetPassword);
