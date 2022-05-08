import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Email from "../../../assets/images/email.svg";
import "./check-email.scss";
const CheckEmail = ({ history }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="student-login-main-wrap">
          <div className="student-account-form-wrap">
            <div className="login-form">
              <div className="acoount-email-password-area ">
                <Row>
                  <Col md="5" className="my-auto">
                    <img src={Email} alt="" />
                  </Col>
                  <Col md="7" className="my-auto">
                    <div className="ms-2">
                      <h5>Check your email.</h5>
                      <span>
                        We sent you an email with an activation link. Click on
                        it to activate your account.
                      </span>
                      <div className="mt-4">
                        <button
                          onClick={() => history.push("/")}
                          className="btn btn-primary"
                        >
                          Got It
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(CheckEmail);
