import * as utils from "./utils";
import * as constants from "../constants/index";

describe("Utilities", () => {
  it("should return a random integere between the range provided", () => {
    const result = utils.getRandomIntFromRange(1, 10);
    const isResultInRange = result >= 1 && result <= 10;
    expect(isResultInRange).toBe(true);
  });

  it("should extract the people list data", () => {
    const resp = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male"
    };

    const result = utils.extractListData(constants.RESOURCE_LIST[1].name, resp);
    expect(result).toEqual({
      name: "Luke Skywalker",
      height: "172",
      mass: "77"
    });
  });

  it("should extract the starship list data", () => {
    const resp = {
      name: "Death Star",
      model: "DS-1 Orbital Battle Station",
      manufacturer:
        "Imperial Department of Military Research, Sienar Fleet Systems",
      cost_in_credits: "1000000000000",
      length: "120000",
      max_atmosphering_speed: "n/a",
      crew: "342953",
      passengers: "843342",
      cargo_capacity: "1000000000000",
      consumables: "3 years",
      hyperdrive_rating: "4.0",
      MGLT: "10",
      starship_class: "Deep Space Mobile Battlestation"
    };

    const result = utils.extractListData(constants.RESOURCE_LIST[0].name, resp);
    expect(result).toEqual({
      name: "Death Star",
      cost_in_credits: "1000000000000",
      length: "120000",
      max_atmosphering_speed: "n/a",
      crew: "342953",
      passengers: "843342",
      cargo_capacity: "1000000000000"
    });
  });

  it("should format the item attribute for display", () => {
    expect(utils.formatItemForDisplay("cost_in_credits")).toEqual(
      "cost in credits"
    );
  });

  describe("Determine game winner", () => {
    let state = {
      players: [
        {
          id: 1,
          topTrump: {
            height: 100
          }
        },
        {
          id: 2,
          topTrump: {
            height: 200
          }
        }
      ]
    };
    const height = "height";

    it("should determine player 1 as winner if player 2 value isNaN", () => {
      const data = { height: "unknown" };
      const winner = utils.determineGameWinner(state, 2, data, height);
      expect(winner).toEqual(1);
    });

    it("should determine player 2 as winner if player 1 value isNaN", () => {
      const data = { height: "unknown" };
      const winner = utils.determineGameWinner(state, 1, data, height);
      expect(winner).toEqual(2);
    });

    it("should determine player 1 as winner if player 2 value is less than player 1 value", () => {
      const data = { height: 300 };
      const winner = utils.determineGameWinner(state, 1, data, height);
      expect(winner).toEqual(1);
    });

    it("should determine player 2 as winner if player 1 value is less than player 2 value", () => {
      const data = { height: 0 };
      const winner = utils.determineGameWinner(state, 1, data, height);
      expect(winner).toEqual(2);
    });

    it("should determine player 1 as winner as default case", () => {
      const data = { height: 200 };
      const winner = utils.determineGameWinner(state, 1, data, height);
      expect(winner).toEqual(1);
    });
  });
});
