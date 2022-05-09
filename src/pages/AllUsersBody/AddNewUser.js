import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddNewUser = () => {
  return (
    <div>
      <div className="add-new-user-form-wrap">
        <Container>
          <div className="add-new-user-header-title">
            <h4>Add new user</h4>
          </div>
          <div className="add-new-user-main-form-wrap">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" placeholder="file" />
              </Form.Group>
              <hr className="my-4 d-block" />
              <h5>Login Info</h5>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="type email" />
              </Form.Group>{" "}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="type password" />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Add user
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddNewUser;
