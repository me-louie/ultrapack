import React from "react";
import { Typography } from "@material-ui/core";
import GoogleLoginButton from "./GoogleLoginButton";
import GoogleLogoutButton from "./GoogleLogoutButton";

export default function LandingPage() {
  return (
    <div>
      <Typography>Welcome to Ultrapack</Typography>
      <Typography>To save your trip...</Typography>
      <GoogleLoginButton />
      <GoogleLogoutButton />
    </div>
  );
}
