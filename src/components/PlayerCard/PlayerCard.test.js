import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";
import Context from "../../state/context";
import { initialState } from "../../state/reducers/gameReducer";

function generateContextualComponent(
  id = null,
  winCount = 0,
  state = initialState,
  dispatch = jest.fn()
) {
  return (
    <Context.Provider value={{ state, dispatch }}>
      <PlayerCard id={id} winCount={winCount} />
    </Context.Provider>
  );
}

describe("<PLayerCard />", () => {
  it("should exist", () => {
    const { container } = render(generateContextualComponent());
    const card = container.querySelector(".card");
    expect(card).toBeInTheDocument();
  });

  it("should render the player id", () => {
    const { getByText } = render(generateContextualComponent(1));
    expect(getByText(/Player 1/)).toBeInTheDocument();
  });

  it("should render zero win count", () => {
    const { getByText } = render(generateContextualComponent(1));
    expect(getByText(/0/)).toBeInTheDocument();
    expect(getByText(/wins/)).toBeInTheDocument();
  });

  it("should render the win count", () => {
    const { getByText } = render(generateContextualComponent(1, 10));
    expect(getByText(/10/)).toBeInTheDocument();
    expect(getByText(/wins/)).toBeInTheDocument();
  });
});
