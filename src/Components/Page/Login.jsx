import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { user, signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const emailRef = useRef();
  const [passwordIcon, setPasswordIcon] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(location?.state || "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn(email, password);
      navigate(location?.state || "/");
      toast.success("Successfully logged in!", {
        position: "top-left",
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.success("Check your email for reset instructions.", {
          position: "top-left",
        });
      });
    } else {
      toast.error("Please enter your email address.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center  bg-[#302E2F] px-4">
      <Helmet>
        <title>Login | Gadget Heaven</title>
      </Helmet>
      <div className="w-full max-w-md bg-[#263238] text-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-center text-[#D1AF78]">
          Sign in to continue.
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-[#D1AF78]  text-black font-style rounded-lg hover:bg-blue-500 focus:outline-none"
        >
          Sign in with Google
        </button>
        <div className="flex items-center mt-4">
          <span className="w-1/5 border-b"></span>
          <p className="text-sm mx-auto text-white text-center">or use your email</p>
          <span className="w-1/5 border-b"></span>
        </div>
        <form onSubmit={handleSignIn} className="mt-4">
          <label className="block text-sm text-[#D1AF78] font-style">Email Address</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="w-full px-4 py-2 text-black mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <label className="block text-sm text-[#D1AF78] font-style mt-4">Password</label>
          <div className="relative">
            <input
              type={passwordIcon ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 text-black bg-gray-200 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setPasswordIcon(!passwordIcon)}
              className="absolute top-3 right-4 text-gray-600"
            >
              {passwordIcon ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="mt-2 text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-[#D1AF78] font-style text-sm hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full mt-4 text-black font-style bg-[#D1AF78] py-2 rounded-lg hover:bg-[#D1AF78] focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#CE6334] font-style hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
