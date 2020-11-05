import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

export default function GoogleLogoutButton() {
  const history = useHistory();

  const onLogout = () => {
    alert("Successfully logged out.");
    history.push("/");
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={onLogout}
    ></GoogleLogout>
  );
}
