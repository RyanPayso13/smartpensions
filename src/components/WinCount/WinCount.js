import React from "react";
import Badge from "react-bootstrap/Badge";

const WinCount = ({ count = 0 }) => {
  return (
    <React.Fragment>
      <Badge pill variant="success">
        {count}
      </Badge>
      &nbsp;wins
    </React.Fragment>
  );
};

export default WinCount;
