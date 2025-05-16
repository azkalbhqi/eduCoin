"use client";

import { useState } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { RippleButton } from "@/components/magicui/ripple-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function EarlyRegistration() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Mohon masukkan email yang valid.");
      return;
    }
    setError("");
    setSubmitted(true);
    // TODO: Kirim email ke backend / API pendaftaran awal
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <MagicCard className="max-w-md w-full p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Early Registration EduCoin
        </h1>

        {submitted ? (
          <p className="text-green-600 font-semibold text-center">
            Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <InteractiveHoverButton
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow"
            >
              Daftar Sekarang
            </InteractiveHoverButton>
          </form>
        )}
      </MagicCard>
    </div>
  );
}
