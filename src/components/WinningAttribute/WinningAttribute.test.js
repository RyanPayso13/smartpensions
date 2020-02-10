import React from "react";
import { render } from "@testing-library/react";
import * as utils from "../../libs/utils";
import WinningAttribute from "./WinningAttribute";

function generateComponent(attribute = "") {
  return <WinningAttribute attribute={attribute} />;
}

describe("<WinningAttribute />", () => {
  it("should exist", () => {
    const { getByText } = render(generateComponent());
    expect(getByText(/Wining attribute:/)).toBeInTheDocument();
  });

  it("should render the attribute as a <Badge />", () => {
    const { container, getByText } = render(generateComponent("mass"));
    expect(getByText(/mass/)).toBeInTheDocument();
    expect(container.querySelector(".badge-info")).toBeInTheDocument();
  });

  it("should format the attribute value", () => {
    const spy = jest.spyOn(utils, "formatItemForDisplay");
    const text = "cargo_capacity";
    const { getByText } = render(generateComponent(text));
    expect(getByText(/cargo capacity/)).toBeInTheDocument();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(text);
  });
});
