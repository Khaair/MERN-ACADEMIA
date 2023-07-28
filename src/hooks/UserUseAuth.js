import React from "react";
import axios from "axios";

export default function UserUseAuth() {
  const jwtToken = localStorage.getItem("userAccessToken");
  if (jwtToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
    return true;
  } else {
    return false;
  }
}
