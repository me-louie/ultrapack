import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";



export default function GoogleLoginButton() {

    const history = useHistory();

    const responseGoogle = (response) => {
      console.log(response);
      axios({
        method: "POST",
        url: "http://localhost:9000/api/googlelogin",
        data: { tokenId: response.tokenId },
      }).then((response) => {
        console.log("Google login success", response);
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        history.push("/trips");
      });
  };
  
  const loginFailure = (response) => {
    console.log("Login failed: ", response);
  }

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login/Sign Up"
      onSuccess={responseGoogle}
      onFailure={loginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
