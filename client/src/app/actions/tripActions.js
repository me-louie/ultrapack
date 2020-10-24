export const SET_TRAILHEAD = "SET_TRAILHEAD";
export const SET_NAME_DATE_DESCRIPTION = "SET_NAME_DATE_DESCRIPTION";

export const setTrailhead = (payload) => ({
  type: SET_TRAILHEAD,
  payload,
});

export const setNameDateDescription = (payload) => ({
  type: SET_NAME_DATE_DESCRIPTION,
  payload,
});
