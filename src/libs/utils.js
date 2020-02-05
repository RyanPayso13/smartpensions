export const getRandonIntFromRange = (min = 1, max) => {
  if (max === min || max <= min) {
    throw new Error("The max end of range must be greater than the min");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
