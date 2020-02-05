import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as constants from "../../constants/index";

const ResourceSelect = () => {
  const resourceRef = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const handleOnChange = event => setIsDisabled(event.target.value === "");

  return (
    <Form data-testid="resource-form">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control as="select" ref={resourceRef} onChange={handleOnChange}>
            <option value="">Please select...</option>
            {constants.RESOURCE_LIST.length > 0 &&
              constants.RESOURCE_LIST.map((resource, index) => {
                return (
                  <option key={index} value={resource.name}>
                    {resource.name}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Group as={Row}>
        <Col>
          <Button type="submit" disabled={isDisabled}>
            Play
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ResourceSelect;
