"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    event.preventDefault();

    // Here you can implement your login logic
    console.log("Logging in with:", username, password);

    if (username === "admin" && password === "password") {
      router.push("/admindashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container w-full ">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className=" w-full"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className=" w-full"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && <p className="animate-pulse">{error}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
