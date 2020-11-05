const initialState = {
  credentials: "",
  token: "",
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
};

export default user;
