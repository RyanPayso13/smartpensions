import * as utils from "./utils";
import * as constants from "../constants/index";

describe("Utilities", () => {
  it("should return a random integere between the range provided", () => {
    const result = utils.getRandonIntFromRange(1, 10);
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

  describe("Determine game winner", () => {});
});
