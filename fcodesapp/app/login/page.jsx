"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Handle custom login logic here
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  if (session) {
    // If the user is logged in, redirect to the dashboard
    router.push("/admindashboard");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Username and Password Fields */}
        </form>

        <div className="my-6 flex items-center justify-center">
          <span className="border-b border-gray-300 w-1/5"></span>
          <span className="mx-3 text-gray-500">or</span>
          <span className="border-b border-gray-300 w-1/5"></span>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="mr-3 text-2xl" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
