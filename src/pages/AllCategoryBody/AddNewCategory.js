import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddNewCategory = () => {
  return (
    <div>
      <div className="add-new-user-form-wrap">
        <Container>
          <div className="add-new-user-header-title">
            <h4>Add new category</h4>
          </div>
          <div className="add-new-user-main-form-wrap">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Add category
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddNewCategory;
