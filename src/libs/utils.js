import * as constants from "../constants/index";

export const getRandonIntFromRange = (min = 1, max) => {
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
