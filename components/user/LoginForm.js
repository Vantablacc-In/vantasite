import React, { useState } from "react";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
      });

      if (error) {
        setError(error.message);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error signing in user:", error);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError("An unexpected error occurred.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            disabled={googleLoading}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            disabled={googleLoading}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <p className="text-gray-600 text-xs italic">
            Must be at least 8 characters long.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={loading || googleLoading}
            className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? "opacity-50" : ""
            }`}
            type="submit"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>
      <div className="mt-4">
        <hr className="mb-4" />
        <div className="text-center">
          <p>Or sign in with:</p>
          <button
            disabled={loading || googleLoading}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              googleLoading ? "opacity-50" : ""
            }`}
            onClick={handleGoogleLogin}
          >
            {googleLoading ? "Redirecting..." : "Sign In with Google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
