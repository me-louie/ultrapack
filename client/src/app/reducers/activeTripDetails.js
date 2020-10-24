const initialState = { name: "", dateTime: "", trailhead: "", description: "" };

export const activeTripDetails = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRAILHEAD":
      return { ...state, trailhead: action.payload };
    case "SET_NAME_DATE_DESCRIPTION":
      return {
        ...state,
        name: action.payload.name,
        dateTime: action.payload.dateTime,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export default activeTripDetails;
