import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ResourceSelect from "./ResourceSelect";
import * as constants from "../../constants/index";
import Context from "../../state/context";
import { initialState } from "../../state/reducers/gameReducer";
import * as ACTION_TYPES from "../../state/actions/actionTypes";

function generateContextualComponent(
  state = initialState,
  dispatch = jest.fn()
) {
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ResourceSelect />
    </Context.Provider>
  );
}

it("should exist", () => {
  const { getByTestId } = render(generateContextualComponent());
  expect(getByTestId("resource-form")).toBeInTheDocument();
});

it("should render the resource select options", () => {
  const { container } = render(generateContextualComponent());
  const options = container.querySelectorAll("select > option");
  expect(options.length).toEqual(3);
});

it("should render the resource select option text", () => {
  const { container } = render(generateContextualComponent());
  const options = container.querySelectorAll("select > option");
  expect(options[0].text).toBe("Please select...");
  expect(options[1].text).toBe(constants.RESOURCE_LIST[0].name);
  expect(options[2].text).toBe(constants.RESOURCE_LIST[1].name);
});

it("should render the resource select option values", () => {
  const { container } = render(generateContextualComponent());
  const options = container.querySelectorAll("select > option");
  expect(options[0].value).toBe("");
  expect(options[1].value).toBe(constants.RESOURCE_LIST[0].name);
  expect(options[2].value).toBe(constants.RESOURCE_LIST[1].name);
});

describe("Submit button", () => {
  it("should exist", () => {
    const { getByText } = render(generateContextualComponent());
    expect(getByText(/Play/)).toBeInTheDocument();
  });

  it("should be disabled", () => {
    const { getByText } = render(generateContextualComponent());
    expect(getByText(/Play/)).toBeDisabled();
  });

  it("should be enabled", () => {
    const { container, getByText } = render(generateContextualComponent());
    const select = container.querySelector("select");
    fireEvent.change(select, {
      target: { value: constants.RESOURCE_LIST[0].name }
    });
    expect(getByText(/Play/)).not.toBeDisabled();
  });

  it("should initiate the game", () => {
    const dispatch = jest.fn();
    const { container, getByText } = render(
      generateContextualComponent(initialState, dispatch)
    );
    const select = container.querySelector("select");
    const submit = getByText(/Play/);
    fireEvent.change(select, {
      target: { value: constants.RESOURCE_LIST[0].name }
    });
    fireEvent.click(submit);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      payload: true,
      type: ACTION_TYPES.INITIATE_GAME
    });
    expect(dispatch).toHaveBeenLastCalledWith({
      payload: constants.RESOURCE_LIST[0].name,
      type: ACTION_TYPES.SET_SELECTED_RESOURCE
    });
  });
});
