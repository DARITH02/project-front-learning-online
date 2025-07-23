import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function GoogleLoginButton() {
  const navigate = useNavigate(); // ✅ hook at top level
  const { login, setIsRegistered } = useAuth(); // ✅ hook at top level
  const sendGoogleData = async (googleUser) => {
    const data = {
      name: googleUser.name,
      email: googleUser.email,
      google_id: googleUser.sub,
      avatar: googleUser.picture,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/google-registraion",
        data
      );

      toast.success(`🎉 Welcome , ${response.data.user.name}!`);

      login(response.data.user, response.data.token); // Save to context
      setIsRegistered(true); // Optional

      navigate("/", { replace: true }); // Redirect to home

      // Save token to localStorage or context here
    } catch (error) {
      toast.error("🚫 The email has already been taken.");
    }
  };

  const onSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential); // <-- fixed usage
    console.log("Decoded Google user:", decoded);
    sendGoogleData(decoded);
  };

  const onError = () => {
    console.log("Google login failed");
  };

  return <GoogleLogin onSuccess={onSuccess} onError={onError} />;
}

export default GoogleLoginButton;
