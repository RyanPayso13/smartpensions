import React from "react";
import { render } from "@testing-library/react";
import WinCount from "./WinCount";

function generateComponent(count = 0) {
  return <WinCount count={count} />;
}

describe("<WinCount />", () => {
  it("should exist", () => {
    const { getByText } = render(generateComponent());
    expect(getByText(/wins/)).toBeInTheDocument();
  });

  it("should render 0 wins by default", () => {
    const { getByText } = render(generateComponent());
    expect(getByText(/0/)).toBeInTheDocument();
  });

  it("should render the win count as a <Badge />", () => {
    const { container, getByText } = render(generateComponent(99));
    expect(getByText(/99/)).toBeInTheDocument();
    expect(container.querySelector(".badge-success")).toBeInTheDocument();
  });
});
