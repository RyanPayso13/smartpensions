import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("should render a brand header", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Star Wars API Test/)).toBeInTheDocument();
});
