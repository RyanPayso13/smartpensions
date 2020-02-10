import React from "react";
import { render } from "@testing-library/react";
import PlayerIdentifier from "./PlayerIdentifier";

function generateComponent(id = null) {
  return <PlayerIdentifier id={id} />;
}

describe("<PlayerIdentifier />", () => {
  it("should exist", () => {
    const { getByText } = render(generateComponent());
    expect(getByText(/Player/)).toBeInTheDocument();
  });

  it("should render the id", () => {
    const { getByText } = render(generateComponent(1));
    expect(getByText(/Player 1/)).toBeInTheDocument();
  });
});
