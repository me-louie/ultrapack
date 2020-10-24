const initialState = { trailheadErr: false };

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case "TRAILHEAD_ERROR":
      return { trailheadErr: action.payload };
    default:
      return state;
  }
};
export default errors;
