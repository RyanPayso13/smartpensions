import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const TopTrumpAttributeList = ({ listData = {}, handleOnClick = null }) => {
  return (
    <ListGroup variant="flush">
      {Object.keys(listData).map((item, index) => (
        <React.Fragment key={index}>
          {item === "name" ? (
            <ListGroup.Item>
              {item}: <strong>{listData[item]}</strong>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              action
              onClick={() => {
                handleOnClick(item);
              }}
            >
              {item}: <strong>{listData[item]}</strong>
            </ListGroup.Item>
          )}
        </React.Fragment>
      ))}
    </ListGroup>
  );
};

export default TopTrumpAttributeList;
