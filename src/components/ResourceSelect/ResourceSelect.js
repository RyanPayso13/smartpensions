import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as constants from "../../constants/index";
import Context from "../../state/context";
import * as actions from "../../state/actions/actionCreators";

const ResourceSelect = () => {
  const { dispatch } = useContext(Context);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleOnChange = event => setIsDisabled(event.target.value === "");
  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    return dispatch(actions.initiateGame(true));
  };

  return (
    <Form data-testid="resource-form" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control as="select" onChange={handleOnChange}>
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
