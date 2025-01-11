import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const location = useLocation();
  const from = location?.state || "/";
  const [error, setError] = useState("");
  const [passwordIcon, setPasswordIcon] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);

  if (!loading) return <p>Loading</p>;

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(pass)) {
      setError("1 uppercase, 1 lowercase, and at least 6 characters long.");
      return;
    }
    try {
      const result = await createUser(email, pass);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, displayName: name, photoURL: photo });
      toast.success("Successfully created user!", {
        position: "top-left",
      });
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Register | G. Art H.</title>
      </Helmet>
      <div className="flex mx-1 justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <div className="flex w-full items-center max-w-sm mx-auto overflow-hidden rounded-lg border shadow-lg bg-[#263238] lg:max-w-4xl">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" alt="" />
            </div>
            <p className="mt-3 text-xl text-center text-[#D1AF78]">
              Get Your Free Account Now.
            </p>

            <div
              onClick={handleGoogleSignIn}
              className="flex cursor-pointer items-center justify-center mt-4 text-[#D1AF78] transition-colors duration-300 transform border rounded-lg hover:bg-gray-50"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  {/* Google Icon Paths */}
                </svg>
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>
              <div className="text-xs text-center text-[#D1AF78] uppercase hover:underline">
                or Register with email
              </div>
              <span className="w-1/5 border-b lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-[#D1AF78]"
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  required
                  name="name"
                  className="block w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-[#D1AF78]"
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  autoComplete="photo"
                  name="photo"
                  required
                  className="block w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-[#D1AF78]"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  required
                  className="block w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>
              <div className="mt-4 relative">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-[#D1AF78]"
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>
                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  name="password"
                  required
                  className="block w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type={passwordIcon ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setPasswordIcon(!passwordIcon)}
                  className="absolute text-black top-10 right-5"
                >
                  {passwordIcon ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b md:w-1/4"></span>
              <Link
                to="/login"
                className="text-xs text-[#D1AF78] uppercase hover:underline"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b md:w-1/4"></span>
            </div>
          </div>
          <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
            {location ? (
              <iframe
                height={500}
                className="mx-auto"
                src="https://lottie.host/embed/4732bd00-4405-4792-a8cc-91af315e22dd/sewYRIAW1I.lottie"
              ></iframe>
            ) : (
              "data"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
