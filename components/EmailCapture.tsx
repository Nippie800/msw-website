"use client";

import { useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) return;

    try {
      setLoading(true);

      await addDoc(
        collection(db, "communitySubscribers"),
        {
          email,
          createdAt: serverTimestamp(),
        }
      );

      setSuccess(true);
      setEmail("");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl">

      <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/40">
        Join The Community
      </p>

      <h3 className="mb-6 text-2xl font-semibold">
        Stay informed on new drops.
      </h3>

      <div className="flex flex-col gap-3 md:flex-row">

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
            flex-1
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-white
            outline-none
          "
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            border
            border-white
            bg-white
            px-6
            py-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-black
            transition
            hover:bg-transparent
            hover:text-white
          "
        >
          {loading ? "Joining..." : "Join"}
        </button>

      </div>

      {success && (
        <p className="mt-4 text-sm text-green-400">
          Welcome to the community.
        </p>
      )}

    </div>
  );
}