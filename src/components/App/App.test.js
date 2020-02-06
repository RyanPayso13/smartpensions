import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  it("should render a brand header", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Star Wars API Test/)).toBeInTheDocument();
  });

  it("should render <ResourceSelect/>", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("resource-form")).toBeInTheDocument();
  });

  it("should render <Player/>", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Player 1/)).toBeInTheDocument();
    expect(getByText(/Player 2/)).toBeInTheDocument();
  });
});
