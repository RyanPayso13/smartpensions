import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TopTrumpAttributeList from "./TopTrumpAttributeList";

function generateComponent(listData = {}, handleOnClick = jest.fn()) {
  return (
    <TopTrumpAttributeList listData={listData} handleOnClick={handleOnClick} />
  );
}

describe("<TopTrumpAttributeList/>", () => {
  const testData = {
    name: "Boba Fett",
    height: 183,
    mass: 78
  };

  it("should exist", () => {
    const { container } = render(generateComponent(testData));
    const list = container.querySelector(".list-group");
    expect(list).toBeInTheDocument();
  });

  it("should should be the flush list variant", () => {
    const { container } = render(generateComponent(testData));
    const list = container.querySelector(".list-group-flush");
    expect(list).toBeInTheDocument();
  });

  it("should render the list", () => {
    const { container } = render(generateComponent(testData));
    const list = container.querySelectorAll(".list-group-item");
    expect(list.length).toEqual(3);
  });

  it("should render the trump attributes", () => {
    const { getByText } = render(generateComponent(testData));
    expect(getByText(/name/)).toBeInTheDocument();
    expect(getByText(/height/)).toBeInTheDocument();
    expect(getByText(/mass/)).toBeInTheDocument();
  });

  it("should render the trump attributes", () => {
    const { getByText } = render(generateComponent(testData));
    expect(getByText(/Boba Fett/)).toBeInTheDocument();
    expect(getByText(/183/)).toBeInTheDocument();
    expect(getByText(/78/)).toBeInTheDocument();
  });

  it("should call the click handler", () => {
    const callback = jest.fn();
    const { container } = render(generateComponent(testData, callback));
    fireEvent.click(container.querySelectorAll("button.list-group-item")[0]);
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith("height");
  });

  it("should not call the click handler", () => {
    const callback = jest.fn();
    const { container } = render(generateComponent(testData, callback));
    fireEvent.click(container.querySelector("div.list-group-item"));
    expect(callback).not.toHaveBeenCalled();
  });
});
