import React from "react";
import Badge from "react-bootstrap/Badge";
import * as utils from "../../libs/utils";

const WinningAttribute = ({ attribute = "" }) => {
  return (
    <React.Fragment>
      Winning attribute:{" "}
      {attribute !== "" && (
        <Badge variant="info">{utils.formatItemForDisplay(attribute)}</Badge>
      )}
    </React.Fragment>
  );
};

export default WinningAttribute;
