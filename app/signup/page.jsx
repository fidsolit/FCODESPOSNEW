"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; // Google icon for the button
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const SignupForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormsg, setError] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message on submit

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password in Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up successfully");

      // Optionally, you can save the username in Firestore or in the user's profile

      // Redirect to the user dashboard after successful signup
      router.push("/userdashboard");
    } catch (err) {
      console.error("Signup error:", err.message);
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      // Sign in with Google using Firebase Auth
      await signInWithPopup(auth, googleProvider);
      console.log("Signed in with Google");

      // Redirect to the user dashboard after Google sign-in
      router.push("/userdashboard");
    } catch (err) {
      console.error("Google signup error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password:
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          {errormsg && (
            <p className="text-red-500 text-sm animate-pulse">{errormsg}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center">
          <span className="border-b border-gray-300 w-1/5"></span>
          <span className="mx-3 text-gray-500">or</span>
          <span className="border-b border-gray-300 w-1/5"></span>
        </div>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="mr-3 text-2xl" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
