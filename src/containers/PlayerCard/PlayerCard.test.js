import React from "react";
import { render } from "@testing-library/react";
import Context from "../../state/context";
import PlayerCard from "./PlayerCard";
import { initialState } from "../../state/reducers/gameReducer";

function generateComponent(id = null, state = initialState) {
  return (
    <Context.Provider value={{ state }}>
      <PlayerCard id={id} />
    </Context.Provider>
  );
}

describe("<PlayerCard />", () => {
  it("should exist", () => {
    const { container } = render(generateComponent(1));
    expect(container.querySelector(".card")).toBeInTheDocument();
  });

  it("should render the player identifier", () => {
    const { getByText } = render(generateComponent(1));
    expect(getByText(/Player 1/)).toBeInTheDocument();
  });

  it("should render the player wins", () => {
    const { getByText } = render(generateComponent(1));
    expect(getByText(/0/)).toBeInTheDocument();
    expect(getByText(/wins/)).toBeInTheDocument();
  });

  it("should render the winning attribute", () => {
    const { getByText } = render(generateComponent(1));
    expect(getByText(/Winning attribute:/)).toBeInTheDocument();
  });
});
