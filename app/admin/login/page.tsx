"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      window.location.href = "/admin";
    } catch (err) {
      console.error(err);

      setError(
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="w-full max-w-md border border-white/10 bg-black p-8">

        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-white/40">
          Made Somehow
        </p>

        <h1 className="mb-8 text-4xl font-semibold uppercase">
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              border
              border-white/10
              bg-black
              px-4
              py-4
              text-white
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
              w-full
              border
              border-white/10
              bg-black
              px-4
              py-4
              text-white
              outline-none
            "
          />

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full
              border
              border-white
              px-6
              py-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </div>
      </div>
    </main>
  );
}