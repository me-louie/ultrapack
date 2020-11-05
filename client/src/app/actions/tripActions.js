import axios from "axios";

export const SET_TRAILHEAD = "SET_TRAILHEAD";
export const SET_NAME_DATE_DESCRIPTION = "SET_NAME_DATE_DESCRIPTION";
export const SET_ALL_TRIPS = "SET_ALL_TRIPS";

export const setTrailhead = (payload) => ({
  type: SET_TRAILHEAD,
  payload,
});

export const setNameDateDescription = (payload) => ({
  type: SET_NAME_DATE_DESCRIPTION,
  payload,
});

export const setAllTrips = (payload) => ({
  type: SET_ALL_TRIPS,
  payload,
});

export const createTrip = (trip) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:9000/createtrip",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      data: trip,
    })
      .then((res) => console.log(res))
      .then(dispatch(setNameDateDescription(trip)))
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getTrips = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:9000/alltrips",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => dispatch(setAllTrips(res.data.result.trips)))
      .catch((err) => {
        console.log(err);
      });
  };
};
