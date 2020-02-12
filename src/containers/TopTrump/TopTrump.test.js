import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { FetchMock, fetchMock } from "@react-mock/fetch";
import TopTrump from "./TopTrump";
import * as constants from "../../constants/index";
import Context from "../../state/context";
import { initialState } from "../../state/reducers/gameReducer";
import * as utils from "../../libs/utils";
import * as ACTION_TYPES from "../../state/actions/actionTypes";

function generateContextualComponent(
  state = initialState,
  dispatch = jest.fn(),
  resp = null
) {
  return (
    <FetchMock
      mocks={[
        {
          matcher: `${constants.API_BASE_URL}/${state.game.resource}/2`,
          response: resp
        }
      ]}
    >
      <Context.Provider value={{ state, dispatch }}>
        <TopTrump id="1" />
      </Context.Provider>
    </FetchMock>
  );
}

describe("<TopTrump />", () => {
  const resp = { name: "C-3PO", height: "167", mass: "75" };

  beforeEach(() => {
    jest.spyOn(utils, "getRandomIntFromRange").mockImplementation(() => {
      return 2;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should not render", () => {
    const { container } = render(generateContextualComponent());
    const list = container.querySelector(".list-group");
    expect(list).not.toBeInTheDocument();
  });

  it("should not call the API", () => {
    render(generateContextualComponent());
    expect(fetchMock.called()).toBe(false);
  });

  it("should render the loader", async () => {
    const { container } = render(
      generateContextualComponent(
        {
          game: {
            count: 1,
            resource: constants.RESOURCE_LIST[1].name
          }
        },
        jest.fn(),
        resp
      )
    );
    expect(container.querySelector(".spinner-border")).toBeInTheDocument();
    await waitForElement(() => container.querySelector(".list-group"));
  });

  it("should render an error message", async () => {
    const { getByText } = render(
      generateContextualComponent({
        game: {
          count: 1,
          resource: constants.RESOURCE_LIST[1].name
        },
        throws: new Error("Some No Good Error")
      })
    );
    const error = await waitForElement(() =>
      getByText(/There has been an error!/)
    );
    expect(error).toBeInTheDocument();
  });

  it("should render the attribute list", async () => {
    const { container } = render(
      generateContextualComponent(
        {
          game: {
            count: 1,
            resource: constants.RESOURCE_LIST[1].name
          }
        },
        jest.fn(),
        resp
      )
    );
    const list = await waitForElement(() =>
      container.querySelector(".list-group")
    );
    expect(list).toBeInTheDocument();
  });

  it("should dispatch the current top trump for that player", async () => {
    const dispatch = jest.fn();
    const { container } = render(
      generateContextualComponent(
        {
          game: {
            count: 1,
            resource: constants.RESOURCE_LIST[1].name
          }
        },
        dispatch,
        resp
      )
    );

    await waitForElement(() => container.querySelector(".list-group"));
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      payload: {
        id: "1",
        topTrump: resp
      },
      type: ACTION_TYPES.SET_TOP_TRUMP_BY_PLAYER_ID
    });
  });

  it("should dispatch the winner to increment their count", async () => {
    const spy = jest
      .spyOn(utils, "determineGameWinner")
      .mockImplementation(() => {
        return 1;
      });
    const dispatch = jest.fn();
    const { getByText } = render(
      generateContextualComponent(
        {
          game: {
            count: 1,
            resource: constants.RESOURCE_LIST[1].name
          }
        },
        dispatch,
        resp
      )
    );

    const heightAttr = await waitForElement(() => getByText(/167/));

    expect(heightAttr).toBeInTheDocument();
    fireEvent.click(heightAttr);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(
      {
        game: {
          count: 1,
          resource: "people"
        }
      },
      "1",
      { height: "167", mass: "75", name: "C-3PO" },
      "height"
    );
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      payload: 1,
      type: ACTION_TYPES.INCREMENT_WIN_COUNT_BY_PLAYER_ID
    });
  });
});
