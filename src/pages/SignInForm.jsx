import { use, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import Logo from "../assets/logo/logo-etec.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useAuth } from "../components/context/AuthContext";

export default function AnimatedLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, setIsRegistered, isRegistered } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleClick = async () => {
    navigate("/");
  };

  const validateForm = () => {
    // const newErrors = {};
    // if (!formData.email) {
    //   newErrors.email = "Email is required";
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = "Please enter a valid email address";
    // }
    // if (!formData.password) {
    //   newErrors.password = "Password is required";
    // } else if (formData.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters";
    // }
    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const respone = await axios.post("/login", formData);
      toast.success(`🎉 Welcome back , ${respone.data.user.name}!`);

      const user = respone.data;

      setFormData({ email: "", password: "" });
      login(user);
      setIsRegistered(true);

      navigate(from, { replace: true });
    } catch (error) {
      toast.error(`Login failed. Please try again.`);

      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      // credentialResponse.credential is a JWT token you can decode to get user info
      setIsLoading(true);
      const decoded = jwtDecode(credentialResponse.credential);

      const googleUserData = {
        name: decoded.name,
        email: decoded.email,
        google_id: decoded.sub,
        avatar: decoded.picture,
      };
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Now send googleUserData to your backend API
      const response = await axios.post(
        "http://localhost:8000/api/google-login",
        googleUserData
      );
      if (response.status === 200) {
        toast.success(`🎉 Welcome back , ${response.data.user.name}!`);
        const user = response.data;

        setFormData({ email: "", password: "" });
        login(user);
        setIsRegistered(true);

        navigate(from, { replace: true });
      }
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error(`User not register,${error.message}!`);
      } else {
        console.error("Login error:", error);
        alert("An error occurred during login.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginError = () => {
    alert("Google login failed");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-red-400/20 animate-pulse"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-white/20 rounded-full animate-ping"></div>

        {/* Moving Gradient Orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <button onClick={handleClick} className="cursor-pointer">
                <img src={Logo} alt="Logo.. " />
              </button>
            </div>
            <CardTitle className="text-3xl font-bold text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-300">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.submit && (
                <Alert
                  variant="destructive"
                  className="bg-red-500/20 border-red-500/50 animate-shake"
                >
                  <AlertDescription className="text-red-200">
                    {errors.submit}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email Address
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/50 transition-all duration-300 ${
                      errors.email ? "border-red-500 animate-shake" : ""
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-400 animate-fade-in">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">
                  Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/50 transition-all duration-300 ${
                      errors.password ? "border-red-500 animate-shake" : ""
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-purple-400 transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400 animate-fade-in">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded bg-white/10"
                  />
                  <Label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-300"
                  >
                    Remember me
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-transparent hover:bg-transparent w-full flex "
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                  />
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-300">
                  {"Don't have an account? "}
                  <button
                    onClick={handleClick}
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Create one now
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
