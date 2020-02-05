import * as utils from "./utils";

describe("Utilities", () => {
  it("should return a random integere between the range provided", () => {
    const result = utils.getRandonIntFromRange(1, 10);
    const isResultInRange = result >= 1 && result <= 10;
    expect(isResultInRange).toBe(true);
  });
});
