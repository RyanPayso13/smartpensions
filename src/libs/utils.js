import * as constants from "../constants/index";

export const getRandomIntFromRange = (min = 1, max) => {
  if (max === min || max <= min) {
    throw new Error("The max end of range must be greater than the min");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const extractListData = (resource = "", data = {}) => {
  let attr =
    resource === constants.RESOURCE_LIST[0].name
      ? constants.RESOURCE_LIST[0].attributes
      : constants.RESOURCE_LIST[1].attributes;
  let result = {};
  [...attr].forEach(el => (result[el] = data[el]));
  return result;
};

export const determineGameWinner = (state, id, data, item) => {
  const opponent = [...state.players].find(player => player.id !== id);
  const opponentValue = parseInt(opponent.topTrump[item], 10);
  const playerValue = parseInt(data[item], 10);

  let winner;

  if (Number.isNaN(playerValue)) {
    winner = opponent.id;
  } else if (Number.isNaN(opponentValue)) {
    winner = id;
  } else if (playerValue > opponentValue) {
    winner = id;
  } else if (playerValue < opponentValue) {
    winner = opponent.id;
  } else {
    winner = id;
  }

  return winner;
};

export const formatItemForDisplay = item => {
  return item.replace(/_/g, " ");
};

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

export const updateItemInArray = (array, itemId, updateItemCallback) => {
  return array.map(item => {
    if (item.id !== itemId) {
      return item;
    }
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
};
