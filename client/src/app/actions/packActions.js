export const ADD_TO_PACK = "ADD_TO_PACK";
export const ADD_ROW = "ADD_ROW";

export const addToPack = (payload) => ({
  type: ADD_TO_PACK,
  payload,
});

export const addRow = () => ({
  type: ADD_ROW,
});
