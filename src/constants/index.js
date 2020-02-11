export const RESOURCE_LIST = [
  {
    name: "starships",
    count: 37,
    attributes: [
      "name",
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity"
    ]
  },
  {
    name: "people",
    count: 87,
    attributes: ["name", "height", "mass"]
  }
];
export const API_BASE_URL = "https://swapi.co/api";
export const INITIAL_STATE = {
  game: {
    count: 0,
    resource: null
  },
  players: [
    { id: 1, winCount: 0, topTrump: null, attribute: "" },
    { id: 2, winCount: 0, topTrump: null, attribute: "" }
  ]
};
