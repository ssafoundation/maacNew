import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AllPostsBody = () => {
  return (
    <div>
      <Container>
        <div className="all-poss-inner-wrap">
          <Row>
            <Col lg={4}>
              <div className="total-posts-count">
                <div>
                  <p>total post</p>
                  <h3>30</h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AllPostsBody;
