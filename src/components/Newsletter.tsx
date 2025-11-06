"use client";
import { useState } from "react";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`grid ${compact ? "sm:grid-cols-[1fr_auto]" : "md:grid-cols-[1fr_auto]"} gap-3`}
      id="newsletter"
    >
      <input
        type="email"
        required
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border px-3 py-3 text-sm"
      />
      <button className="rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90">
        {status === "ok" ? "Merci !" : "Obtenir l’accès"}
      </button>
      {status === "error" && <p className="text-xs text-red-600">Erreur. Réessayez.</p>}
    </form>
  );
}
