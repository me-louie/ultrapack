const initialState = [];

export const trips = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_TRIPS":
      return action.payload;
    default:
      return state;
  }
};

export default trips;
