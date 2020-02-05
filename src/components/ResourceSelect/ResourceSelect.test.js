import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ResourceSelect from "./ResourceSelect";
import * as constants from "../../constants/index";

it("should exist", () => {
  const { getByTestId } = render(<ResourceSelect />);
  expect(getByTestId("resource-form")).toBeInTheDocument();
});

it("should render the resource select options", () => {
  const { container } = render(<ResourceSelect />);
  const options = container.querySelectorAll("select > option");
  expect(options.length).toEqual(3);
});

it("should render the resource select option text", () => {
  const { container } = render(<ResourceSelect />);
  const options = container.querySelectorAll("select > option");
  expect(options[0].text).toBe("Please select...");
  expect(options[1].text).toBe(constants.RESOURCE_LIST[0].name);
  expect(options[2].text).toBe(constants.RESOURCE_LIST[1].name);
});

it("should render the resource select option values", () => {
  const { container } = render(<ResourceSelect />);
  const options = container.querySelectorAll("select > option");
  expect(options[0].value).toBe("");
  expect(options[1].value).toBe(constants.RESOURCE_LIST[0].name);
  expect(options[2].value).toBe(constants.RESOURCE_LIST[1].name);
});

describe("Submit button", () => {
  it("should exist", () => {
    const { getByText } = render(<ResourceSelect />);
    expect(getByText(/Play/)).toBeInTheDocument();
  });

  it("should be disabled", () => {
    const { getByText } = render(<ResourceSelect />);
    expect(getByText(/Play/)).toBeDisabled();
  });

  it("should be enabled", () => {
    const { container, getByText } = render(<ResourceSelect />);
    const select = container.querySelector("select");
    fireEvent.change(select, {
      target: { value: constants.RESOURCE_LIST[0].name }
    });
    expect(getByText(/Play/)).not.toBeDisabled();
  });
});
